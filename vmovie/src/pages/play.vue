<template>
   <div>
      <Heads :has_index="false"></Heads>
      <div class="playcontent">
           <div>
              <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
                     @play="onPlayerPlay($event)"
                     @pause="onPlayerPause($event)">
               </video-player>
               <div class="playtitle">
                  <p>正在播放:【{{ playtitle }}】</p>
               </div>
           </div>
            
            
          
  
   </div>
   </div>
     
</template>

<script>
import Heads from '../components/heads'
import { videoPlayer } from 'vue-video-player';
export default {
  components: {
      Heads,videoPlayer
    },
  
  data(){
  	 return{
      
  	 	id:this.$route.params.id,
      playtitle:'',
      //videosrc:"http://www.renren66.com/play/getty.php?id=@H0nelJMjVJflfIRduAO41u8h9twaiNJ",
      playerOptions: {
//        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",
          src:'http://www.renren66.com/play/getty.php?id=@H0nelJMjVJflfIRduAO41u8h9twaiNJ' //你的m3u8地址（必填）
        }],
        poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-6.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '222', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
//        controlBar: {
//          timeDivider: true,
//          durationDisplay: true,
//          remainingTimeDisplay: false,
//          fullscreenToggle: true  //全屏按钮
//        }
      }

 
      
  	 }
  },
  watch: {
    '$route' (to, from) {
      // 获取最新的id 调用获取数据方法
      this.id=this.$route.params.id
    }


  },
 created(){
   
    this.ajaxplay()
 },
  mounted(){

      //this.$nextTick(function(){
             //this.ajaxplay()
       // })
     
    },
  methods: {
    ajaxplay(){
              let _this=this;
              let params = {};
                params.film_id = this.id;

                this.$http.get('/api/films/'+params.film_id).then(function(res){
                    //_this.list=res.data.movies.slice(0, res.data.movies.length - 1)
                    //_this.list.push(...res.data.movies)
                    console.log(res.data.src[0])
                   _this.playerOptions.sources[0].src=res.data.src[0]
                   _this.videosrc = res.data.src[0]

                    _this.playtitle =  res.data.title


                })

       },


    onPlayerPlay(player) {
      //alert("play");
    },
    onPlayerPause(player){
      //alert("pause");
    },
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  }

 
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.playcontent{padding-top:0.8rem; box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12) }
.playcontent .yd-list-theme5 .yd-list-item{ padding:0; }
.playtitle p{ background: #fff; padding: 0.2rem; font-size: 0.25rem; }

</style>
