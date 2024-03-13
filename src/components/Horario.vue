<template>
  <plantilla>
    

    <!-- Contenido de la Página -->
    <div class="contenido-pagina">
      <router-view></router-view>

     




      
    </div>
  </plantilla>
</template>

<script>
import Plantilla from './plantilla.vue';

export default {
  components: {
    Plantilla,
  },
  
 
 
    
  }

</script>


<style scoped>

/* Barra de Navegación */
.barra-navegacion {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  background-color: black;
  color: white;
}

.logo img {
  max-height: 40px;
}

.secciones-navegacion {
  display: flex;
}

.enlace-navegacion {
  margin-right: 30px;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.enlace-navegacion:hover {
  color: #d45c37;
}

.boton-inicio-sesion button {
  background-color: #d45c37;
  color: white;
  border: none;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.boton-inicio-sesion button:hover {
  background-color: #a03722;
}

/* Contenido de la Página */
.contenido-pagina {
  padding: 10px;
}


/* Pie de Página */
.pie-pagina {
  background-color: black;
  color: white;
  padding: 30px;
}

.contenido-pie {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.derecha-pie img {
  max-height: 80px;
}

.contacto-pie p {
  margin: 10px;
}

.botones-pie {
  display: flex;
  flex-direction: column;
}

.boton-pie {
  background-color: #000000;
  color: white;
  border: none;
  text-align: center;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
}

.botones-sociales-pie img {
  max-height: 35px;
  margin-right: 5px;
}

.botones-sociales-pie button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

</style>