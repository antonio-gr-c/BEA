<template>

  <plantilla>
    <!-- Contenido de la Página -->
    <div class="contenido-pagina">
      <router-view></router-view>
      
      <!-- Sección de Autoayuda -->
      <section class="banner-autoayuda">
        <div class="fondo-autoayuda">
          <img src="https://media.vogue.mx/photos/5dbc6b50b9285b0009b39d16/16:9/w_1920,h_1080,c_limit/Meditation004-vogueint-24oct19-GettyImages-.jpg" alt="Banner Autoayuda">
        </div>
        <div class="titulo-autoayuda">
          <h1>AUTOAYUDA</h1>
          <p>Elige el caso con el que más te identifiques</p>
        </div>
      </section>

      <!-- Sección de Método de Trabajo -->
    <section class="seccion-metodo">
      <div
        v-for="(item, index) in itemsMetodo"
        :key="index"
        class="item-metodo"
        @click="abrirEnlace(item.link)"
        @mouseover="mostrarSintomas(item)"
        @mouseleave="ocultarSintomas"
      >
        <img :src="item.imagen" alt="Método de Trabajo">
        <div class="descripcion-metodo" v-if="!item.mostrarSintomas">{{ item.descripcion }}</div>
        <div class="sintomas-metodo" v-if="item.mostrarSintomas">
          <ul>
            <li v-for="(sintoma, i) in item.sintomas" :key="i">{{ sintoma }}</li>
          </ul>
        </div>
      </div>
    </section>
  
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
      itemsMetodo: [
        { 
          link: '/Ansiedad',
          imagen: 'https://clicandpost.com/wp-content/uploads/2021/02/young-woman-is-depressed-on-white-bed-scaled-1.jpg',
          descripcion: 'Ansiedad',
          sintomas: [
            'Tienes preocupación excesiva.',
            'Sientes inquietud o nerviosismo.',
            'Te dan palpitaciones, sudoración o temblores.',
            'Llegas a tener dificultad para respirar.',
            'Problemas para conciliar el sueño.'
          ],
          mostrarSintomas: false,
        },
        { 
          link: '/Estres',
          imagen: 'https://staticnew-prod.topdoctors.cl/files/Image/large/6352d12da0b186ad8dd0b6810704aa56.jpg',
          descripcion: 'Estrés',
          sintomas: [
            ' Sientes fatiga o agotamiento.',
            ' Te duele el cuerpo.',
            'Te cuesta concentrarte.',
            'Cambios en tus patrones de sueño.'
          ],
          mostrarSintomas: false,
        },
        { 
          link: '/Depresion',
          imagen: 'https://www.huelvainformacion.es/2023/07/15/vivir_en_huelva/joven-muestra-tristeza-junto-ventana_1811529230_188959071_667x375.jpg',
          descripcion: 'Depresión',
          sintomas: [
            'Te sientes triste de manera persistente.',
            'Pierdes de interés en actividades que te gustan.',
            'Cambios en tu apetito o peso.',
            'Sientes problemas para conciliar el sueño o duermes en exceso.'
          ],
          mostrarSintomas: false,
        },
        { 
          link: '/FatigaMental',
          imagen: 'https://aramanatural.es/wp-content/uploads/2021/01/fatiga-mental.jpg',
          descripcion: 'Fatiga Mental',
          sintomas: [
            'Te sientes agotado.',
            'Se te dificulta concentrarte.',
            'Sensación de falta de energía cognitiva.',
            'Sientes que no puedes para manejar el estrés mental.'
          ],
          mostrarSintomas: false,
        },
      ],
    };
  },
  mounted() {
    // Agregar un retraso de 3 segundos antes de hacer scroll down
    setTimeout(() => {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }, 3000);
  },
  methods: {
    abrirEnlace(url) {
      window.location.href = url;
    },
    mostrarSintomas(item) {
      this.itemsMetodo.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.mostrarSintomas = false;
        }
      });
      item.mostrarSintomas = true;
    },
    ocultarSintomas() {
      this.itemsMetodo.forEach((item) => {
        item.mostrarSintomas = false;
      });
    },
  },
};
</script>




<style scoped>
/* Contenido de la Página */
.contenido-pagina {
  padding: 10px;
}

/* Estilos para la sección de Autoayuda */
.banner-autoayuda {
  position: relative;
  margin-top: 0px;
}

.fondo-autoayuda {
  overflow: hidden;
  max-width: 1920px;
  margin: 0;
  border-radius: 0px;
}

.fondo-autoayuda img {
  max-width: 100%;
  height: auto;
  filter: brightness(50%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.fondo-autoayuda:hover img {
  filter: brightness(30%);
}

.titulo-autoayuda {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}

.titulo-autoayuda h1 {
  font-size: 50px;
  margin: 0;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
}

.titulo-autoayuda p {
  font-size: 18px;
  opacity: 0;
  animation: fadeIn 1s ease forwards 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Método de Trabajo */
.sintomas-metodo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  text-align: justify;
  width: 80%;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.seccion-metodo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

.item-metodo {
  position: relative;
  text-align: center;
  margin-bottom: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.item-metodo:hover {
  transform: scale(1.05);
}

.item-metodo img {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 400px;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(50%);
  transition: filter 0.3s;
  animation: fadeIn 7s ease forwards;
}

.item-metodo:hover img {
  filter: brightness(20%);
}

.descripcion-metodo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  text-align: center;
  width: 80%;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.item-metodo:hover .descripcion-metodo {
  opacity: 1;
}

@media only screen and (max-width: 600px) {
  .item-metodo {
    width: 100%; 
  }
  .item-metodo img {
    width: 300px; 
    height: 500px;
  }

  .sintomas-metodo{
    font-size: 10px;
  }
}

/* Pantallas medianas (tabletas) */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .item-metodo img {
    width: 350px;
    height: 400px;

  }
}

@media screen and (max-width: 768px) {
  .titulo-autoayuda h1 {
    font-size: 40px;
  }

  .titulo-autoayuda p {
    font-size: 16px;
  }

  .item-metodo {
    width: 100%;
  }
}
</style>
