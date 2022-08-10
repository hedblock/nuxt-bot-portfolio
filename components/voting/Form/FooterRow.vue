<template>
    <CStack
        direction="row"
        w="100%"
        justifyContent="space-between"
    >
        <CButton
            @click="() => setEqualAllocations()"
        >
            Set Equal Allocations
        </CButton>
        <CText>
            Total {{ allocationsSum }}%
        </CText>
    </CStack>
</template>

<script setup lang="ts">
import {
    CStack,
    CButton,
    CText
} from '@chakra-ui/vue';

defineProps<{
    setEqualAllocations: () => void;
    allocationsSum: number;
}>();
</script>