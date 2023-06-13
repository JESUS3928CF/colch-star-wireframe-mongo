(() => {
    const formulario = document.querySelector('#formularioagregarusuario');


    const submit = document.querySelector(
        '#formularioagregarusuario input[type="submit"]'
    );

    const cancelar = document.querySelector('#guardarCancelado');
    const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearUsuarios);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e){
        e.preventDefault();
        formulario.reset();
    }

    function crearUsuarios(e) {
        e.preventDefault();

        /// Validar el formulario
        validarUsuario();
    }

    function validarUsuario() {
        //* Campos a validar

        const nombre = document.querySelector(
            '#formularioagregarusuario input[name="nombreGuardar"]'
        );

        const apellido = document.querySelector(
            '#formularioagregarusuario input[name="apellidoGuardar"]'
        );

        const telefono = document.querySelector(
            '#formularioagregarusuario input[name="telefonoGuardar"]'
        );

        const email = document.querySelector(
            '#formularioagregarusuario input[name="emailGuardar"]'
        );

        const contraseña = document.querySelector(
            '#formularioagregarusuario input[name="contraseñaGuardar"]'
        );

        const confirmarContraseña = document.querySelector(
            '#formularioagregarusuario input[name="contraseñaconfirmarGuardar"]'
        );

        const seleccionarRol = document.querySelector(
            '#formularioagregarusuario select[name="selectRol"]'
        );
        const selectedOption = seleccionarRol.options[seleccionarRol.selectedIndex].value;
        console.log(selectedOption)

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        const email_val =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        //* Contenedores del formularios
        const divNombre = document.querySelector(
            '#formularioagregarusuario div[name="divNombre"]'
        );

        const divApellido = document.querySelector(
            '#formularioagregarusuario div[name="divApellido"]'
        );

        const divTelefono = document.querySelector(
            '#formularioagregarusuario div[name="divTelefono"]'
        );

        const divEmail = document.querySelector(
            '#formularioagregarusuario div[name="divEmail"]'
        );

        const divContraseña = document.querySelector(
            '#formularioagregarusuario div[name="divContraseña"]'
        );

        const divConfirmarContraseña = document.querySelector(
            '#formularioagregarusuario div[name="divConfirmarContraseña"]'
        );

        const divselectRol = document.querySelector(
            '#formularioagregarusuario div[name="divselectRol"]'
        );
        
        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre
        if (nombre.value == '') {
            imprimirAlerta('El nombre es obligatorio', divNombre, 'Nombre');
            isValidado = false;
        } else if (!number.test(nombre.value)) {
            imprimirAlerta('El nombre no puede contener números', divNombre),
                'Nombre';
            isValidado = false;
        }

        //* Validaciones para teléfono
        if (telefono.value == '') {
            imprimirAlerta(
                'El teléfono es obligatorio',
                divTelefono,
                'Telefono'
            );
            isValidado = false;
        } else if (!text.test(telefono.value)) {
            imprimirAlerta(
                'El teléfono no puede contener letras',
                divTelefono,
                'Telefono'
            );
            isValidado = false;
        }
        //* Validaciones para el apellido
        if (apellido.value == '') {
            imprimirAlerta(
                'El apellido es obligatorio',
                divApellido,
                'Apellido'
            );
            isValidado = false;
        }else if (!number.test(apellido.value)) {
            imprimirAlerta(
                'El apellido no puede contener números',
                divApellido,
                'Apellido'
            );
            isValidado = false;
        }

        //* Validaciones para el gmail
        if (email.value == '') {
            imprimirAlerta(
                'El email es obligatorio',
                divEmail,
                'Email'
            );
            isValidado = false;
        }else if (!email_val.test(email.value) && email.value != '') {
            imprimirAlerta(
                'El formato de gmail es incorrecto',
                divEmail,
                'Email'
            );
            isValidado = false;
        }

        //* Validaciones para la contraseña
        if (contraseña.value == '') {
            imprimirAlerta(
                'La contraseña es obligatoria',
                divContraseña,
                'Contraseña'
            );
            isValidado = false;
        }

        //* Validaciones para la confirmacion de contraseña
        if (confirmarContraseña.value == '') {
            imprimirAlerta(
                'La contraseña es obligatoria',
                divConfirmarContraseña,
                'Confirmar'
            );
            isValidado = false; 
        }

        else if(contraseña.value!=confirmarContraseña.value){
            imprimirAlerta(
                'Las contraseñas no coinciden',
                divConfirmarContraseña,
                'Confirmar'
            );
            isValidado = false; 
        }

        if (selectedOption === '') {
            imprimirAlerta(
                'Seleccione un rol',
                divselectRol,
                'Roles'
            );
            isValidado = false; 
        }

        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#myModal')
            );
            modalBootstrap.hide();

            formulario.reset();

            mostrarToast('Usuario agregado correctamente');
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
