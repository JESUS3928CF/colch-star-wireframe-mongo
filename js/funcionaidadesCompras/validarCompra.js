(() => {
    const formulario = document.querySelector('#formularioagregarCompra');


    const submit = document.querySelector(
        '#compraG'
    );

    const cancelar = document.querySelector('#guardarCancelado');
    const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearRol);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e){
        e.preventDefault();
        formulario.reset();
    }

    function crearRol(e) {
        e.preventDefault();

        /// Validar el formulario
        validarRol();
    }

    function validarRol() {
        //* Campos a validar

        const nombreP = document.querySelector(
            '#nombreGuardar'
        );

        const nombreA = document.querySelector(
            '#nombreCompraAgregar'
        );

        const precio = document.querySelector(
            '#precioCompraAgregar'
        );

        const cantidad =document.querySelector(
            '#cantidaCompraAgregar'
        );
        

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        var signo = /[|°!"#$%&/()=?¿]/;
        /// Lógica de validación

        let isValidado = true;

        if(nombreA.value=="" && nombreP.value =="" && precio.value=="" && cantidad.value==""){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios',
                 })
             isValidado = false;

        //* Validaciones para el nombre proveedor
        }else if (nombreP.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del proveedor es obligatorio',
                 })
             isValidado = false;

        } else if (!number.test(nombreP.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del proveedor no puede contener números',
                 })
            isValidado = false;
        }else if (!nombreP.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del proveedor no puede ser un espacio',
                 })
            isValidado = false;  
        }else if (signo.test(nombreP.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el nombre del proveedor',
                 })
            isValidado = false;

           //*Validacion nombre producto 
        }else if (nombreA.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del producto es obligatorio',
                 })
             isValidado = false;

        } else if (!number.test(nombreA.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del producto no puede contener números',
                 })
            isValidado = false;
        }else if (!nombreA.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del producto no puede ser un espacio',
                 })
            isValidado = false;  
        }else if (signo.test(nombreA.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el nombre del producto',
                 })
            isValidado = false;

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
        }




        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#myModal')
            );
            modalBootstrap.hide();

            formulario.reset();

            mostrarToast( Swal.fire(
                'Compra agregada correctamente',
                '',
                'success'
              ))
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
