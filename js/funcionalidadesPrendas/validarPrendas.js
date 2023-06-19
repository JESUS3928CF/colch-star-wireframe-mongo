(() => {
    const formulario = document.querySelector('#formularioAgregarPrenda');

    const submit = document.querySelector('#buttonSubmit');

    const cancelar = document.querySelector('#guardarCancelado');
    const atras = document.querySelector('#guardarPrenda');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearPrenda);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e) {
        e.preventDefault();
        formulario.reset();
    }

    function crearPrenda(e) {
        e.preventDefault();

        /// Validar el formulario
        validarPrenda();
    }

    function validarPrenda() {
        //* Campos a validar

        const prenda = document.querySelector(
            '#formularioAgregarPrenda input[name="prendaGuardar"]'
        );

        const cantidad = document.querySelector(
            '#formularioAgregarPrenda input[name="cantidadGuardar"]'
        );

        const proveedor = document.querySelector(
            '#formularioAgregarPrenda input[name="proveedorGuardar"]'
        );


        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        const email_val =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        //* Contenedores del formularios
        const divPrenda = document.querySelector(
            '#formularioAgregarPrenda div[name="divPrenda"]'
        );

        const divProveedor = document.querySelector(
            '#formularioAgregarPrenda div[name="divProveedor"]'
        );

        const divCantidad = document.querySelector(
            '#formularioAgregarPrenda div[name="divCantidad"]'
        );


        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para la prenda
        if (prenda.value == '') {
            imprimirAlerta('Este campo es obligatorio', divPrenda, 'Prenda');
            isValidado = false;
        } else if (!number.test(prenda.value)) {
            imprimirAlerta('Este Campo no puede contener números', divPrenda,
                'Prenda');
            isValidado = false;
        }

        //* Validaciones para la proveedor
        if (proveedor.value == '') {
            imprimirAlerta(
                'Este campo es obligatorio',
                divProveedor,
                'Proveedor'
            );
            isValidado = false;
        } else if (!number.test(proveedor.value)) {
            imprimirAlerta(
                'Este campo no puede contener letras',
                divProveedor,
                'Proveedor'
            );
            isValidado = false;
        }
        //* Validaciones para la cantidad
        if (cantidad.value == '') {
            imprimirAlerta(
                'Este campo es obligatorio',
                divCantidad,
                'Cantidad'
            );
            isValidado = false;
        } else if (!text.test(cantidad.value)) {
            imprimirAlerta(
                'Este campo no puede contener letras',
                divCantidad,
                'Cantidad'
            );
            isValidado = false;
        }


        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#prenda')
            );
            modalBootstrap.hide();
            formulario.reset();

            mostrarToast('Prenda agregada correctamente');
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

