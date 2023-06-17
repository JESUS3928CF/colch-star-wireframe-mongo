(() => {
    const formulario = document.querySelector('#formularioEditarProveedor');

    const submit = document.querySelector(
        '#formularioEditarProveedor input[type="submit"]'
    );

    const cancelar = document.querySelector('#editarCancelado'); 

    const atras = document.querySelector('#xEditar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', editarProveedor);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e) {
        e.preventDefault();
        formulario.reset();
    }

    function editarProveedor(e) {
        e.preventDefault();

        /// Validar el formulario
        validarProveedor();
    }

    function validarProveedor() {
        //* Campos a validar

        const nombre = document.querySelector(
            '#formularioEditarProveedor input[name="nombreEditar"]'
        );

        const telefono = document.querySelector(
            '#formularioEditarProveedor input[name="telefonoEditar"]'
        );

        const direccion = document.querySelector(
            '#formularioEditarProveedor input[name="direccionEditar"]'
        );

        const contacto = document.querySelector(
            '#formularioEditarProveedor input[name="productoEditar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        const tel = /^[^a-zA-Z]*$/;
        const signo = /[|°!"#$%&/()=?¿]/


        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre
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

              
        } else if (telefono.value==""){
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
                document.querySelector('#modalEditar')
            );
            modalBootstrap.hide();

            formulario.reset();

            mostrarToast('Proveedor editado correctamente');
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
        const toastDiv = document.querySelector('#toastEditar'); //* Seleccionamos el toast que esta en nuestro HTML
        const toastBody = document.querySelector('#toast-body-editar'); //* Y también el body para agregar contenido a nuestro toast
        /// Creamos la instancia
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = mensaje;
        /// Mostrando el mensaje
        toast.show();
    }
})();
