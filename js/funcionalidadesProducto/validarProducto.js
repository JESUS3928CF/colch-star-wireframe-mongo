(() => {
    const formulario = document.querySelector('#formularioAgregarProducto');

    const submit = document.querySelector(
        '#formularioAgregarProducto input[type="submit"]'
    );

    const cancelar = document.querySelector('#guardarCancelado');
    const atras = document.querySelector('#xAgregar');

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
            '#formularioAgregarProducto input[name="productoGuardar"]'
        );

        const cantidad = document.querySelector(
            '#formularioAgregarProducto input[name="cantidadGuardar"]'
        );

        const precio = document.querySelector(
            '#formularioAgregarProducto input[name="precioGuardar"]'
        );

        const talla = document.querySelector(
            '#formularioAgregarProducto input[name="tallaGuardar"]'
        );

        const tela = document.querySelector(
            '#formularioAgregarProducto input[name="telaGuardar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        const signo = /[|°!"#$%&/()=?¿]/;

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

        }else if (!producto.value.trimStart()) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El producto no puede ser un espacio',
            })
            isValidado = false;
        }else if (signo.test(producto.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el Producto',
                 })
            isValidado = false;    

            //validacion de cantidad
        } else if (cantidad.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cantidad es obligatorio',
            })
            isValidado = false;

        }else if (!text.test(cantidad.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cantidad no pueden contener letras'
            })
            isValidado=false

        }else if (!cantidad.value.trimStart()){
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'La cantidad no puede ser un campo vacio'
            });
            isValidado=false

        }else if (signo.test(cantidad.value)){
            Swal.fire({
                icon:'error',
                title:'Error',
                text: 'No se puede poner signos en la cantidad'
            })
            isValidado=false

        
            //validacion de precio
        } else if (precio.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El precio  es obligatorio',
            })
            isValidado = false;
        }else if (!text.test(precio.value)){
            Swal.fire({
                icon:'error',
                title:'Error',
                text: 'El precio no puede contener letras'
            })
            isValidado=false
        }else if (!precio.value.trimStart()){
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'El precio no puede ser un campo vacio'
            });
            isValidado=false


        }else if (signo.test(precio.value)){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'No se puede poner signos en el precio'
            })

            isValidado=false

            //validacion de talla

        } else if (talla.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La talla es obligatorio',
            })
            isValidado = false

        }else if(!number.test(talla.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La talla no puede tener numero',
            })
            isValidado = false

        }else if (!talla.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La talla no puede ser un campo vacio',
            })
            isValidado = false

        }else if(signo.test(talla.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en la talla',
            })
            isValidado = false
        }

        //validacion tela
        else if (tela.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La tela es obligatorio',
            })
            isValidado = false
        }else if (!number.test(tela.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La tela no puede tener numeros',
            })
            isValidado = false
        }else if (!tela.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La tela no puede ser un campo vacio',
            })
            isValidado = false

        }else if(signo.test(tela.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en la tela',
            })
            isValidado = false
        }





        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#myModal')
            );
            modalBootstrap.hide();

            formulario.reset();



            mostrarToast(Swal.fire(
                'Producto agregado correctamente',
                '',
                'success'
            ));
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

