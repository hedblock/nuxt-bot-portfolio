<template>
    <CStack
        :flex="1"
        direction="row"
        :spacing="8"
        width='100%'
    >
        <CSlider
            :flex="1"
            focusThumbOnChange="false"
            :value="allocation"
            @change="updateAllocation"
        >
            <CSliderTrack>
                <CSliderFilledTrack />
            </CSliderTrack>
            <CSliderThumb
                boxSize='20px'
            />
        </CSlider>
        <CBox
            w='100%'
            maxWidth='100px'
        >
            <CNumberInput 
                :value="allocation"
                @change="updateAllocation"
                :min="0"
                :max="100"
                :step="1"
            >
                <CNumberInputField />
                <CNumberInputStepper>
                    <CNumberIncrementStepper />
                    <CNumberDecrementStepper />
                </CNumberInputStepper>
            </CNumberInput>
        </CBox>
    </CStack>
    
</template>

<script setup lang="ts">

import { ref } from 'vue'

import {
    CStack,
    CSlider,
    CSliderTrack,
    CSliderFilledTrack,
    CSliderThumb,
    CNumberInput,
    CNumberInputField,
    CNumberInputStepper,
    CNumberIncrementStepper,
    CNumberDecrementStepper,
} from '@chakra-ui/vue'

defineProps<{
    allocation: number
    updateAllocation: (value: number) => void
}>()

</script>