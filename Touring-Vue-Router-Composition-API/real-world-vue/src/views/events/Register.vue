<script setup>
import { useRouter } from 'vue-router';
import { defineProps, inject } from 'vue';

defineProps(['event'])
const GStore = inject('GStore')
const router = useRouter()
const register = () => {
  GStore.flashMessage = 'You\'re successfully registered for ' + event.title
  
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  
  router.push({
    name: 'event-details'
  })
}

</script>

<template>
  <p>Registration form here</p>
  <button @click="register">Register me!</button>
</template>