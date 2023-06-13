(() => {
    const formulario = document.querySelector('#formulariopermisoEspecifico');


    const submit = document.querySelector(
        '#formulariopermisoEspecifico input[type="submit"]'
    );

    const cancelar = document.querySelector('#editarSalir');

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

        const seleccionarRol = document.querySelector(
            '#formulariopermisoEspecifico select[name="permisosEspecificos"]'
        );
        const selectedOption = seleccionarRol.options[seleccionarRol.selectedIndex].value;
        console.log(selectedOption)

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        const email_val =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        //* Contenedores del formularios
        const divpermisoEspecificos = document.querySelector(
            '#formulariopermisoEspecifico div[name="divpermisoEspecificos"]'
        );
        
        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre
        if (selectedOption === '') {
            imprimirAlerta(
                'Seleccione un rol',
                divpermisoEspecificos,
                'Especificos'
            );
            isValidado = false; 
        }

        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#modalPermisos')
            );
            modalBootstrap.hide();

            formulario.reset();

            mostrarToast('Rol agregado correctamente');
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
