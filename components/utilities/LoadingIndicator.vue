<template>
    <CStack
        direction="row"
        alignItems="center"
        justifyContent="center"
    >
        <CSpinner 
            size="xl"
            color='gray.200'
        />
    </CStack>
</template>

<script setup lang="ts">

import {
    CStack,
    CSpinner
} from '@chakra-ui/vue';

</script>