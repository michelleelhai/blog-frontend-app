<template>
    <div class="posts-edit">
      <div>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <h1>Edit Post</h1>
        Title
        <input type="text" v-model="post.title" />
        <br />
        Body
        <input type="text" v-model="post.body" />
        <br />
        Image URL
        <input type="text" v-model="post.image" />
        <br />
        <button v-on:click="Submit()">Edit</button>
        <button v-on:click="DestroyPost()">Destroy</button>
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
      post: {},
      posts: []
    };
  },
  created: function() {
    axios.get("/api/posts/" + this.$route.params.id).then(response => {this.post = response.data;
      console.log(this.post);

    });
  },
  methods: {
     Submit: function() {
      var params = {
        title: this.post.title,
        body: this.post.body,
        image: this.post.image
      };
      axios
        .patch("api/posts/" + this.post.id , params)
        .then(response => {
          this.$router.push("/posts/" + this.post.id);
        })
        .catch(error => {
          console.log(error.response.data.errors);
        });
    },
    DestroyPost: function(){
      axios.delete("/api/posts/" + this.post.id).then(response => {
        console.log("Success", response.data);
        this.$router.push("/posts")
      })
    }
  }
};
</script>