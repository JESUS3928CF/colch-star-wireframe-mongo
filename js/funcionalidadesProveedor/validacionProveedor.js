(() => {
    const formulario = document.querySelector('#formularioAgregarProveedor');

    const submit = document.querySelector(
        '#formularioAgregarProveedor input[type="submit"]'
    );

    const cancelar = document.querySelector('#guardarCancelado');
    const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearProveedor);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e){
        e.preventDefault();
        formulario.reset();
    }

    function crearProveedor(e) {
        e.preventDefault();

        /// Validar el formulario
        validarProveedor();
    }

    function validarProveedor() {
        //* Campos a validar

        const nombre = document.querySelector(
            '#formularioAgregarProveedor input[name="nombreGuardar"]'
        );

        const telefono = document.querySelector(
            '#formularioAgregarProveedor input[name="telefonoGuardar"]'
        );


        const direccion = document.querySelector(
            '#formularioAgregarProveedor input[name="direccionGuardar"]'
        );

        const contacto = document.querySelector(
            '#formularioAgregarProveedor input[name="contactoGuardar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        

        //* Contenedores del formularios
        const divNombre = document.querySelector(
            '#formularioAgregarProveedor div[name="divNombre"]'
        );

        const divTelefono = document.querySelector(
            '#formularioAgregarProveedor div[name="divTelefono"]'
        );


        const divDireccion = document.querySelector(
            '#formularioAgregarProveedor div[name="divDireccion"]'
        );

        const divContacto = document.querySelector(
            '#formularioAgregarProveedor div[name="divContacto"]'
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

        //* Validaciones para dirección
        // if (direccion.value == '') {
        //     imprimirAlerta(
        //         'La dirección es obligatoria',
        //         divDireccion,
        //         'Direccion'
        //     );
        //     isValidado = false;
        // }

        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#myModal')
            );
            modalBootstrap.hide();

            formulario.reset();

            mostrarToast('Proveedor agregado correctamente');
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
