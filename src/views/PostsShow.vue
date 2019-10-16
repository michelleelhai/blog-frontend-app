<template>
  <div class="posts-show">
      <h2>{{post.title}}</h2>
      <h2>{{post.body}}</h2>
       <img v-bind:src="post.image" v-bind:alt="post.title" />
       <router-link v-bind:to="`/posts/${post.id}/edit`">Edit
      </router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      post: {}
    };
  },
  created: function() {
    axios.get("/api/posts/" + this.$route.params.id).then(response => {this.post = response.data;
      console.log(this.post);

    });
  },
  methods: {}
};
</script>
