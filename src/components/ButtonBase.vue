<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <button
    class="hover:from-blue-slate hover:to-blue-royal flex h-14 w-full items-center justify-center rounded-full bg-navy font-bold text-white hover:bg-gradient-to-b"
  >
    {{ text }}
  </button>
</template>
