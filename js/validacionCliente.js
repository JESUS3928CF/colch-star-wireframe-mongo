const formulario = document.querySelector('#formularioAgregarCliente');

const submit = document.querySelector(
    '#formularioAgregarCliente input[type="submit"]'
);

submit.addEventListener('click', crearClientes);

function crearClientes(e) {
    e.preventDefault();

    /// Validar el formulario
    validarCliente();
}

function validarCliente() {
    //* Campos a validar
    const nombre = document.querySelector(
        '#formularioAgregarCliente input[name="nombreGuardar"]'
    ).value;

    const apellido = document.querySelector(
        '#formularioAgregarCliente input[name="apellidoGuardar"]'
    ).value;

    const telefono = document.querySelector(
        '#formularioAgregarCliente input[name="telefonoGuardar"]'
    ).value;

    const email = document.querySelector(
        '#formularioAgregarCliente input[name="emailGuardar"]'
    ).value;

    const direccion = document.querySelector(
        '#formularioAgregarCliente input[name="direccionGuardar"]'
    ).value;

    if (nombre == '' || apellido == '' || telefono == ''|| email == '' || direccion == '') {
        alert('Ingrese información en los campos vacíos');
    } else {
        alert('¡Cliente Agregado!');
        formulario.reset();
    }
}
