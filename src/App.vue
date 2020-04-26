<template>
  <search-cep />
</template>

<script>
import SearchCep from "@/view/SearchCep";
export default {
  name: "App",
  components: {
    SearchCep
  }
};
</script>

<style lang="scss">
@import "~bulma";
.is-text-white {
  color: white;
}
body {
  background-color: #333333;
}
.is-text-primary {
  color: #00d1b2;
}
.is-text-primary:hover {
  color: #00c4a7;
}
</style>
