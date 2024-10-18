<template>
  <div>
    <div>
      <div class="container mt-5">
        <div class="row g-3">
          <div v-if="loading" class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
          <div v-else class="col-md-4" v-for="post in posts" :key="post.id">
                <postCard :post="post"  />
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import postCard from "./postCard.vue";
import { useStore } from "vuex";


export default{
  components: {
    postCard,
  },
  setup() {
    const posts = ref([]);
    const loading=ref(true);
    const store = useStore();
    
    function getPosts() {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          // handle success
          
          posts.value = response.data;
          loading.value=false;
          store.commit("updatePosts", posts);
          console.log("in show posts",store.state.posts);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }

    getPosts();
    
    return { posts,loading};
  },
};
</script>

<style>

</style>