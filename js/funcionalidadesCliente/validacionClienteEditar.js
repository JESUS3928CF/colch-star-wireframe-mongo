(() => {
    const formulario = document.querySelector('#formularioEditarCliente');

    const submit = document.querySelector(
        '#formularioEditarCliente input[type="submit"]'
    );

    const cancelar = document.querySelector('#editarCancelado'); 

    const atras = document.querySelector('#xEditar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearClientes);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e) {
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
            '#formularioEditarCliente input[name="nombreEditar"]'
        );

        const apellido = document.querySelector(
            '#formularioEditarCliente input[name="apellidoEditar"]'
        );

        const telefono = document.querySelector(
            '#formularioEditarCliente input[name="telefonoEditar"]'
        );

        const email = document.querySelector(
            '#formularioEditarCliente input[name="emailEditar"]'
        );

        const direccion = document.querySelector(
            '#formularioEditarCliente input[name="direccionEditar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        const email_val =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        //* Contenedores del formularios
        const divNombre = document.querySelector(
            '#formularioEditarCliente div[name="divNombre"]'
        );

        const divApellido = document.querySelector(
            '#formularioEditarCliente div[name="divApellido"]'
        );

        const divTelefono = document.querySelector(
            '#formularioEditarCliente div[name="divTelefono"]'
        );

        const divEmail = document.querySelector(
            '#formularioEditarCliente div[name="divEmail"]'
        );

        const divDireccion = document.querySelector(
            '#formularioEditarCliente div[name="divDireccion"]'
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
                document.querySelector('#modalEditar')
            );
            modalBootstrap.hide();

            formulario.reset();

            mostrarToast('Cliente editado correctamente');
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
        const toastDiv = document.querySelector('#toastEditar'); //* Seleccionamos el toast que esta en nuestro HTML
        const toastBody = document.querySelector('#toast-body-editar'); //* Y también el body para agregar contenido a nuestro toast
        /// Creamos la instancia
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        /// Mostrando el mensaje
        toast.show();
    }
})();
