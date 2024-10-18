<template lang="">
    <div>
      <div class="container mt-5">
        <div class="row g-3">
          <div v-if="loading" class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
          <div v-else class="col-md-4" >
            <userCard :user="user" />
          </div>
        </div>
      </div>
    </div>
    
</template>
<script>
import axios from "axios";
import { ref } from "vue";
import userCard from "./userCard.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    userCard,
  },
  setup() {
    const user = ref({});
    const loading=ref(true);
    const route=useRoute();

    function getUser() {
      axios
        .get("https://jsonplaceholder.typicode.com/users/"+route.params.id)
        .then(function (response) {
          // handle success
          user.value = response.data;
          loading.value=false
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }

    getUser();

    return { user,loading };
  },
};
</script>
<style lang="">
</style>