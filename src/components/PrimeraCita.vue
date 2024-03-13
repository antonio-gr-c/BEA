<template>
<plantilla>
    <div class="fondo">
      <div class="texto-centrado" :key="textoActual" v-html="textoActual" @click="redirigirAFormulario">
      </div>
    </div>
  </plantilla>
  </template>
  
  <script>
  import Plantilla from './plantilla.vue';

export default {
  components: {
    Plantilla,
  },
    data() {
      return {
        listaDeTextos: [
          "HOLA",
          "GRACIAS POR COMUNICARTE A ACOMPAÑAMIENTO",
          "A CONTINUACIÓN VERÁS UN CUESTIONARIO",
          "TODA LA INFORMACIÓN ES 100% CONFIDENCIAL",
          "CUANDO ESTÉS LISTO, PRESIONA <span class='enlace'>AQUÍ</span>",
        ],
        textoActual: "",
        indiceDeTexto: 0,
      };
    },
    methods: {
      cambiarTexto() {
        if (this.indiceDeTexto < this.listaDeTextos.length) {
          this.textoActual = this.listaDeTextos[this.indiceDeTexto];
          this.indiceDeTexto++;
        }
  
        // tiempo
        setTimeout(this.cambiarTexto, 3000);
      },
      redirigirAFormulario() {
        // Busca si el clic se realizó en el elemento enlace
        if (event.target.classList.contains('enlace')) {
          this.$router.push('/FormsPrimeraCita');
        }
      },
    },
    mounted() {
      // cambio de texto
      this.cambiarTexto();
    },
  };
  </script>
  
  <style scoped>
  .fondo {
    background-color: #ff5900;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .texto-centrado {
    color: #fff;
    font-size: 24px;
    opacity: 0;
    animation: aparecer 1s forwards;
    font-style: italic;
    cursor: pointer; /* Añadido cursor de puntero para indicar que es un enlace */
  }
  
  .texto-centrado.animado {
    animation: aparecer 1s forwards;
  }
  
  @keyframes aparecer {
    to {
      opacity: 1;
    }
  }
  </style>
  