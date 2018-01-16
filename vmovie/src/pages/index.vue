<template>
   <div>
      <Heads ></Heads>
      <Navs></Navs>
      <Swiper></Swiper>
     <!--  <h3>{{ ms }}</h3> -->
 <!--             <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button> -->
    <!-- <div>{{ ms }}</div> -->
        <Lists></Lists>

   </div>
     
</template>

<script>
import Heads from '../components/heads'
import Navs from '../components/navs'
import Swiper from '../components/swiper'
import Lists from '../components/lists'
//import { mapState } from 'vuex'

export default {

  components: {
      Swiper,Lists,Heads,Navs
    },
    data(){
       return{
          msg:"我是父组件的数据",
          ms:"",
          islist:true
         
       }
    },
    methods:{
      fn(ms){
        this.ms = ms//接收到了子组件传来的数据
      },
     //  increment(){
     //    this.$store.commit('increment')
     //  },
     // decrement(){
     //    this.$store.commit('decrement')
     //  }
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
