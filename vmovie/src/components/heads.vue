<template>
   <div>
    
    <!-- <yd-navbar title="狐狸视频" bgcolor="#000" color="#fff"  fixed @click.native="backIndex">
        <router-link to="#" slot="left">
            <yd-icon name="video" size="25px" color="#fff"></yd-icon>
        </router-link>

        <router-link to="#" slot="right">
            <yd-icon name="ucenter-outline" size="25px" color="#fff"></yd-icon>
        </router-link> 
  
    </yd-navbar> -->

   <yd-navbar bgcolor="#000" color="#fff"  fixed>
        <router-link to="" slot="left">
        	 <yd-icon  name="ucenter-outline" v-if="has_index" size="22px" color="#fff"></yd-icon>
             <yd-navbar-back-icon v-if="!has_index"  @click.native="routerBack">返回</yd-navbar-back-icon>
             
             
        </router-link>
        <div slot="center">
        	
        	<router-link to="/" @click.native="backIndex" class="logo">狐狸视频{{ this.$store.state.tabindex}}</router-link>
        </div>
        

        <router-link to="/search" slot="right">
            <yd-icon name="search" size="22px" v-if="has_search" color="#fff"></yd-icon>
            
            

        </router-link>
    </yd-navbar>

</div>

</template>

<script>
export default {
	data(){
		return{
			

		}
	},
	props:{
	  has_index: {
      type: Boolean,
      default: true,
      },
      has_search: {
      type: Boolean,
      default: true,
      }
	},
	mounted(){
       // console.log(isIndex)
	},
	computed:{

		

	},

    methods:{

         routerBack(){

          this.$router.go(-1);
        },
    	    backIndex(){
             
    	     
             this.$router.push({
             	name:'index'
             	// query:{id:+new Date()}
             })
          

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{color: #fff; font-size: 0.4rem;}
</style>
