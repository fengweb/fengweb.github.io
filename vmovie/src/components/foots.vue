<template>
   <div style="padding-bottom:1.5rem; ">
    
 
    <yd-tabbar fixed activeColor="#FF5E53" fontsize="0.2rem">
        <yd-tabbar-item title="首页" link="/" >
            <yd-icon name="home" slot="icon" size="0.4rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="电影" link="/movies" >
            <yd-icon name="video" slot="icon" size="0.4rem"></yd-icon>
        </yd-tabbar-item>
        <yd-tabbar-item title="电视" link="/tvs">
            <yd-icon name="play" slot="icon" size="0.4rem"></yd-icon>
        </yd-tabbar-item>
    </yd-tabbar>
   

</div>

</template>

<script>
export default {
	data(){
		return{
			

		}
	},
	props:{
	  
      },
	
	mounted(){
       
	},
	computed:{

		

	},

    methods:{
    	    
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yd-tabbar-icon{height:0.4rem !important;}
.router-link-active{color: #FF5E53 !important  }
</style>
