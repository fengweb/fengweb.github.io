<template>
  

    <yd-tab :callback="clickIndex" ref="ytabs">
        <yd-tab-panel label="最新电影" tabkey="0" ></yd-tab-panel>
        <yd-tab-panel label="最新连续剧" tabkey="1"></yd-tab-panel>
        <yd-tab-panel label="最新动漫" tabkey="2"></yd-tab-panel>
        
    </yd-tab>

    

  
</template>

<script>
import bus from "../assets/eventBus";
export default {
  
    data () {
    return {
        index:123,
        //tabindex:""
        istab:''
      }
    },
    watch:{

    },
    mounted(){
        // this.$nextTick(function(){
        //      this.ajaxarr()
        // })
    },
    methods:{
        clickIndex(label, tabkey){
            this.$store.state.tabindex=tabkey
            this.istab = tabkey
            
            //console.log(label, tabkey)
            bus.$emit("myFunidnex",this.istab)
            if(tabkey == 0)
            {
                

                

            }
            else if(tabkey == 1)
            {
                 //alert(123)
                //this.$store.state.islist=false
                //this.ajaxarr()
            }
          
          
        }
       //  ajaxarr(){
       //        let _this=this
       //          this.list=[]
       //          this.$http.get('/api/index?page=1').then(function(res){
       //              //_this.list=res.data.movies.slice(0, res.data.movies.length - 1)
       //              _this.list.push(...res.data.tvs)
       //              console.log(res.data.tvs.slice(0, res.data.tvs.length - 1))
       //              // _this.list.forEach(function(a,b){
       //              //       console.log(a[b])
       //              // })

       //          })

       // }
        
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yd-tab{ position: fixed; top:1rem; left:0; z-index: 100; width: 100% }
</style>
