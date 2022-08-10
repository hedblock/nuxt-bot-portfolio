<template>
    <CStack
        direction="row"
        alignItems="center"
    >
        <CText 
            flex="1"
            fontWeight="bold"
        >
            Token
        </CText>
        <CText 
            flex="1"
            fontWeight="bold"
        >
            Allocation
        </CText>
    </CStack>
</template>

<script setup lang="ts">

import { CStack, CText } from '@chakra-ui/vue';

</script>