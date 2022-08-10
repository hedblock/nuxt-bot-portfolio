<template>
    <main>
        <CFlex
            maxW="3xl"
            mx="auto"
            alignItems="center"
            py="6rem"
        >
            <slot></slot>
        </CFlex>
    </main>
</template>

<script setup lang="ts">
import { CFlex } from '@chakra-ui/vue';
</script>