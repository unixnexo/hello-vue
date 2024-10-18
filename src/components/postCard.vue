<template lang="">
    <div>
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <router-link :to="{name:'postId',params:{id:post.id}}">{{post.title}}</router-link>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{{post.body}}</li>
                
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        post:Object,
    }
}
</script>
<style lang="">
    
</style>