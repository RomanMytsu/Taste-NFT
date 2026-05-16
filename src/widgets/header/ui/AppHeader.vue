<script setup>
import SearchBar from "@/features/search/ui/SearchBar.vue"
import logo from "@/shared/assets/icons/logo.svg"
import BaseButton from "@/shared/ui/button/BaseButton.vue"
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <RouterLink to="/" class="header__logo">
        <img :src="logo" alt="logo" class="header__logo-img" width="47" height="47" />
      </RouterLink>
      <SearchBar />
      <BaseButton class="header__btn-wallet">Connect wallet</BaseButton>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0 0 32px 32px;
  height: 56px;
  box-shadow: 0 25px 40px 0 rgba(0, 0, 0, 0.05);
  background: #30363d;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__btn-wallet {
    margin-left: 16px;
  }

  :deep(.search-bar) {
    margin-left: 34px;
  }
}
</style>
