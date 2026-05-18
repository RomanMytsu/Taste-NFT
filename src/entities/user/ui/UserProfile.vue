<script setup>
import { useWalletStore } from "@/features/wallet-connect/useWallet"
import BaseSvg from "@/shared/ui/icon/BaseSvg.vue"

const { accountData } = useWalletStore()
</script>

<template>
  <div class="profile">
    <div class="profile__trigger">
      <img :src="accountData.img" alt="Avatar" width="40" height="40" class="profile__avatar-img" />
      <div class="profile__info">
        <p class="profile__info_name">{{ accountData.name }}</p>
        <p class="profile__info_username">{{ accountData.username }}</p>
        <div class="profile__balance">
          <span class="profile__balance_label">Balance:</span>
          <BaseSvg id="icon-sold-icon" width="16" height="16" />
          <span class="profile__balance_value">{{ accountData.balance }}</span>
        </div>
      </div>
      <BaseSvg id="icon-icon-arrow-profile" width="16" height="13" />
    </div>

    <transition name="dropdown">
      <div v-if="isDropdownOpen" class="profile__dropdown">
        <p class="profile__address-label">Address: {{ accountData.address }}</p>
        <nav class="profile__nav">
          <button class="profile__nav-link">My profile</button>
          <button class="profile__nav-link">Balance settings</button>
          <button class="profile__nav-link profile__link_logout">Log out</button>
        </nav>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.profile {
  position: relative;
  display: flex;
  align-items: center;

  &__trigger {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    cursor: pointer;
  }

  &__avatar-img {
    width: 40px;
    height: 40px;
    border-radius: 12px;
  }
  &__info {
    display: flex;
    flex-direction: column;

    &_name {
      font-weight: 700;
      font-size: 16px;
    }

    &_username {
      font-weight: 500;
      font-size: 12px;
      background: $gradient-primary-text;
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &__balance {
    display: flex;
    align-items: center;
    gap: 4px;

    &_label {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
    }

    &_value {
      font-size: 12px;
    }
  }
}
</style>
