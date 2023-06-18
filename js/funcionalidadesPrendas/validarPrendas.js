(() => {
    const formulario = document.querySelector('#formularioAgregarPrenda');

    const submit = document.querySelector('#buttonSubmit');

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

        const prenda = document.querySelector(
            '#formularioAgregarPrenda input[name="prendaGuardar"]'
        );

        const proveedor = document.querySelector(
            '#formularioAgregarPrenda input[name="proveedorGuardar"]'
        );

        const cantidad = document.querySelector(
            '#formularioAgregarPrenda input[name="cantidadGuardar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        const signo= /[|°!"#$%&/()=?¿]/;
     
        /// Lógica de validación

        let isValidado = true;

        if (prenda.value=="" && proveedor.value=="" && cantidad.value==""){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios'

            })
            isValidado=false;

        //* Validaciones para la prenda
        }else  if (prenda.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text:'El campo prenda es obligatorio'
            })
            isValidado=false;

        } else if (!number.test(prenda.value)) {
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'El campo prendas no puede tener numeros'
            })
            
            isValidado = false;

        }else if(!prenda.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title:'Error',
                text: 'El campo prenda no puede ser un espacio'
            })
            isValidado=false
        }else if(signo.test(prenda.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text:'El campo prenda no puede ser signo'
            })
            isValidado=false
        //* Validaciones para la proveedor
        }else if (proveedor.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El campo proveedor es obligatorio'
            })
            isValidado = false;


        } else if (!number.test(proveedor.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El campo proveedor no puede tener numeros'
            })
            isValidado = false;

        }else if(!proveedor.value.trimStart()){

            Swal.fire({
                icon: 'error',
                title:'Error',
                text:'El campo proveedor no puede ser un espacio'

            })
            isValidado=false
        }else if (signo.test(proveedor.value)){
            Swal.fire({
                icon:'error',
                title:'Error',
                text: 'El campo proveedor no puede tener signos'
            })

            isValidado=false
        //* Validaciones para la cantidad
        }else if (cantidad.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El campo cantidad es obligatorio',
            })
            
            isValidado = false;
        } else if (!text.test(cantidad.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cantidad no puede tener letra'
            })
            
            isValidado = false;
        }else if (!cantidad.value.trimStart()){
            Swal.fire({
                icon:'error',
                title:'Error',
                text: 'El campo cantidad no puede ser un espacio'
            })
            isValidado=false

        }else if (signo.test(cantidad.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El campo cantidad no puede tener signos'
            })

            isValidado=false
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