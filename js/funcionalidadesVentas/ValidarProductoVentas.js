(() => {
    const formulario = document.querySelector('#formularioParaAgregarProducto');


    const submit = document.querySelector(
        '#formularioParaAgregarProducto input[type="submit"]'
    );

   

    const cancelar = document.querySelector('#cancelar');
    const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {
        submit.addEventListener('click', crearProducto);
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    });

   

    function recetearFormulario(e){
        e.preventDefault();
        formulario.reset();
    }

    function crearProducto(e) {
        e.preventDefault();

        /// Validar el formulario
        validarProducto();
    }


    function validarProducto() {
        //* Campos a validar

        const producto = document.querySelector(
            '#formularioParaAgregarProducto select[name="producto"]'
        );

        const Cantidad = document.querySelector(
            '#formularioParaAgregarProducto input[name="cantidad"]'
        );

        const precio=document.querySelector(
            '#formularioParaAgregarProducto input[name="precio"]'
        );

        const cliente = document.querySelector(
            '#formularioParaAgregarProducto select[name="cliente"]'
        );

        const fecha =document.querySelector(
            '#formularioParaAgregarProducto input[name="Fecha"]'
        );

        const descripcion = document.querySelector(
            '#formularioParaAgregarProducto textarea[name="descripcion"]'
        );

        //- Expresiones Regulares
        const number = /^\D*$/;
        const text = /^[^a-zA-Z]*$/;
         
        /// Lógica de validación

        let isValidado = true;

        //* Validaciones para el nombre
       

        //* Validaciones para teléfono
        if (Cantidad.value == '') {
            imprimirAlerta('La cantidad  es obligatoria',Cantidad);
            isValidado = false;
        } else if (!text.test(Cantidad.value)) {
            imprimirAlerta('La cantidad no puede contener letras',Cantidad,'Telefono');
            isValidado = false;
        }

        if (precio.value == '') {
            imprimirAlerta('El precio es obligatoria',precio);
            isValidado = false;
        } else if (!text.test(precio.value)) {
            imprimirAlerta('El precio no puede contener letras',precio,'Telefono');
            isValidado = false;
        }

       
        
        if (descripcion.value == '') {
            imprimirAlerta('la descripcion es obligatorio', descripcion);
            isValidado = false;
        }else if (!number.test(descripcion.value)) {
            imprimirAlerta('la descripcion no puede contener números', descripcion),
                'Nombre';
            isValidado = false;
        }



        if (isValidado) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#Producto')
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
