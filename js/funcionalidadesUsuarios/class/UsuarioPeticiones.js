export default class UsuarioPeticiones {

    constructor(){
        this.urlUsuarios = 'http://localhost:3000/usuarios';
    }

     findAll(){
        fetch(this.urlUsuarios)
                            .then( resultado => resultado.json())
                            .then( registros => console.log(registros));
    }
}