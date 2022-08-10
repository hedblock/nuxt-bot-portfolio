<template>
    <CLink
        :href="`https://coinmarketcap.com/currencies/${slug}/`"
        opacity="0.8"
        _hover="{
            opacity: 1
        }"
    >
        {{ symbol }}
    </CLink>
</template>

<script setup lang="ts">

import { CLink } from '@chakra-ui/vue';

import { defineProps } from 'vue'

defineProps<{
    symbol: string;
    slug: string;
}>()
</script>

<style scoped>

</style>