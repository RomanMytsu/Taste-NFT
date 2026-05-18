<script setup>
import { ref } from "vue"
import BaseModal from "@/shared/ui/base-modal/BaseModal.vue"
import GuideStepCard from "./GuideStepCard.vue"
import BaseButton from "@/shared/ui/button/BaseButton.vue"
import { delay } from "@/shared/lib/helpers/delay"
import BaseLoader from "@/shared/ui/loader/BaseLoader.vue"
import { useWalletStore } from "./useWallet"

const isOpen = defineModel({ type: Boolean, default: false })
const isLoading = ref(false)
const { connect } = useWalletStore()

const steps = [
  { id: 1, text: "Описание что нужно сделать", videoId: "iywaBOMvYLI" },
  { id: 2, text: "Описание что нужно сделать", videoId: "L-iepu3EtyE" },
  { id: 3, text: "Описание что нужно сделать", videoId: "DnGdoEa1tPg" },
]

const handleConnect = async () => {
  isLoading.value = true
  try {
    await delay(2000)
    connect()
    isOpen.value = false
  } catch (error) {
    console.error("Ошибка при подключении", error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <BaseModal v-model="isOpen">
    <template #header-center>
      <p class="wallet-modal__title">Connecting wallet</p>
    </template>
    <template #content>
      <div v-if="!isLoading" class="wallet-modal__content">
        <div class="wallet-modal__steps-wrapper">
          <GuideStepCard
            v-for="step in steps"
            :key="step.id"
            :step-number="step.id"
            :description="step.text"
            :video-id="step.videoId"
          />
        </div>
        <div class="wallet-modal__btn-wrapper">
          <BaseButton class="wallet-modal__btn-wrapper-btn" @click="handleConnect"
            >Connect wallet</BaseButton
          >
        </div>
      </div>

      <div v-else class="wallet-modal__loader">
        <BaseLoader />
      </div>
    </template>
  </BaseModal>
</template>

<style scoped lang="scss">
.wallet-modal {
  &__title {
    font-size: 24px;
    margin-left: 18px;
  }

  &__content {
    margin-top: 43px;
    padding: 0 28px 0 31px;
  }

  &__steps-wrapper {
    display: flex;
    justify-content: center;
    gap: 57px;
    @media (max-width: $bp-tablet) {
      flex-direction: column;
    }
  }

  &__btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 32px;

    &-btn {
      height: 40px;
      font-size: 14px;
      padding: 0 28px;
    }
  }
}
</style>
