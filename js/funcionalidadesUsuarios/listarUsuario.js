import {imprimirPaginador,buscarRegistros} from '../class_and_functions_global/UI.js';


(() => {
    document.addEventListener('DOMContentLoaded', () => {
        imprimirPaginador();
        buscarRegistros(1); 
        // peticionesBackend.findAll();
    });
})();
