(() => {
    const formulario = document.querySelector('#formularioEditarProveedor');

    const submit = document.querySelector(
        '#formularioEditarProveedor input[type="submit"]'
    );

    const cancelar = document.querySelector('#editarCancelado'); 

    const atras = document.querySelector('#xEditar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', editarProveedor);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e) {
        e.preventDefault();
        formulario.reset();
    }

    function editarProveedor(e) {
        e.preventDefault();

        /// Validar el formulario
        validarProveedor();
    }

    function validarProveedor() {
        //* Campos a validar

        const nombre = document.querySelector(
            '#formularioEditarProveedor input[name="nombreEditar"]'
        );

        const telefono = document.querySelector(
            '#formularioEditarProveedor input[name="telefonoEditar"]'
        );

        const direccion = document.querySelector(
            '#formularioEditarProveedor input[name="direccionEditar"]'
        );

        const contacto = document.querySelector(
            '#formularioEditarProveedor input[name="productoEditar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;

        //* Contenedores del formularios
        const divNombre = document.querySelector(
            '#formularioEditarProveedor div[name="divNombre"]'
        );

        const divTelefono = document.querySelector(
            '#formularioEditarProveedor div[name="divTelefono"]'
        );

        const divDireccion = document.querySelector(
            '#formularioEditarProveedor div[name="divDireccion"]'
        );

        const divContacto = document.querySelector(
            '#formularioEditarProveedor div[name="divContacto"]'
        );

        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre
        if (nombre.value == '') {
            imprimirAlerta('El nombre es obligatorio', divNombre, 'Nombre');
            isValidado = false;
        }

        //* Validaciones para teléfono
        if (!text.test(telefono.value)) {
            imprimirAlerta(
                'El teléfono no puede contener letras',
                divTelefono,
                'Telefono'
            );
            isValidado = false;
        }

        //* Validaciones para el contacto
        if (!number.test(contacto.value) && contacto.value != '') {
            imprimirAlerta(
                'El contacto no puede contener números',
                divContacto,
                'Contacto'
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

            mostrarToast('Proveedor editado correctamente');
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
