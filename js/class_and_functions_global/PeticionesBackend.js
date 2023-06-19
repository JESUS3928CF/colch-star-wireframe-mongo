export default class PeticionesBackend {
    constructor(url) {
        this.url = url;
    }
    async findAll() {
        try {
            const respuesta = await fetch(this.url);
            const resultado = await respuesta.json();

            console.log(resultado);
            console.log(resultado.length);
        } catch (error) {
            console.log(error);
        }
    }

    async findTotalRegistros(registrosPorPagina) {


        const calcularPaginas = (total) => {
            return parseInt(Math.ceil(total / registrosPorPagina));
        };

        
        try {
            const respuesta = await fetch(this.url);
            const resultado = await respuesta.json();

            let totalPaginas =  calcularPaginas(resultado.length)

            // console.log(resultado);

            return  totalPaginas;


        } catch (error) {
            console.log(error);
        }
    }
}
