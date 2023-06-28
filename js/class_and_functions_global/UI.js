import PeticionesBackend from './PeticionesBackend.js';

const peticionesBackend = new PeticionesBackend('http://localhost:3000/api/v1/usuarios');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 10;
const buttonsForPage = 10; /// variable para cantidad de botones que me va a mostrar
let paginaActual = 1; // Página actual


async function paginador(registrosPorPagina) {

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

    const totalPaginas = await paginador(registrosPorPagina);
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
            mostrarRegistros(resultado);
        });
}


//!  Aca se crea la tabla con sus registros
 function mostrarRegistros(resultado) {
    const tablaClientesDiv = document.querySelector('#tablaClientes');

    // Limpiar el contenido anterior
    tablaClientesDiv.innerHTML = '';

    // Crear la tabla
    const tabla = document.createElement('table');
    tabla.classList.add('table', 'caption-top');

    // Crear el encabezado de la tabla
    const thead = document.createElement('thead');
    const encabezado = document.createElement('tr');

    // Añadir los encabezados de las columnas
    const encabezadosColumnas = [
        'ID',
        'Nombre',
        'Apellido',
        'Teléfono',
        'Email',
        'Rol',
        'Estado',
    ];
    encabezadosColumnas.forEach((encabezadoColumna) => {
        const th = document.createElement('th');
        th.scope = 'col';
        th.textContent = encabezadoColumna;
        encabezado.appendChild(th);
    });

    thead.appendChild(encabezado);
    tabla.appendChild(thead);

    // Crear el cuerpo de la tabla
    const tbody = document.createElement('tbody');

    resultado.forEach((registro) => {
        const fila = document.createElement('tr');

        // Añadir las celdas con los datos de cada registro
        const datosRegistro = [
            registro.id_usuario,
            registro.nombre,
            registro.apellido,
            registro.telefono,
            registro.email,
            registro.fk_rol,
            registro.estado
                ? '<img class="centrarIcono estado" src="/imagenes/iconos/light_switch on.svg" />'
                : '<img class="centrarIcono estado" src="/imagenes/iconos/light_switch off.svg" />',
        ];

        datosRegistro.forEach((dato) => {
            const celda = document.createElement('td');
            celda.innerHTML = dato;
            fila.appendChild(celda);
        });

        tbody.appendChild(fila);
    });

    tabla.appendChild(tbody);
    tablaClientesDiv.appendChild(tabla);
}