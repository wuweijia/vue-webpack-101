<template>
<div class="test">
  <h1>{{message}}</h1>
  <Hello></Hello>
</div>
</template>

<script>
import Hello from "./components/Hello";
export default {
  name: "app",
  data() {
    return {
      message: "Vue With Webpack4"
    };
  },
  components: { Hello },
};
</script>

<style>
.test {
  text-align: center;
}
</style>
