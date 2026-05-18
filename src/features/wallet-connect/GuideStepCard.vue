<script setup>
import BaseModal from "@/shared/ui/base-modal/BaseModal.vue"
import BaseSvg from "@/shared/ui/icon/BaseSvg.vue"
import { computed, ref } from "vue"

const props = defineProps({
  stepNumber: {
    type: [String, Number],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
})

const isVideoOpen = ref(false)

const openVideo = () => {
  isVideoOpen.value = true
}

const closeVideo = () => {
  isVideoOpen.value = false
}

defineEmits(["play"])

const youtubeEmbedUrl = computed(() => {
  return `https://www.youtube.com/embed/${props.videoId}?autoplay=1`
})

const thumbnailUrl = computed(() => {
  return `https://img.youtube.com/vi/${props.videoId}/maxresdefault.jpg`
})
</script>

<template>
  <div class="guide-card">
    <div class="guide-card__preview">
      <img :src="thumbnailUrl" alt="video preview" class="guide-card__img" />

      <button class="guide-card__play-btn" type="button" @click="openVideo">
        <BaseSvg id="icon-play" width="9" height="11" />
      </button>

      <div class="guide-card__badge">
        <p class="guide-card__step-num">{{ stepNumber }}.</p>
      </div>
    </div>
    <p class="guide-card__description">
      {{ description }}
    </p>

    <BaseModal v-model="isVideoOpen" @update:model-value="closeVideo">
      <template #header-center>
        <h3 class="guide-card__title">Инструкция</h3>
      </template>
      <template #content>
        <div class="guide-card__container">
          <iframe
            v-if="isVideoOpen"
            :src="youtubeEmbedUrl"
            title="YouTube video player"
            frameborder="0"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            allowfullscreen
            class="guide-card__iframe"
          ></iframe>
        </div>
      </template>
    </BaseModal>
  </div>
</template>

<style scoped lang="scss">
.guide-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__preview {
    position: relative;
    border-radius: 16px;
    background: #c4c4c4;
    width: 100%;
    max-width: 160px;
    max-height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__img {
    border-radius: 16px;
  }

  &__play-btn {
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 100%;
    background: rgba(0, 0, 0, 0.62);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;

    svg {
      margin-left: 2px;
    }
  }

  &__badge {
    position: absolute;
    z-index: 2;
    left: -10px;
    top: -27px;
    width: 40px;
    height: 40px;
    border-radius: 16px;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__step-num {
    font-weight: 700;
    font-size: 20px;
    color: #1f2b38;
    transform: translate(2px, -1px);
  }

  &__description {
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    margin-top: 12px;
  }

  &__iframe {
    width: 100%;
    height: 315px;
  }

  &__container {
    margin-top: 15px;
  }
}
</style>
