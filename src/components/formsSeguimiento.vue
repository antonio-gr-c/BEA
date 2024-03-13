<template>
    <plantilla>
    <div class="fondo">
      <div class="formulario">
        <div v-if="preguntaActual < preguntas.length" class="pregunta-animada">
          <h2 class="pregunta-texto">{{ preguntas[preguntaActual] }}</h2>
          <textarea v-model="respuestas[preguntaActual]" rows="4" class="textbox-animado"></textarea>
          <button @click="siguientePregunta" class="boton-siguiente">Siguiente</button>
        </div>
        <div v-else>
          <h2 class="pregunta-animada">TU SIGUIENTE CITA ES EL DIA XX-XX-XXX</h2>
          <button @click="enviarFormulario" class="boton-enviar">ver en tu calendario</button>
        </div>
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
        preguntas: [
"ESCRIBE AQUI COMO HAS ESTADO DURANTE ESTE TIEMPO",
        ],
        respuestas: Array.from({ length: 10 }, () => ""),
        preguntaActual: 0,
      };
    },
    methods: {
      siguientePregunta() {
        this.preguntaActual++;
      },
      enviarFormulario() {
        console.log("Respuestas:", this.respuestas);
        this.$router.push('/Horario');
      },
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
  .formulario {
  color: #fff;
  font-size: 18px;
  text-align: center;
  }
  .pregunta-animada {
  opacity: 0;
  animation: aparecer 1s forwards;
  margin-bottom: 20px;
  }
  .pregunta-texto {
  font-size: 30px; 
  }
  .textbox-animado {
  opacity: 0;
  animation: aparecer 1s forwards;
  width: 100%;
  padding: 2px;
  font-size: 30px; 
  border: 2px solid #423a38;
  border-radius: 8px;
  resize: none;
  }
  .boton-siguiente,
  .boton-enviar {
  background-color: #423a38;
  color: #fff;
  padding: 15px 20px;
  border: none;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  }
  .boton-siguiente:hover,
  .boton-enviar:hover {
  background-color: #625750;
  }
  @keyframes aparecer {
  to {
    opacity: 1;
  }
  }
  </style>