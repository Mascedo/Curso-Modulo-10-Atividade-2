const Estudante = require('../models/estudantesModel')


class estudanteRepository {
    async mostrar(){
        return await Estudante.find()
    }

    async criar(estudante){
        return  await Estudante.create(estudante)
    }

    async atualizar(id, estudante){
        return await Estudante.findByIdAndUpdate(id, estudante, {new:true})
    }

    async deletar(id){
        return await Estudante.findByIdAndDelete(id)
    }

    async buscar(filtros){
        const {nome, matricula, curso, ano} = filtros;
        let query = {}

        if (nome) query.nome = { $regex: nome, $options: 'i' }
        if (matricula) query.matricula = { $regex: matricula, $options: 'i' }
        if (curso) query.curso = { $regex: curso, $options: 'i' }
        if (ano) query.ano = { $regex: ano, $options: 'i' };
    
        return await Estudante.find(query)
      }
    }

module.exports = new estudanteRepository();