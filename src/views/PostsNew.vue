<template>
    <div class="posts-new">
      <div>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <h1>New Post</h1>
        Title
        <input type="text" v-model="title" />
        <br />
        Body
        <input type="text" v-model="body" />
        <br />
        Image URL
        <input type="text" v-model="image" />
        <br />
        <button v-on:click="createPost()">Create</button>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      title: "",
      body: "",
      image: "",
      posts: []
    };
  },
  created: function() {
  },
  methods: {
     createPost: function() {
      var params = {
        title: this.title,
        body: this.body,
        image: this.image
      };
      axios
        .post("api/posts", params)
        .then(response => {
          console.log("You did it", response.data);
          this.posts.push(response.data);
          this.title = "";
          this.body = "";
          this.image = "";
        })
        .catch(error => {
          console.log(error.response.data.errors);
        });
    },
  }
};
</script>