(()=>{

    const buttonEstado = document.querySelectorAll(".estado");

    window.addEventListener("load", () => {
        buttonEstado.forEach((button) => {
            button.addEventListener('click', cambiarEstado);
        });
    });

    function cambiarEstado(e) {

        const elemento = e.target;

        if (elemento.src.includes("on.svg")) {
            elemento.src = '/imagenes/iconos/light_switch off.svg';
        } else {
            elemento.src = '/imagenes/iconos/light_switch on.svg';
        }
    }
})();