//! IMPORTANDO LA CLASE DE PETICIONES 
import UsuarioPeticiones from "./class/UsuarioPeticiones.js";

const usuarioPeticiones = new UsuarioPeticiones();

(() => {
    const formulario = document.querySelector('#formularioagregarusuario');


    const submit = document.querySelector(
        '#formularioagregarusuario input[type="submit"]'
    );

    const cancelar = document.querySelector('#guardarCancelado');
    const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {

        //! ACA TRAIGO LOS USUARIOS DESDE EL BACKEND
        // usuarioPeticiones.findAll();
        fetch('http://localhost:3000/usuarios')
            .then((resultado) => resultado.json())
            .then((registros) => console.log(registros))
            .catch(e => console.log(e + "error"));

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

        console.log(nombre.value);



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
        var signo = /[|°!"#$%&/()=?¿]/;


        const email_val =
            /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
       
        /// Lógica de validación
        let isValidado = true;

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
        }else if (signo.test(nombre.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el nombre',
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
                    text: 'El Apellido  no puede ser un espacio',
                     })
                isValidado = false;  
        }else if (signo.test(apellido.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el apellido',
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

        } else if (!text.test(telefono.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El teléfono no pueden ser letras',
                 })
            isValidado = false;
        }else if (!telefono.value.trimStart()){
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'El telefono no puede ser un espacio',
                     })
                isValidado = false;  
                
        }else if (signo.test(telefono.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el telefono',
                 })
            isValidado = false;
            
        //* Validaciones para el gmail
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
                    text: 'El email no puede ser un espacio',
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
                document.querySelector('#myModal')
            );
            modalBootstrap.hide();

            formulario.reset();

            

            mostrarToast(  Swal.fire(
                'Usuario agregado correctamente',
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

    
// }else if (!nombre.value.trimStart()){
//     Swal.fire({
//         icon: 'error',
//         title: 'Error',
//         text: 'El nombre no puede ser un espacio',
//          })
//     isValidado = false;    



})();
