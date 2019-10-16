<template>
  <div class="posts-index">
    Search by Title:
    <input type="text" v-model="titleFilter" />
    <h1>All posts</h1>
    <div v-for="post in filterBy(posts, titleFilter, 'title', 'body')">
      <h2>{{ post.id }}</h2>
      <h2>{{ post.title }}</h2>
      <h2>{{ post.body }}</h2>
      <router-link v-bind:to="`/posts/${post.id}`">
        <img v-bind:src="post.image" v-bind:alt="post.title" />
      </router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      posts: [],
      titleFilter: ""
    };
  },
  created: function() {
    axios.get("/api/posts").then(response => {
      this.posts = response.data;
    });
  },
  methods: {}
};
</script>
