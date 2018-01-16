<template>
   <div>
      <Heads :has_index="false"></Heads>

      <Alltvs></Alltvs>

   </div>
     
</template>

<script>
import Heads from '../components/heads'



import Alltvs from '../components/alltvs'
//import { mapState } from 'vuex'

export default {

  components: {
     Alltvs,Heads
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
