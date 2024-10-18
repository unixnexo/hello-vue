import { createRouter,createWebHashHistory } from "vue-router";

import Home from "./components/Home.vue";
import showUsers from "./components/showUsers.vue";
import userId from "./components/userId.vue";
import templateUser from "./components/templateUser.vue"
import postTemplate from "./components/postTemplate.vue";
import showPost from "./components/showPost.vue";
import ShowPosts from "./components/showPosts.vue";

const routes=[
   { path:"/" ,name:"home",component:Home},
   { path:"/users" ,name:"templateuser",component:templateUser,children:[
    { path:"" ,name:"showusers",component:showUsers},
    {path:':id',name:'userId',component:userId}
   ]},
   
   { path:"/posts" ,name:"postTemplate",component: postTemplate, children:[
    {path:"",name:'posts',component:ShowPosts},
    {path:":id",name:'postId',component:showPost}
   ]}
];
const router=createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;