import {imprimirPaginador,buscarRegistros} from '../class_and_functions_global/UIVentas.js';


(() => {
    document.addEventListener('DOMContentLoaded', () => {
        console.log("que");
        imprimirPaginador();
        buscarRegistros(1); 
        // peticionesBackend.findAll();
    });
})();

