<template>
  <div id="app">
      <div class="w3-container w3-blue w3-center">
        <img src="@/assets/header.jpg" class="w3-image">
      </div>
      <div class="w3-bar w3-blue">
        <router-link to="/" class="w3-bar-item w3-button">Home</router-link>
        <router-link to="fattorip" class="w3-bar-item w3-button">Fattori primi</router-link>
        <router-link to="getdata"  class="w3-bar-item w3-button">Get DATA</router-link>
        <router-link to="mactest"  class="w3-bar-item w3-button">Mac TEST</router-link>
      </div>
    <router-view/>
  </div>
</template>

<script> export default { name: 'App' } </script>
