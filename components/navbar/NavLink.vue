<template>
<CBox>
    <CLink
        display="block"
        :px="2"
        :py="1"
        :mr="mr"
        rounded='md'
        :bg="isActive ? 'gray.700' : 'transparent'"
        :_hover="{
            textDecoration: 'none',
            bg: 'gray.700',
        }"
        :href="href"
    >
        <CText>
            {{ name }}
        </CText>
    </CLink>
</CBox>
    
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

import { CBox, CLink, CText } from '@chakra-ui/vue';

defineProps<{
    href: string,
    name: string,
    isActive?: boolean,
    mr?: number,
}>()

</script>