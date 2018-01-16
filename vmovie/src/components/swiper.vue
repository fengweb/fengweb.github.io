<template>
    <div>
 
    <yd-slider autoplay="3000">
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
            </a>
        </yd-slider-item>
        <yd-slider-item>
            <a href="http://www.ydcss.com">
                <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
            </a>
        </yd-slider-item>
    </yd-slider>
</div>
</template>

<script>

export default {

   
  data () {
    return {
        
    }
  },
  methods:{
     
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yd-slider{ margin-top:1.8rem;  }
.yd-slider-item img{height:3.2rem;}
</style>
