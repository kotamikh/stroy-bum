<template>
  <NuxtLayout name="defaultlayout">
    <NuxtLoadingIndicator v-if="loading"/>
    <Teleport to="body" v-if="loading">
      <transition>
        <div class="overlay">
          Loading...
        </div>
      </transition>
    </Teleport>
    <NuxtPage v-if="!loading"/>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import '~/assets/styles/main.css'

const loading = ref<boolean>(true)
setTimeout(() => loading.value = false, 2000)
</script>
