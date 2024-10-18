<template lang="">
    <div>
      <div class="container mt-5">
        <div class="row g-3">
          <div v-if="loading" class="spinner-border" role="status">
            <span class="sr-only"></span>
          </div>
          <div v-else class="col-md-4" v-for="user in users" :key="user.id">
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

export default {
  components: {
    userCard,
  },
  setup() {
    const users = ref([]);
    const loading=ref(true);
    function getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          users.value = response.data;
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

    getUsers();

    return { users,loading };
  },
};
</script>
<style lang="">
</style>