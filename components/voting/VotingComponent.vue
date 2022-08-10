<script setup lang="ts">

import SurveyComplete from "./SurveyComplete.vue";
import LoadingIndicator from "../utilities/LoadingIndicator.vue";
import SurveyComponent from "./SurveyComponent.vue";

import useSurvey from '~/composables/useSurvey';

const { 
    tokens, 
    tokensLoding, 
    saving, 
    complete, 
    allocations, 
    allocationsSum,
    updateAllocation,
    setEqualAllocations
} = useSurvey();

</script>

<template>
    <SurveyComplete v-if="complete" />
    <LoadingIndicator v-else-if="saving"/>
    <SurveyComponent 
        v-else
        :tokensLoading="tokensLoding"
        :tokens="tokens"
        :allocations="allocations"
        :allocationsSum="allocationsSum"
        :updateAllocation="updateAllocation"
        :setEqualAllocations="setEqualAllocations"
    />
</template>