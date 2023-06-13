(() => {
    const formulario = document.querySelector('#formularioLogin');


    const submit = document.querySelector(
        '#submitIngresar'
    );

    // const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearRol);
        // cancelar.addEventListener('click', recetearFormulario);
        // atras.addEventListener('click', recetearFormulario);
    });

    // function recetearFormulario(e){
    //     e.preventDefault();
    //     formulario.reset();
    // }

    function crearRol(e) {
        e.preventDefault();

        /// Validar el formulario
        validarRol();
    }

    function validarRol() {
        //* Campos a validar

        const usuario = document.querySelector(
            '#formularioLogin input[name="usuarioGuardar"]'
        );

        const contrasena = document.querySelector(
            '#formularioLogin input[name="contraseñaGuardar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        const email_val =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        //* Contenedores del formularios
        const divUsuario = document.querySelector(
            '#formularioLogin div[name="divUsuario"]'
        );

        const divContraseña = document.querySelector(
            '#formularioLogin div[name="divContraseña"]'
        );
        
        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre
        if (usuario.value == '') {
            imprimirAlerta('El usuario es obligatorio', divUsuario, 'Usuario');
            isValidado = false;
        }

        if (contrasena.value == '') {
            imprimirAlerta('La contraseña es obligatoria', divContraseña, 'Password');
            isValidado = false;
        }

        if (isValidado) {
            //* Serrando el modal
            // const modalBootstrap = bootstrap.Modal.getInstance(
            //     document.querySelector('#myModal')
            // );
            // modalBootstrap.hide();

            formulario.reset();

            location.href ="../../navbar.html";

            // mostrarToast('Rol agregado correctamente');
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

    // function mostrarToast(mensaje) {
    //     const toastDiv = document.querySelector('#toastAgregar'); //* Seleccionamos el toast que esta en nuestro HTML
    //     const toastBody = document.querySelector('#toast-body-agregar'); //* Y también el body para agregar contenido a nuestro toast
    //     /// Creamos la instancia
    //     const toast = new bootstrap.Toast(toastDiv);
    //     toastBody.textContent = mensaje;
    //     /// Mostrando el mensaje
    //     toast.show();
    // }
})();
