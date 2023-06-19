export default class PeticionesBackend {
    constructor() {
        this.urlClientes = 'http://localhost:3000/api/v1/clientes';
    }
    async findAll() {
        try {
            const respuesta = await fetch(this.urlClientes);
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
            const respuesta = await fetch(this.urlClientes);
            const resultado = await respuesta.json();

            let totalPaginas =  calcularPaginas(resultado.length)

            // console.log(resultado);

            return  totalPaginas;


        } catch (error) {
            console.log(error);
        }
    }
}
