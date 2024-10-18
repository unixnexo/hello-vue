import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    posts: [] // initialize an empty array for posts
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    addPost(state, post) {
      state.posts.push(post);
    },
    removePost(state, postId) {
      state.posts = state.posts.filter(post => post.id !== postId);
    },
    updatePost(state, updatedPost) {
      const index = state.posts.findIndex(post => post.id === updatedPost.id);
      if (index !== -1) {
        state.posts.splice(index, 1, updatedPost);
      }
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      commit('updatePosts', posts);
    },
    async addPost({ commit }, post) {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' }
      });
      const newPost = await response.json();
      commit('addPost', newPost);
    }
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage, // Explicitly use localStorage
      getState: (key) => {
        const state = localStorage.getItem(key);
        console.log(`State loaded from localStorage: ${state}`);
        return state ? JSON.parse(state) : undefined;
      },
      setState: (key, state) => {
        console.log(`State saved to localStorage: ${JSON.stringify(state)}`);
        localStorage.setItem(key, JSON.stringify(state));
      }
    })
  ] // Add the persistence plugin here
});
