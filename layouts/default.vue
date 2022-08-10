<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <CReset />
          <CFlex
            minHeight='100vh'
            direction='column'
            position='relative'
            background='linear-gradient(180deg, #05192E 0%, #084F84 92.52%)'
            color="whiteAlpha.900"
          >
            <NavBar />
            <CFlex
              minH='100vh'
              backgroundImage='url(https://media.realvision.com/wp/20220512150452/hero_left_right_ornaments_.png)'
              background-position='top center'
              background-repeat='no-repeat'
              background-size='auto'
              alignItems='center'
              justifyContent='center'
            >
              <Nuxt />
            </CFlex>
          </CFlex>
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>

<script setup lang="ts">
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox,
  CFlex
} from '@chakra-ui/vue'
import NavBar from '~/components/navbar/NavBar.vue';
</script>
