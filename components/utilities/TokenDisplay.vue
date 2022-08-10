<template>
    <CStack
        :flex="1"
        direction="row"
        alignItems="center"
        :spacing="8"
    >
        <CStack
            direction="row"
            alignItems="center"
            :spacing="8"
        >
            <CImage
                alt="Token logo"
                :src="token.logo"
                w="32px"
                h="32px"
                rounded="full"
            />
            <CStack 
                direction="row"
                alignItems="center"
                :spacing="4"
            >
                <CText> {{ token.name }}</CText>
                <TokenSymbol 
                    :symbol="token.symbol"
                    :slug="token.slug"
                />
            </CStack>
        </CStack>
        <p>
            ${{ round2(token.price).toLocaleString() }}
        </p>
    </CStack>
</template>

<script setup lang="ts">
import { Token } from '../../composables/types'

import TokenSymbol from './TokenSymbol.vue'

import { round2 } from '../../services/utils'

import { defineProps } from 'vue'

import {
    CStack,
    CText,
    CImage,
} from '@chakra-ui/vue';

defineProps<{
    token: Token
}>()

</script>

<style scoped>

</style>