(() => {
    const formulario = document.querySelector('#formularioEditarProducto');

    const submit = document.querySelector(
        '#formularioEditarProducto input[type="submit"]'
    );

    const cancelar = document.querySelector('#editarCancelado');

    const atras = document.querySelector('#Editar');

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

        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para todos los campos
        if (producto.value == '' && cantidad.value == "" && precio.value == "" && talla.value == "" && tela.value == "") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios',
            })
            isValidado = false

            //* Validaciones para producto
        } else if (producto.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El producto es obligatorio',
            })
            isValidado = false
        } else if (!number.test(producto.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El producto no puede contener números',
            })
            isValidado = false;

            //validacion de cantidad
        } else if (cantidad.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'la cantidad es obligatorio',
            })
            isValidado = false;

        } else if (!nombre.value.trimStart()) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'la cantidad no puede ser un espacio',
            })
            isValidado = false;
            //validacion de precio
        } else if (precio.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'el precio  es obligatorio',
            })
            isValidado = false;

            //validacion de talla

        } else if (talla.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'la talla es obligatorio',
            })
            isValidado = false
        }
        //validacion tela
        else if (tela.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'la tela es obligatorio',
            })
            isValidado = false
        }


        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#modalEditar')
            );
            modalBootstrap.hide();

            formulario.reset();

            mostrarToast(Swal.fire(
                'Usuario editado correctamente',
                '',
                'success'
            ));
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
