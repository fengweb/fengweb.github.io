<template>
    <div class="lists" >
     <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">   
    <yd-list theme="3" slot="list"> 
        <yd-list-item v-for="item, key in movieslist"  :key="key" @click.native="showPlay(item.id)">
            <img slot="img" :src="item.cover">
            <span slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
               
            </yd-list-other>
        </yd-list-item>
    </yd-list>
     
        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

    </yd-infinitescroll>
   </div>
   
</template>

<script>

export default {
    
    data () {
    return {
        page: 1,
       //scrollWatch: true
        
        movieslist:[]
        
      }
    },
    beforecreate() {
        //  创建前状态

        console.log(1)
     },
      created:function(){
       console.log(2)
       this.ajaxarrt()

     },
     beforeMount(){
      console.log(3)
        //  挂载前状态
     },
    mounted(){
      console.log(4)
         //  挂载结束状态
     },
     

    //  mounted(){

    //   this.$nextTick(function(){
    //          this.ajaxarrt()
    //     })
     
    // },
    methods:{
        
        
       //  ajaxar(){
       //        let _this=this
               
       //          let params = {};
       //          params.page = this.page || 1;
       //          this.$http.get('/api/films',{params: params}).then(function(res){
       //             if (params.page > 1) {
       //                  if (!res.data.data.length) {
       //                      //_this.loading = 'nomore';
       //                       console.log(1)
       //                      _this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
       //                  } else {
       //                      _this.movieslist.push(...res.data.data);
       //                  }
       //              } else {
       //                  _this.movieslist = res.data.data;
       //                  if (!res.data.data.length) {
       //                     console.log(2)
       //                      _this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
       //                  }
       //              }
       //              //_this.list=res.data.movies.slice(0, res.data.movies.length - 1)
       //              //_this.movieslist=res.data.data
       //              //console.log(_this.movieslist)
                   
       //              //console.log(res.data.movies.slice(0, res.data.movies.length - 1))
                   
       //              // _this.list.forEach(function(a,b){
       //              //       console.log(a[b])
       //              // })

       //          })

       // },
       ajaxarrt() {
                let _this=this
                let params = {};
                params.page = this.page || 1;
                this.$http.get('/api/tvs', {params: {
                        page: this.page,
                        pagesize: this.pageSize
                    }
                }).then(function (response) {

                  
                    const _list = response.data.data;

                   
                    _this.movieslist = [... _this.movieslist, ..._list];

                    if (_this.page == 20) {

                      console.log("所有数据加载完毕")
                        /* 所有数据加载完毕 */
                        _this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                        return;

                    }
                   console.log("单次请求数据完毕")
                    /* 单次请求数据完毕 */
                    _this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
                   
                   
                });
            },
      loadList() {

            this.page++;
            //console.log(this.page)
            this.ajaxarrt();
        },
     
        

       showPlay(pageid){
             this.$router.push({name:'play',params:{id:pageid}})
            // this.$router.push({
            //     path:'play',
            //     query:{id:pageid}
                
            //   })

        }

      
        
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.lists{ margin-top:0.97rem; }

</style>
