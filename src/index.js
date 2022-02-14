import router from './routes';

// escucha la aplicacion
window.addEventListener('load', router);

// escucha las rutas o hash al que me estoy moviendo
window.addEventListener('hashchange', router)

