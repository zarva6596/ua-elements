<template>
  <div class="za-drawer__wrapper">

  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean
}

defineProps<Props>();
defineEmits<{
  (e: 'update:modelValue', data: boolean): void
}>()
</script>

<style lang="scss">
.za-drawer {
  &__wrapper {
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: .5;
  }
}
</style>