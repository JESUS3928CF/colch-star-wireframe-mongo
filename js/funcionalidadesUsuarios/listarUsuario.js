import {imprimirPaginador,buscarRegistros} from '../class_and_functions_global/UI.js';


(() => {
    document.addEventListener('DOMContentLoaded', () => {
        imprimirPaginador();
        buscarRegistros(1); 
        // peticionesBackend.findAll();
    });
})();



//!  Aca se crea la tabla con sus registros
export function mostrarUsuariosRegistros(resultado) {
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
        'Editar',
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
            '<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#modalEditar">Editar</button>',
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