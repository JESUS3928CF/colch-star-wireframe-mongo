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


        const contacto = document.querySelector(
            '#formularioAgregarProveedor input[name="contactoGuardar"]'
        );

        const direccion = document.querySelector(
            '#formularioAgregarProveedor input[name="direccionGuardar"]'
        )

        //- Expresiones Regulares
        const number = /^\D*$/;
        const tel = /^[^a-zA-Z]*$/;
        var signo = /[|°!"#$%&/()=?¿]/;
        

        /// Lógica de validación

        let isValidado = true;

        if(nombre.value=='' && telefono.value=='' && contacto.value=='' && direccion.value==''){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Los campos son obligatorios', })
         isValidado = false;

            //* Validaciones para el nombre
        }else if (nombre.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre es obligatorio',
                 })
            isValidado = false;
        }else if (!number.test(nombre.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre no puede contener números',
                 })
            isValidado = false;  

        } else if (!nombre.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre no puede ser un espacio',
                 })
            isValidado = false;            
        //* Validaciones para teléfono
        } else if (signo.test(nombre.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el nombre',
                 })
            isValidado = false;

        }else if (telefono.value==""){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El teléfono es obigatorio',
                     })
                isValidado = false;

        } else if (!tel.test(telefono.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El teléfono no puede contener letras',
                 })
            isValidado = false;

        }else if (!telefono.value.trimStart()){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El telefono no puede ser un espacio',
                     })
                isValidado = false;
            } else if (signo.test(telefono.value)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se puede poner signos en el telefono',
                     })
                isValidado = false;    

        //* Validaciones para la direccion
        }else if (direccion.value==""){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La direccion es un campo obligatorio',
            })
            isValidado = false; 

        } else if (!direccion.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La Direccion no puede ser un espacio',
                 })
            isValidado = false;

        }else if (contacto.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El contacto es obligatorio',
                 })
                   isValidado = false 
        } else if (!number.test(contacto.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El contacto no puede contener números',
                 })
            isValidado = false;

        }else if (!contacto.value.trimStart()){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El contacto no puede ser un espacio',
                     })
                isValidado = false;
        }        

        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#myModal')
            );
            modalBootstrap.hide();

            formulario.reset();

            mostrarToast( Swal.fire(
                'Proveedor agregado correctamente',
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
