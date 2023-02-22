<template>
  <div>
    <ua-form :schema="schema" />
  </div>
</template>

<script setup lang="ts">
import UaForm from '@/components/form/UaForm.vue';
import type { FormSchemaItem } from '@/components/form/types';

const schema: FormSchemaItem[] = [
  {
    name: 'first-name',
    element: 'input'
  },
  {
    name: 'last-name',
    element: 'input'
  }
]
</script>