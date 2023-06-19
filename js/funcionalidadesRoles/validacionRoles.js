(() => {
    const formulario = document.querySelector('#formularioagregarrol');


    const submit = document.querySelector(
        '#formularioagregarrol input[type="submit"]'
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

        const nombre = document.querySelector(
            '#formularioagregarrol input[name="nombreGuardar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        var signo = /[|°!"#$%&/()=?¿]/;
        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre
        if (nombre.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre es obligatorio',
                 })
             isValidado = false;

        } else if (!number.test(nombre.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre no puede contener números',
                 })
            isValidado = false;
        }else if (!nombre.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre no puede ser un espacio',
                 })
            isValidado = false;  
        }else if (signo.test(nombre.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el nombre',
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
                'Rol agregado  correctamente',
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
