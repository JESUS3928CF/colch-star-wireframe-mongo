(() => {
    const formulario = document.querySelector('#formularioAgregarCliente');

    const submit = document.querySelector(
        '#formularioAgregarCliente input[type="submit"]'
    );

    const cancelar = document.querySelector('#guardarCancelado');
    const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearClientes);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e){
        e.preventDefault();
        formulario.reset();
    }

    function crearClientes(e) {
        e.preventDefault();

        /// Validar el formulario
        validarCliente();
    }

    function validarCliente() {
        //* Campos a validar

        const nombre = document.querySelector(
            '#formularioAgregarCliente input[name="nombreGuardar"]'
        );

        const apellido = document.querySelector(
            '#formularioAgregarCliente input[name="apellidoGuardar"]'
        );

        const telefono = document.querySelector(
            '#formularioAgregarCliente input[name="telefonoGuardar"]'
        );

        const email = document.querySelector(
            '#formularioAgregarCliente input[name="emailGuardar"]'
        );

        const direccion = document.querySelector(
            '#formularioAgregarCliente input[name="direccionGuardar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        const email_val =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        //* Contenedores del formularios
        const divNombre = document.querySelector(
            '#formularioAgregarCliente div[name="divNombre"]'
        );

        const divApellido = document.querySelector(
            '#formularioAgregarCliente div[name="divApellido"]'
        );

        const divTelefono = document.querySelector(
            '#formularioAgregarCliente div[name="divTelefono"]'
        );

        const divEmail = document.querySelector(
            '#formularioAgregarCliente div[name="divEmail"]'
        );

        const divDireccion = document.querySelector(
            '#formularioAgregarCliente div[name="divDireccion"]'
        );

        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre
        if (nombre.value == '') {
            imprimirAlerta('El nombre es obligatorio', divNombre, 'Nombre');
            isValidado = false;
        } else if (!number.test(nombre.value)) {
            imprimirAlerta('El nombre no puede contener números', divNombre),
                'Apellido';
            isValidado = false;
        }

        //* Validaciones para teléfono
        if (telefono.value == '') {
            imprimirAlerta(
                'El teléfono es obligatorio',
                divTelefono,
                'Telefono'
            );
            isValidado = false;
        } else if (!text.test(telefono.value)) {
            imprimirAlerta(
                'El teléfono no puede contener letras',
                divTelefono,
                'Telefono'
            );
            isValidado = false;
        }
        //* Validaciones para el apellido
        if (!number.test(apellido.value)) {
            imprimirAlerta(
                'El apellido no puede contener números',
                divApellido,
                'Apellido'
            );
            isValidado = false;
        }

        //* Validaciones para el gmail
        if (!email_val.test(email.value) && email.value != '') {
            imprimirAlerta(
                'El formato de gmail es incorrecto',
                divEmail,
                'Email'
            );
            isValidado = false;
        }

        //* Validaciones para dirección
        if (direccion.value == '') {
            imprimirAlerta(
                'La dirección es obligatoria',
                divDireccion,
                'Direccion'
            );
            isValidado = false;
        }

        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#myModal')
            );
            modalBootstrap.hide();

            formulario.reset();

            mostrarToast('Cliente agregado correctamente');
        }
    }

    function imprimirAlerta(mensaje, lugar, clase) {
        /// Verificar que no exista la alerta
        const alert = document.querySelector(`.alerta${clase}`);

        if (!alert) {
            //? Crear alerta
            const divMensaje = document.createElement('div');

            divMensaje.classList.add(
                // 'px-2',
                'py-1',
                'rounded',
                'max-w-lg',
                'mx-auto',
                'mt-2',
                'text-center',
                'border',
                `alerta${clase}`
            );

            divMensaje.classList.add(
                'bg-red-100',
                'border-red-400',
                'text-red-700'
            );

            divMensaje.textContent = mensaje;

            lugar.parentNode.insertBefore(divMensaje, lugar.nextSibling);

            setTimeout(() => {
                divMensaje.remove();
            }, 4500);
        }
    }

    function mostrarToast(mensaje) {
        const toastDiv = document.querySelector('#toastAgregar'); //* Seleccionamos el toast que esta en nuestro HTML
        const toastBody = document.querySelector('#toast-body-agregar'); //* Y también el body para agregar contenido a nuestro toast
        /// Creamos la instancia
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        /// Mostrando el mensaje
        toast.show();
    }
})();
