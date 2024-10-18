<template>
    <header>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hello</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Home</router-link>
        <router-link class="nav-link" to="/users">Users</router-link>
        <router-link class="nav-link" to="/posts">Posts</router-link>
        
      </div>
    </div>
  </div>
</nav>
</header>
</template>

<script>
export default {

}
</script>

<style scoped>
.router-link-active{
  color: rgba(0,0,0,0.9) !important;
  border-bottom: 2px solid rgba(0,0,0,0.9) !important;
}
</style>