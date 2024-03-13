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
        <h2 class="pregunta-animada">¡Gracias por completar el formulario!</h2>
        <button @click="enviarFormulario" class="boton-enviar">Enviar</button>
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
      "¿CUÁL ES EL MOTIVO PRINCIPAL POR EL QUE BUSCA AYUDA PSICOLÓGICA EN ESTE MOMENTO?",
      "¿HA TENIDO EXPERIENCIAS PREVIAS CON LA TERAPIA O TRATAMIENTO PSICOLÓGICO? EN CASO AFIRMATIVO, ¿CUÁL FUE SU EXPERIENCIA?",
      "¿CÓMO DESCRIBIRÍA SU ESTADO EMOCIONAL GENERAL EN LOS ÚLTIMOS MESES?",
      "¿HA EXPERIMENTADO CAMBIOS SIGNIFICATIVOS EN SU VIDA RECIENTEMENTE (POR EJEMPLO, PÉRDIDA DE EMPLEO, CAMBIO DE RELACIÓN, MUDANZA)?",
      "¿CUÁNTO TIEMPO LLEVA EXPERIMENTANDO LOS SÍNTOMAS O PROBLEMAS QUE LE LLEVARON A BUSCAR AYUDA?",
      "¿EXISTEN ANTECEDENTES FAMILIARES DE TRASTORNOS PSICOLÓGICOS O PROBLEMAS DE SALUD MENTAL?",
      "¿CÓMO MANEJA EL ESTRÉS EN SU VIDA DIARIA?",
      "¿TIENE ALGUNA CONDICIÓN MÉDICA O TOMA ALGÚN MEDICAMENTO QUE PUEDA INFLUIR EN SU BIENESTAR EMOCIONAL?",
      "¿CUÁL ES SU NIVEL DE APOYO SOCIAL ACTUAL? ¿TIENE PERSONAS EN LAS QUE CONFÍE Y PUEDA APOYARSE?",
      "¿CÓMO DESCRIBIRÍA SU CALIDAD DE SUEÑO Y SUS HÁBITOS DE ALIMENTACIÓN?",
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
font-size: 20px; 
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