<template>
    <div class="lists" >
        <h2><yd-icon name="play" size="0.38rem" color="#ff685d"></yd-icon>时下热门</h2>
    <yd-list theme="3" v-if="islist==0"> 
        <yd-list-item v-for="item, key in list"  :key="key" @click.native="showPlay(item.id)">
            <img slot="img" :src="item.cover">
            <span slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
               <!--  <div>
                    <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                    <span class="demo-list-del-price">¥{{item.w_price}}</span>
                </div>
                <div>content</div> -->
            </yd-list-other>
        </yd-list-item>
    </yd-list>
     <yd-list theme="3" v-if="islist==1"> 
        <yd-list-item v-for="item, key in tvlist"  :key="key" @click.native="showPlay(item.id)">
            <img slot="img" :src="item.cover">
            <span slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
               <!--  <div>
                    <span class="demo-list-price"><em>¥</em>{{item.price}}</span>
                    <span class="demo-list-del-price">¥{{item.w_price}}</span>
                </div>
                <div>content</div> -->
            </yd-list-other>
        </yd-list-item>
    </yd-list>
    
   </div>
   
</template>

<script>
import bus from '../assets/eventBus';
export default {
    //props:['messages'],//index组件传值到lists组件
    // props:{
    //       islist: {
    //       type: Boolean,
    //       default: true,
    //       }
    //     },
    data () {
    return {
        islist: 0,
         page: 1,
        ms:"我是子组件里面的数据！！",
        list: [],
         vlist:[]
        
      }
    },
      created:function(){
       this.getfnindex();
       this.ajaxarr()
     },
    //  mounted(){

    //   //this.$nextTick(function(){
    //          this.ajaxarr()
    //     //})
     
    // },

    // beforeRouteEnter(to,from,next){
    //     alert(to)
    //      next(vm=>{
              
    //           vm.ajaxarr()
    //            })
    // },

    methods:{
        iclick(){
           
           this.$emit('ievent',this.ms)
        },
        showPlay(pageid){
             this.$router.push({name:'play',params:{id:pageid}})
            // this.$router.push({
            //     path:'play',
            //     query:{id:pageid}
                
            //   })

        },
        ajaxarr(){
              let _this=this
                this.list=[]
                this.tvlist=[]
                let params = {};
                params.page = this.page || 1;
                this.$http.get('/api/index',{params: params}).then(function(res){
                    //_this.list=res.data.movies.slice(0, res.data.movies.length - 1)
                   
                    if (params.page > 1){
                        _this.list.push(...res.data.movies)
                        _this.tvlist.push(...res.data.tvs)
                    }else{
                        _this.list = res.data.movies.slice(0, res.data.movies.length - 1)
                        _this.tvlist = res.data.tvs.slice(0, res.data.tvs.length - 1)
                    }
                    
                    // console.log(res.data.movies.slice(0, res.data.movies.length - 1))
                    // console.log(res.data.tvs.slice(0, res.data.tvs.length - 1))
                    // _this.list.forEach(function(a,b){
                    //       console.log(a[b])
                    // })

                })

       },

       getfnindex(){
           bus.$on("myFunidnex",(message)=>{   //这里最好用箭头函数，不然this指向有问题
                 this.islist = message      
            })
       }
        
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lists{ margin-top:0.2rem; }
.lists h2{ background: #fff; font-size:0.26rem; color: #333; padding: 0.2rem 0 0 0.2rem;overflow: hidden;}
.lists h2 i{ display: inline-block; float: left; margin-right:0.1rem;  }
</style>
