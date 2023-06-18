(() => {
    const formulario = document.querySelector('#formularioEditarCliente');

    const submit = document.querySelector(
        '#formularioEditarCliente input[type="submit"]'
    );

    const cancelar = document.querySelector('#editarCancelado'); 

    const atras = document.querySelector('#xEditar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearClientes);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e) {
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

        const nombre = document.querySelector(
            '#formularioEditarCliente input[name="nombreEditar"]'
        );

        const apellido = document.querySelector(
            '#formularioEditarCliente input[name="apellidoEditar"]'
        );

        const telefono = document.querySelector(
            '#formularioEditarCliente input[name="telefonoEditar"]'
        );

        const email = document.querySelector(
            '#formularioEditarCliente input[name="emailEditar"]'
        );

        const direccion = document.querySelector(
            '#formularioEditarCliente input[name="direccionEditar"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
        const email_val =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            const signo= /[|°!"#$%&/()=?¿]/;


        //* Contenedores del formularios
        const divNombre = document.querySelector(
            '#formularioEditarCliente div[name="divNombre"]'
        );

        const divApellido = document.querySelector(
            '#formularioEditarCliente div[name="divApellido"]'
        );

        const divTelefono = document.querySelector(
            '#formularioEditarCliente div[name="divTelefono"]'
        );

        const divEmail = document.querySelector(
            '#formularioEditarCliente div[name="divEmail"]'
        );

        const divDireccion = document.querySelector(
            '#formularioEditarCliente div[name="divDireccion"]'
        );

        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre
       
        if(nombre.value=="" && apellido.value=="" && telefono.value=="" && email.value=="" && direccion.value==""){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios'

            })
            isValidado=false

        //* Validaciones para el nombre
        } else if (nombre.value == '') {
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El nombre es obligatorios'
            })

            isValidado=false

           
        } else if (!number.test(nombre.value)) {
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El nombre no puede tener numeros'
            })
            isValidado=false
        } else if (!nombre.value.trimStart()){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El nombre no puede ser un espacio'
            })
            isValidado=false
        }else if (signo.test(nombre.value)){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El nombre no puede tener signos'
            })
            isValidado=false

            //Validaciones para el apellido
        } else if (apellido.value == '') {
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El apellido es obligatorios'
            })

            isValidado=false

           
        } else if (!number.test(apellido.value)) {
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El apellido no puede tener numeros'
            })
            isValidado=false
        } else if (!apellido.value.trimStart()){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El apellido no puede ser un espacio'
            })
            isValidado=false
        }else if (signo.test(apellido.value)){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El apellido no puede tener signos'
            })
            isValidado=false
    

        //* Validaciones para teléfono
        }else if (telefono.value == '') {
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El telefono es obligatorios'
            })

            isValidado=false

           
        } else if (!text.test(telefono.value)) {
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El Telefono no puede tener letras'
            })
            isValidado=false
        } else if (!telefono.value.trimStart()){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El Telefono no puede ser un espacio'
            })
            isValidado=false
        }else if (signo.test(telefono.value)){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El Telefono no puede tener signos'
            })
            isValidado=false

        //* Validaciones para el gmail
        }else if (email.value == '') {
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El email es obligatorios'
            })
            isValidado=false
            
        }else if (!email_val.test(email.value)){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'Formato no valido'
            })

            isValidado=false
           
        }else if (!email.value.trimStart()){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'El email no puede ser un espacio'
            })
            isValidado=false
        //* Validaciones para dirección
         }else if (direccion.value == '') {
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'La direccion es obligatorios'
            })
            isValidado=false
           
        }else if (!direccion.value.trimStart()){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'La direccion no puede ser un espacio'
            })
            isValidado=false
        }

        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#modalEditar')
            );
            modalBootstrap.hide();

            formulario.reset();

            mostrarToast( Swal.fire(
                'Cliente editado correctamente',
                '',
                'success'
            ));
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
