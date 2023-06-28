import {imprimirPaginador,buscarRegistros} from '../class_and_functions_global/UlCompra.js';


(() => {
    document.addEventListener('DOMContentLoaded', () => {
        imprimirPaginador();
        buscarRegistros(1); 
        // peticionesBackend.findAll();
    });
})();