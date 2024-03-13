import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa tu archivo de configuración del enrutador

const app = createApp(App);
app.use(router);
app.mount('#app'); // Utiliza la cadena de caracteres '#' en lugar de la sintaxis de etiquetas HTML
