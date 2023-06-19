import PeticionesBackend from './PeticionesBackend.js';
import { mostrarUsuariosRegistros } from '../funcionalidadesUsuarios/listarUsuario.js';

const peticionesBackend = new PeticionesBackend();
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 10;
const buttonsForPage = 10; /// variable para cantidad de botones que me va a mostrar
let paginaActual = 1; // Página actual


async function paginadorClientes(registrosPorPagina) {

    const totalPaginas = await peticionesBackend.findTotalRegistros(
        registrosPorPagina
    );

    return totalPaginas;
}

function* crearPaginador(total) {
    for (let i = 1; i <= total; i++) {
        yield i;
    }
}

export async function imprimirPaginador() {
    while (paginacionDiv.firstChild) {
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }

    const totalPaginas = await paginadorClientes(registrosPorPagina);
    const iterador = crearPaginador(totalPaginas);

    let botonesMostrados = 0; // Contador de botones mostrados

    const inicio = Math.max(paginaActual - Math.floor(buttonsForPage / 2), 1);
    const fin = Math.min(inicio + buttonsForPage - 1, totalPaginas);

    while (true) {
        const { value, done } = iterador.next();

        // Si se llega al final ya no ejecutar nada
        if (done) return;

        if (value >= inicio && value <= fin) {
            // Generar un botón por cada elemento en el rango
            const button = document.createElement('a');
            button.href = '#';
            button.dataset.pagina = value;
            button.textContent = value;
            button.classList.add(
                'siguiente',
                'bg-gray-600',
                'px-4',
                'py-1',
                'mr-2',
                'font-bold',
                'mb-4',
                'rounded'
            );

            // Cargar los resultados de la página
            button.onclick = () => {
                paginaActual = value;
                imprimirPaginador();
                buscarRegistros(paginaActual);
            };

            paginacionDiv.appendChild(button);
            botonesMostrados++;
        }

        if (botonesMostrados >= buttonsForPage) {
            // Si se han mostrado suficientes botones, sale del bucle
            break;
        }
    }
}

export function buscarRegistros(paginaActual) {

    /// Url de usuarios con parámetros
    const url = `http://localhost:3000/api/v1/usuarios?limit=${registrosPorPagina}&offset=${
        (paginaActual - 1) * registrosPorPagina
    }`;

    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => {
            mostrarUsuariosRegistros(resultado);
        });
}