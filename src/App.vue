<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Stone Count</router-link> |
      <router-link to="/clarity-map">Clarity Map </router-link> | -->

    </div>
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:0;
  background-color: #000;


}



#nav a {
  font-weight: bold;
  color: #ccc;
  opacity: 0.6;

}

#nav a.router-link-exact-active {
  color: #a3a3a3;
}
</style>
