<template>
   <div>
      <Heads :has_index="false"></Heads>

      <Allmovies></Allmovies>

   </div>
     
</template>

<script>
import Heads from '../components/heads'



import Allmovies from '../components/allmovies'
//import { mapState } from 'vuex'

export default {

  components: {
     Allmovies,Heads
    },
    data(){
       return{
          
         
       }
    },
    methods:{
     
     
    }
  // computed:{
  //   count(){
  //       return this.$store.state.count
  //   }
  // }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
