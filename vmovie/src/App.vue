<template>
  <div id="app">
     <div> 
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>

    </keep-alive>

     <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
   
   <Foots></Foots>
  </div>
</template>

<script>


import Foots from './components/foots'
export default {
  components: {
     Foots
    },
    data(){
      return{
        msd:1234
      }
    },
   
    methods:{
     
    }
    
}
</script>

<style>
#app {
  
}

.yd-tabbar-icon{height:0.4rem !important;}
</style>
