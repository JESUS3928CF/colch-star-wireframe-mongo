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
         
        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre

        if(nombre.value=='' && telefono.value=="" && direccion.value==""){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Los campos son obligatorios',
                 })
                   isValidado = false 
        

        }else  if (nombre.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre no puede contener números',
              })
              isValidado = false
        
           
        } else if (!number.test(nombre.value)) {
            imprimirAlerta('El nombre no puede contener números', nombre),
                'Nombre';
            isValidado = false;
        }

        //* Validaciones para teléfono
        if (telefono.value == '') {
            imprimirAlerta('El teléfono es obligatorio',telefono,'Telefono');
            isValidado = false;
        } else if (!text.test(telefono.value)) {
            imprimirAlerta('El teléfono no puede contener letras',telefono,'Telefono');
            isValidado = false;
        }

        if(direccion.value==''){
            imprimirAlerta('La direccion es obligatoria',direccion);
        }



       
      
        

        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#myModal')
            );
            modalBootstrap.hide();

            formulario.reset();

            mostrarToast('Venta agregada correctamente');
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
