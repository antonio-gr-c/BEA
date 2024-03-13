<template>
  <div id="app">
    
    <!-- Otros elementos de tu aplicación -->
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  // Lógica de tu componente App.vue
}
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  max-width: auto; /* Establecer el ancho máximo según tus necesidades */
  margin: 0 auto; /* Centrar el contenido */
  text-align: center;
}

</style>
