<template>
  <div class="grid">
    <div class="city-link" v-for="(city, index) in cities" v-bind:key="index">
      <City v-bind:city="city" v-bind:edit="edit" />
    </div>
  </div>
</template>

<script>
import City from "../components/City";

export default {
  name: "AddCity",
  props: ["cities", "edit"],
  created() {},
  components: {
    City,
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  padding-top: 81px;
  background-color: #31363d;
  width: 100%;
  min-height: 100vh;
  grid-auto-rows: 250px;
  @media (min-width: 400px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
