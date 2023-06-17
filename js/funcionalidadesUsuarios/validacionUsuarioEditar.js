(() => {
    const formulario = document.querySelector('#formularioEditarUsuario');


    const submit = document.querySelector(
        '#formularioEditarUsuario input[type="submit"]'
    );

    const cancelar = document.querySelector('#editarCancelado');
    const atras = document.querySelector('#xEditar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', editarUsuarios);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

    function recetearFormulario(e){
        e.preventDefault();
        formulario.reset();
    }

    function editarUsuarios(e) {
        e.preventDefault();

        /// Validar el formulario
        validarUsuario();
    }

    function validarUsuario() {
        //* Campos a validar

        const nombre = document.querySelector(
            '#formularioEditarUsuario input[name="nombreEditar"]'
        );

        const apellido = document.querySelector(
            '#formularioEditarUsuario input[name="apellidoEditar"]'
        );

        const telefono = document.querySelector(
            '#formularioEditarUsuario input[name="telefonoEditar"]'
        );

        const email = document.querySelector(
            '#formularioEditarUsuario input[name="emailEditar"]'
        );

        const contraseña = document.querySelector(
            '#formularioEditarUsuario input[name="contraseñaEditar"]'
        );

        const confirmarContraseña = document.querySelector(
            '#formularioEditarUsuario input[name="contraseñaconfirmarEditar"]'
        );

        const seleccionarRol = document.querySelector(
            '#formularioEditarUsuario select[name="selectRolEditar"]'
        );
        const selectedOption = seleccionarRol.options[seleccionarRol.selectedIndex].value;
        console.log(selectedOption)

        //- Expresiones Regulares
        const number = /^\D*$/;
        const regex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s][A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;
        const text = /^[^a-zA-Z]*$/;
        const tel = /^\d+$/
        const email_val =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

       
        
        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre

        //* Validaciones para todos los campos
        if(nombre.value=='' && apellido.value=="" && telefono.value=="" && email.value=="" && contraseña.value=="" && confirmarContraseña.value=="" && selectedOption===""){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios',
                 })
                   isValidado = false 

        //* Validaciones para el  campo nombre
        }else if (nombre.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre es obligatorio',
                 })
                   isValidado = false 
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
       
        //* Validaciones para el apellido
        }else if (apellido.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El apellido es obligatorio',
                 })
            isValidado = false;
        }else if (!number.test(apellido.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El apellido no puede contener números',
                 })
            isValidado = false;     
        }else if (!apellido.value.trimStart()){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El nombre no puede ser un espacio',
                     })
                isValidado = false;             
            
        //* Validaciones para teléfono
        }else if (telefono.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El teléfono es obligatorio',
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
                    text: 'El nombre no puede ser un espacio',
                     })
                isValidado = false;        



        //* Validaciones para el email
        } else if (email.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El email es obligatorio',
                 })
            isValidado = false;
        }else if (!email_val.test(email.value) && email.value != '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El formato de gmail es incorrecto',
                 })
            isValidado = false;
        }else if (!email.value.trimStart()){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El nombre no puede ser un espacio',
                     })
                isValidado = false;        

          //* Validaciones para la contraseña
        }else if (contraseña.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La contraseña es obligatoria',
                 })
            isValidado = false;

        //* Validaciones para la confirmacion de contraseña
        } else  if (confirmarContraseña.value == '') {
             Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Confirma la contraseña',
              })
            isValidado = false;

        } else if(contraseña.value!=confirmarContraseña.value){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas no coinciden',
              })
            isValidado = false; 

            //*Validacion de rol
        }else  if (selectedOption === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Seleccione un rol',
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

            mostrarToast(  Swal.fire(
                'Usuario editado correctamente',
                '',
                'success'
              ));
        }
    }

    t
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
