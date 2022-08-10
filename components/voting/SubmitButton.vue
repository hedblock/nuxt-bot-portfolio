<template>
    <CStack
        w="100%"
        :spacing="1"
        alignItems="center"
    >
        <CButton
            variant="solid"
            variantColor="brand"
            color="white"
            @click="submit"
            :isDisabled="invalid || unauthorized"
        > 
            Submit 
        </CButton>
        <CText
            v-if="unauthorized"
            color="red.600"
            fontWeight="semibold"
            textAlign="center"
        >
            You are not authorized to submit this form
        </CText>
        <CText
            v-if="invalid"
            color="red.600"
            fontWeight="semibold"
            textAlign="center"
        >
            Your allocations must sum to 100%
        </CText>
    </CStack>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

import { CButton, CText, CStack } from '@chakra-ui/vue';

defineProps<{
    submit: Function;
    invalid: boolean;
}>();

const unauthorized = ref(false);

</script>

<style scoped>

</style>