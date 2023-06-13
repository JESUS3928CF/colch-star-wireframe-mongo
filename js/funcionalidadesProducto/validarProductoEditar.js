(() => {
    const formulario = document.querySelector('#formularioEditarProducto');

    const submit = document.querySelector(
        '#formularioEditarProducto input[type="submit"]'
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

        const producto = document.querySelector(
            '#formularioEditarProducto input[name="productoEditar"]'
        );

        const cantidad = document.querySelector(
            '#formularioEditarProducto input[name="cantidadEditar"]'
        );

        const precio = document.querySelector(
            '#formularioEditarProducto input[name="precioEditar"]'
        );

        const talla = document.querySelector(
            '#formularioEditarProducto input[name="tallaEditar"]'
        );

        const tela = document.querySelector(
            '#formularioEditarProducto input[name="telaEditar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        const email_val =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        //* Contenedores del formularios
        const divProducto = document.querySelector(
            '#formularioEditarProducto div[name="divProducto"]'
        );

        const divCantidad = document.querySelector(
            '#formularioEditarProducto div[name="divCantidad"]'
        );

        const divPrecio = document.querySelector(
            '#formularioEditarProducto div[name="divPrecio"]'
        );

        const divTalla = document.querySelector(
            '#formularioEditarProducto div[name="divTalla"]'
        );

        const divTela = document.querySelector(
            '#formularioEditarProducto div[name="divTela"]'
        );

        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el producto
        if (producto.value == '') {
            imprimirAlerta('Este campo es obligatorio', divProducto, 'Producto');
            isValidado = false;
        } else if (!number.test(producto.value)) {
            imprimirAlerta('Este Campo no puede contener números', divProducto,
                'Producto');
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
        //* Validaciones para el precio
        if (precio.value == '') {
            imprimirAlerta(
                'Este campo es obligatorio',
                divPrecio,
                'Precio'
            );
            isValidado = false;
        } else if (!text.test(precio.value)) {
            imprimirAlerta(
                'Este campo no puede contener letras',
                divPrecio,
                'Precio'
            );
            isValidado = false;
        }

        //* Validaciones para la talla
        if (talla.value == '') {
            imprimirAlerta('Este campo es obligatorio', divTalla, 'Talla');
            isValidado = false;
        } 
        //* Validaciones para la Tela
        if (tela.value == '') {
            imprimirAlerta('Este campo es obligatorio', divTela, 'Tela');
            isValidado = false;
        } else if (!number.test(tela.value)) {
            imprimirAlerta('Este Campo no puede contener números', divTela,
                'Tela');
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

            lugar.parentNode.insertBefore( divMensaje, lugar.nextSibling);

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
