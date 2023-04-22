<script setup lang="ts">
import Header from './components/Header.vue';
import search from './components/search.vue';
import channels from './components/channels.vue';
import Footer from './components/Footer.vue';
import content1 from './components/content1.vue';
</script>

<template>

  <Header/>
  <div class="search-bar">
    <search/>
  </div>
    <channels/>
    <div class="content-bar">
      <content1/>
    </div>

  <div class="bottom-bar">
    <Footer/>
  </div>
 

</template>

<style lang= "scss" scoped>
  .search-bar {
    height: 2.8rem;
  }

  .bottom-bar {
    background: #fff;
   
    position: fixed;
    bottom: 0rem;
  }
  .content-bar {
    height: calc(100vh - 11rem);
    overflow-y: auto;
  }
</style>
