<template>
  <div id="app">
    <NavHeader></NavHeader>
    <Home></Home>
    <FooterView></FooterView>
  </div>
</template>

<script>
import NavHeader from './components/Nav.vue';
import FooterView from './components/Footer.vue'
import Home from './components/Home.vue'

export default {
  name: 'app',
  components:{
    NavHeader,
    FooterView,
    Home
  }
}
</script>

<style>
  
</style>
