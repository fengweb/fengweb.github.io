<template>
   <div class="listitem">
   	<Heads :has_index="false"></Heads>
     <Listitem></Listitem>
   </div>
     
</template>

<script>

import Heads from '../components/heads'
import Listitem from '../components/listitem'
export default {
  components: {
      Listitem,Heads
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listitem{ margin-top:2rem;  }
</style>
