<template>
    
    <div>
      <div class="container mt-5">
        <div class="row g-3">
          <div class="col-md-4" >
            <postCard :post="post" />
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import { useRoute } from "vue-router";
import postCard from "./postCard.vue";
import { useStore } from "vuex";


export default {
  components: {
    postCard,
  },
  setup(){
    const store= useStore();

    const posts=store.state.posts;
    console.log(posts);
    const route=useRoute();
    const id=route.params.id;
    const post =posts[id-1];
    console.log(post);
    
    return {
      post
    }

  }
  
};

</script>

<style>
</style>