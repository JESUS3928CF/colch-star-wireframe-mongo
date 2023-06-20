(() => {
    const formulario = document.querySelector('#formularioParaAgregarVenta');


    const submit = document.querySelector(
        '#formularioParaAgregarVenta input[type="submit"]'
    );

   

    const cancelar = document.querySelector('#cancelar');
    const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearVenta);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

  
    function recetearFormulario(e){
        e.preventDefault();
        formulario.reset();
    }

    function crearVenta(e) {
        e.preventDefault();
        console.log("lll");

        /// Validar el formulario
        validarVenta();
    }


    function validarVenta() {
        //* Campos a validar

        const nombre = document.querySelector(
            '#formularioParaAgregarVenta input[name="nombreGuardar"]'
        );

        const telefono = document.querySelector(
            '#formularioParaAgregarVenta input[name="telefonoGuardar"]'
        );

        const direccion = document.querySelector(
            '#formularioParaAgregarVenta input[name="direccionGuardar"]'
        );

       


        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        const signo = /[|°!"#$%&/()=?¿"]/
       
         
        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre

        if(nombre.value=='' && telefono.value=="" && direccion.value==""){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los  campos son obligatorios',
           })
          isValidado = false 
        

        }else  if (nombre.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre es obligatorio',
           })
              isValidado = false
        
           
        } else if (!number.test(nombre.value)) {
            Swal.fire({
                icon:'error',
                title:'Error',
                text: 'El nombre no puede tener numeros'
            })
           
            isValidado = false;
        }else if (!nombre.value.trimStart()){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El campo nombre no puede ser un espacio'
            })
            isValidado=false
        }else if (signo.test(nombre.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre no puede tener signos'
            })
            isValidado=false
        //* Validaciones para teléfono
        } else if (telefono.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El telefono es obligatorio'
            })
            isValidado = false;
        } else if (!text.test(telefono.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El telefono no puede tener letras'
            })
           
            isValidado = false;
        }else if (!telefono.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El telefono no puede ser espacio'
            })
            isValidado=false

        }else if (signo.test(telefono.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El telefono no puede tener signos'
            })
            isValidado=false
            //*Validacion de direcciones
        }else if(direccion.value==''){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La dirreccion es obligatoria'
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
                    'Venta agregada correctamente',
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
