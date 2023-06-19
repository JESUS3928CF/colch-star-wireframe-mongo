export default class ClientePeticiones {
     constructor(){
        this.urlClientes = 'http://localhost:3000/clientes';
    }

     findAll(){
        fetch(this.urlClientes)
                            .then( resultado => resultado.json())
                            .then( registros => console.log(registros));
    }
}
