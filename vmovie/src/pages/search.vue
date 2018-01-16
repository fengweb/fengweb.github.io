<template>
   <div>

      <Heads :has_index="false" :has_search="false"></Heads>
      <div style="margin-top:1rem; "> 
         <yd-search  fullpage v-model="value2"  :on-submit="submitHandler" ></yd-search>

      </div>
       <div class="lists" >
        
    <yd-list theme="3"> 
        <yd-list-item v-for="item, key in result"  :key="key" @click.native="showPlay(item.id)">
            <img slot="img" :src="item.cover">
            <span slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
               
            </yd-list-other>
        </yd-list-item>
    </yd-list>
     <div style="text-align: center;padding-top: 20px;" v-if="isshowerro">抱歉，没有找到要找的东西噢！</div>
   </div>
     
      

   </div>
     
</template>

<script>
import Heads from '../components/heads'

//import { mapState } from 'vuex'

    export default {

        components: {
           Heads
         },
        data() {
            return {
                value2: '',
                result: [],
                page: 1,
                isshowerro:false
            }
        },
        created() {
        //let _this = this;
        },
        beforeRouteEnter (to, from, next) {
          
        if (from.name !== 'play') {

            next(vm => {
                // vm.inputFocus();
                vm.value2 = '';
                vm.resetData();
            });
        } else {
            next();
          }
        },
        methods: {
           submitHandler() {
            if (this.value2.replace(/\s+/g, "").length == 0 ) {
                //Toast('请输入关键字');
                this.$dialog.toast({mes:"请输入关键字！"});
                return;
            }
            //this.$refs.input_dom.blur();
            this.resetData();
            this.getSearch();
        },
        resetData() {
            //this.loading = 'init';
            //this.value2 ="";
            this.movies = [];
            this.tvs = [];
            this.result = []
        },
        // cancelfn(){
        //   this.$router.go(-1);
        // },
        // inputFocus() {
        //     this.$nextTick(() => {
        //         this.$refs.input_dom.focus();
        //     })
        // },
        getSearch() {
            let params = {};
            params.page = this.page || 1;
            params.q = this.value2;
            let _this = this
            this.$http.get('/api/search', {params:params}).then(function(response) {
                let res = response.data;
                console.log(res.movies)
                
                if ( !res.movies.length ) {
                   _this.isshowerro = true;
                }else{
                    _this.isshowerro = false;
                }
                _this.result = res.movies
                //return res.movies
                //if (response.ok && response.status === 200) {
                    //_self.loading = 'loaded';
                    // if (params.page > 1) {
                    //     _self.movies.push(...res.movies);
                    //     _self.tvs.push(...res.tvs);
                    // } else {
                    //     _self.movies = res.movies;
                    //     _self.tvs = res.tvs;
                    // }
                // } else {
                //     _self.loading = 'error';
                // }

            });
        },
        showPlay(pageid){
             this.$router.push({name:'play',params:{id:pageid}})
            // this.$router.push({
            //     path:'play',
            //     query:{id:pageid}
                
            //   })

        },
            // getResult(val) {
            //     if (!val) return [];

            //     return [].filter(value => new RegExp(val, 'i').test(value));
            // },
            // itemClickHandler(item) {
            //     this.$dialog.toast({mes: `搜索：${item}`});
            // },
            // submitHandler(value) {
            //     this.$dialog.toast({mes: `搜索：${value}`});
            // }
        },
        watch: {
            value2(val) {
                //this.result = this.getSearch(val);
            }
        }
 
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
