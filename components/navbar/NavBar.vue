<template>
  <CStack
    direction="row"
    h="4rem"
    w='100%'
    position='fixed'
    alignItems='center'
    justifyContent='space-between'
    px='1rem'
    zIndex="10"
  >
    <CStack
      :spacing="8"
      direction="row"
    >
      <CText
        fontSize='2xl'
        fontWeight='bold'
      >
        RVPC Portfolio
      </CText>
      <CStack
        :spacing="4"
        direction="row"
        alignItems="center"
        shouldWrapChildren 
      >
        <NavLink
          v-for="route in routes"
          :key="route.name"
          :href="route.href"
          :name="route.name"
          :isActive="route.href === $route.path"
        />
      </CStack>
    </CStack>
  </CStack>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import {
  CStack,
  CText
} from '@chakra-ui/vue';

import NavLink from './NavLink.vue'
import routes from './routes';

const colorMode : Function | undefined = inject('$chakraColorMode')
const toggleColorMode : Function | undefined = inject('$toggleColorMode')

if(colorMode && colorMode() === 'light') {
  toggleColorMode && toggleColorMode()
}

</script>

<style scoped>

</style>