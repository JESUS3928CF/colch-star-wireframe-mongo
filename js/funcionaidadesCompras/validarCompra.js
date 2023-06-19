(() => {
    const formulario = document.querySelector('#formularioagregarCompra');


    const submit = document.querySelector('#compraG');
    const submitS=document.querySelector('#AgregarProductoS')

    const cancelar = document.querySelector('#guardarCancelado');
    const atras = document.querySelector('#xAgregar');

    window.addEventListener('load', () => {
        if(submitS){
            submitS.addEventListener('click', crearProducto)
            console.log('Producto')

        if (submit){
            submit.addEventListener('click',crearCompra)
            console.log('Guaradar')
        }
        cancelar.addEventListener('click', recetearFormulario);
        atras.addEventListener('click', recetearFormulario);
    }
    });

    function recetearFormulario(e){
        e.preventDefault();
        formulario.reset();
    }

    function crearCompra(e) {
        e.preventDefault();

        /// Validar el formulario
        Compra();       
    }

  function  crearProducto(e){
        e.preventDefault();
        Producto();
    }

function variables(){
    const nombreP = document.querySelector('#nombreGuardar');
    const nombreA = document.querySelector('#nombreCompraAgregar');
    const precio = document.querySelector('#precioCompraAgregar');
    const cantidad =document.querySelector('#cantidaCompraAgregar');

    //- Expresiones Regulares
    const number = /^\D*$/;
    const text = /^[^a-zA-Z]*$/;
    var signo = /[|°!"#$%&/()=?¿]/;
    /// Lógica de validación
    let isValidado = true;

    return{
        nombreProveedor:nombreP,
        nombreProducto: nombreA,
        precio:precio,
        cantidad:cantidad,
        Numeros: number,
        Texto:text,
        Signos:signo,
        Validar:isValidado
    }
} 




    function Compra() {

        const compras=variables()

        if(compras.nombreProducto.value=="" && compras.nombreProveedor.value=="" && compras.precio.value=="" && compras.cantidad.value==""){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios',
                 })
             compras.Validar=false

        //* Validaciones para el nombre proveedor
        }else if (compras.nombreProveedor.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del proveedor es obligatorio',
                 })
             compras.Validar=false

        } else if (!compras.Numeros.test(compras.nombreProveedor.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del proveedor no puede contener números',
                 })
            compras.Validar=false
        }else if (!compras.nombreProveedor.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del proveedor no puede ser un espacio',
                 })
            compras.Validar=false  
        }else if (compras.Signos.test(compras.nombreProveedor.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el nombre del proveedor',
                 })
            
            compras.Validar=false

           //*Validacion nombre producto 
        }else if (compras.nombreProducto.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del producto es obligatorio',
                 })
             compras.Validar=false

        } else if (!compras.Numeros.test(compras.nombreProducto.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del producto no puede contener números',
                 })
            compras.Validar=false
        }else if (!compras.nombreProducto.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del producto no puede ser un espacio',
                 })
            compras.Validar=false  
        }else if (compras.Signos.test(compras.nombreProducto.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el nombre del producto',
                 })
            compras.Validar=false

        } else if (compras.cantidad.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cantidad es obligatorio',
            })
            compras.Validar=false

        }else if (!compras.Texto.test(compras.cantidad.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cantidad no pueden contener letras'
            })
            isValidado=false

        }else if (!compras.cantidad.value.trimStart()){
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'La cantidad no puede ser un campo vacio'
            });
            isValidado=false

        }else if (compras.Signos.test(compras.cantidad.value)){
            Swal.fire({
                icon:'error',
                title:'Error',
                text: 'No se puede poner signos en la cantidad'
            })
            isValidado=false

        
            //validacion de precio
        } else if (compras.precio.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El precio  es obligatorio',
            })
            compras.Validar=false
        }else if (!compras.Texto.test(compras.precio.value)){
            Swal.fire({
                icon:'error',
                title:'Error',
                text: 'El precio no puede contener letras'
            })
            compras.Validar=false



        }else if (!compras.precio.value.trimStart()){
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'El precio no puede ser un campo vacio'
            });
            compras.Validar=false



        }else if (compras.Signos.test(compras.precio.value)){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'No se puede poner signos en el precio'
            })
            compras.Validar=false


        }

        if (compras.Validar) {
            //* Serrando el modal
            const modalBootstrap = bootstrap.Modal.getInstance(
                document.querySelector('#myModal')
            );
            modalBootstrap.hide();

            formulario.reset();

            Swal.fire(
                'Compra agregada correctamente',
                '',
                'success'
            )
        }
    }


 


    function Producto(){
        const productos=variables()

        if(productos.nombreProducto.value=="" && productos.precio.value=="" && productos.cantidad.value==""){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios',
                 })
             productos.Validar=false

           //*Validacion nombre producto 
        }else if (productos.nombreProducto.value == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del producto es obligatorio',
                 })
             productos.Validar=false

        } else if (!productos.Numeros.test(productos.nombreProducto.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del producto no puede contener números',
                 })
            productos.Validar=false

        }else if (!productos.nombreProducto.value.trimStart()){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El nombre del producto no puede ser un espacio',
                 })
            productos.Validar=false  
        }else if (productos.Signos.test(productos.nombreProducto.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se puede poner signos en el nombre del producto',
                 })
            productos.Validar=false

        } else if (productos.cantidad.value == '') {
            
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cantidad es obligatorio',
            })
            productos.Validar=false

        }else if (!productos.Texto.test(productos.cantidad.value)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'La cantidad no pueden contener letras'
            })
            productos.Validar=false

        }else if (!productos.cantidad.value.trimStart()){
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'La cantidad no puede ser un campo vacio'
            });
            productos.Validar=false

        }else if (productos.Signos.test(productos.cantidad.value)){
            Swal.fire({
                icon:'error',
                title:'Error',
                text: 'No se puede poner signos en la cantidad'
            })
            productos.Validar=false

        
            //validacion de precio
        } else if (productos.precio.value == '') {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El precio  es obligatorio',
            })
            productos.Validar=false
        }else if (!productos.Texto.test(productos.precio.value)){
            Swal.fire({
                icon:'error',
                title:'Error',
                text: 'El precio no puede contener letras'
            })

            productos.Validar=false

        }else if (!productos.precio.value.trimStart()){
            Swal.fire({
                icon:'error',
                title:'Error',
                text:'El precio no puede ser un campo vacio'
            });
            productos.Validar=false


        }else if (productos.Signos.test(productos.precio.value)){
            Swal.fire({
                icon:'error',
                title: 'Error',
                text: 'No se puede poner signos en el precio'
            })

            productos.Validar=false
        }

        if (productos.Validar) {
            //* Serrando el modal
            formulario.reset();
            Swal.fire(
                'Producto agregada correctamente',
                '',
                'success'
            )
        }
    }

})();