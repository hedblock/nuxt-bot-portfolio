<template>
    <CStack
        flexDirection="row"
        borderBottom="0.5px solid"
        borderColor="gray.500"
        :py="4"
    >
        <TokenDisplay
            :token="token"
        />
        <AllocationInput 
            :allocation="allocation"
            :updateAllocation="updateAllocation"
        />
    </CStack>
</template>

<script setup lang="ts">
import { Token } from '../../../composables/types'
import TokenDisplay from "../../utilities/TokenDisplay.vue";

import { defineProps } from 'vue'
import AllocationInput from './AllocationInput.vue';

import { CStack } from '@chakra-ui/vue';

defineProps<{
    token: Token;
    allocation: number;
    updateAllocation: (value: number) => void
}>()

</script>

<style scoped>

</style>