<template>
    <button 
        class="px-4 py-2 rounded-md hover:opacity-75"
        :class="{
            'bg-brand-500': !disabled && variant === 'solid',
            'bg-gray-400 opacity-75': disabled
        }"
        @click="() => onClick"
        :disabled="disabled"
    >
        {{ text }}
    </button>
</template>

<script setup lang="ts">

import { defineProps } from 'vue'

defineProps<{
    text: string;
    onClick?: Function;
    variant?: 'solid' | 'text'
    disabled?: boolean;
}>();

</script>

<style scoped>

</style>