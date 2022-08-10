<script setup lang="ts">

import {
    CStack,
    CText
} from '@chakra-ui/vue';

import SubmitButton from "./SubmitButton.vue";
import VotingForm from "./Form/VotingForm.vue";

import { Token, WeeklyResult } from '~/composables/types';

defineProps<{
    tokensLoading: boolean;
    tokens: Token[];
    allocations: WeeklyResult;
    allocationsSum: number;
    updateAllocation: (slug: string, value: number) => void;
    setEqualAllocations: () => void;
}>();

</script>

<template>
    <CStack
        w="100%"
        :spacing="8"
        shouldWrapChildren
    >
        <CText
            fontSize="3xl"
            fontWeight="bold"
        >
            Voting Page
        </CText>
        <CText>
            The Real Vision Pro Crypto (RVPC) Portfolio is a community driven portfolio, based on the votes in the RVPC survey. It is administered by the Real Vision Bot, which aggregates the weekly votes into an allocation and informs the RVPC community about rebalancings, interesting developments and performance.
        </CText>
        <VotingForm 
            :loading="tokensLoading"
            :tokens="tokens"
            :allocations="allocations"
            :allocationsSum="allocationsSum"
            :updateAllocation="updateAllocation"
            :setEqualAllocations="setEqualAllocations"
        />
        <SubmitButton
            :submit="() => {}"
            :invalid="false"
        />
    </CStack>
</template>