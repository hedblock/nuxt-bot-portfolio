<template>
    <CStack
        :spacing="4"
        w="100%"
        shouldWrapChildren
    >
        <HeaderRow />
        <LoadingIndicator v-if="loading"/>
        <TokenRow 
            v-for="token in tokens"
            :key="token.slug"
            :token="token"
            :allocation="allocations[token.slug]"
            :updateAllocation="(val) => updateAllocation(token.slug, val)"
        />
        <FooterRow
            :setEqualAllocations="setEqualAllocations"
            :allocationsSum="allocationsSum"
        />
    </CStack>
</template>

<script setup lang="ts">
import HeaderRow from "./HeaderRow.vue";
import LoadingIndicator from "../../utilities/LoadingIndicator.vue";
import TokenRow from "./TokenRow.vue";
import FooterRow from "./FooterRow.vue";

import { CStack } from '@chakra-ui/vue';

import { Token, WeeklyResult } from '~/composables/types';

defineProps<{
    loading: boolean;
    tokens: Token[];
    allocations: WeeklyResult;
    allocationsSum: number;
    updateAllocation: (slug: string, value: number) => void;
    setEqualAllocations: () => void;
}>();

</script>

<style scoped>

</style>