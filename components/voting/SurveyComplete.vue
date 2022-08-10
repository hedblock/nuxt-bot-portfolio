<template>
    <CStack
        :spacing="8"
        alignItems="center"
    >
        <CText 
            fontSize="3xl"
            fontWeight="bold"
        >
            Survey Complete!
        </CText>
        <CText class="text-lg">
            View this week's survey results from the results page.
        </CText>
        <CLink
            href="/results"
        >
            <CButton
                variant="solid"
                variantColor="brand"
                color="white"
            >
                View Results
            </CButton>
        </CLink>
    </CStack>
</template>

<script setup lang="ts">
import ButtonComponent from "../utilities/ButtonComponent.vue";

import {
    CStack,
    CText,
    CButton,
    CLink
} from '@chakra-ui/vue';

</script>

<style scoped>

</style>