<script setup>
import BaseSvg from "@/shared/ui/icon/BaseSvg.vue"
import { computed, ref } from "vue"

const searchQuery = ref("")

const hasValue = computed(() => searchQuery.value.length > 0)

const clearSearch = () => {
  searchQuery.value = ""
}
</script>

<template>
  <div class="search-bar">
    <div class="search-bar__inner">
      <BaseSvg id="icon-icon-search" width="20" height="20" class="search-bar__icon" />
      <input
        v-model="searchQuery"
        type="text"
        class="search-bar__input"
        placeholder="Search for ..."
      />
      <button v-if="hasValue" @click="clearSearch" class="search-bar__clear-button" type="button">
        <BaseSvg id="icon-clear" width="11" height="11" class="search-bar__clear-icon" />
        Clear
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-bar {
  width: 100%;
  height: 32px;

  &__inner {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: $color-background;
    border-radius: 12px;
    padding: 0 12px;
  }

  &__input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 0 8px;
    font-family: $font-family;
    font-weight: 600;
    font-size: 12px;
    color: #fff;

    &::placeholder {
      font-family: $font-family;
      font-weight: 600;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  &__clear-button {
    display: flex;
    align-items: center;
    gap: 4px;
    background-color: transparent;
    padding: 0;
    border: none;
    font-family: $font-family;
    font-weight: 600;
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    flex-shrink: 0;
    transition: color 0.4s ease;

    &:hover {
      color: #fff;
    }
  }
}
</style>
