<template>
  <div class="media-body">
      <h4 class="mt-0 mb-1">{{ message.name }}</h4>
      <h5 class="mt-0 mb-1">{{ message.message }}</h5>
  </div>
</template>
 
<script>
const API_URL = "http://localhost:3000/";

export default {
  name: "home",
  data: () => ({
      error: "",
      messages: []
  }),

  mounted() {
      fetch(API_URL)
          .then(response => response.json())
          .then(result => {
              this.messages = result;
          });
  },
  methods: {}
};
</script>
 
<style>
img {
  max-width: 300px;
  height: auto;
}
</style>
