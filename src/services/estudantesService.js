const estudantesRepository = require("../repositories/estudantesRepository")

class estudantesService{

    async mostrar(){
        return await estudantesRepository.mostrar()
    }

    async criar(nome, matricula, curso, ano){
        if(!(nome&&matricula&&curso&&ano)){
            throw new Error("Todos os campos são necessarios!")
        }

        const novoEstudante = ({nome, matricula, curso, ano})

        return await estudantesRepository.criar(novoEstudante)
    }

    async atualizar(id, nome, matricula, curso, ano){
        if(!(id&&nome&&matricula&&curso&&ano)){
            throw new Error("Todos os campos são necessarios!")
        }

        const dadosAtualizados = ({nome, matricula, curso, ano})

        return await estudantesRepository.atualizar(id, dadosAtualizados)
    }

    async deletar(id){
        if(!(id)){
            throw new Error("Sem id de remoção!")
        }

        return await estudantesRepository.deletar(id)
    }

    async buscar(query){
        if((query.nome||query.matricula||query.curso||query.ano) === undefined){
            throw new Error("Filtro invalido")
        }

        return await estudantesRepository.buscar(query)
    }
}

module.exports = new estudantesService()