<template>
  <Header />
  <Home />
  <!-- <router-view/> -->
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Home from '@/views/Home.vue'

export default {
  components: {
    Header,
    Home
  }
}
</script>

 <style src="./assets/tailwind.css" />
