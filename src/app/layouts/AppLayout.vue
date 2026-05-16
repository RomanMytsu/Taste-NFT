<script setup>
import AppHeader from "@/widgets/header/ui/AppHeader.vue"
</script>

<template>
  <div class="app-layout">
    <AppHeader />
    <main>
      <slot />
    </main>
  </div>
</template>
