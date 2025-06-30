const estudantesService = require("../services/estudantesService")


exports.mostrarEstudantes = async (req, res) => {
    try{
        const estudantes = await estudantesService.mostrar()

                const estudantesFormatados = estudantes.map(estudantes  => {
            return {
                ...estudantes.toObject(),
                id: estudantes._id,
                _id: undefined
            }
        })

        res.status(200).json(estudantesFormatados)
    } catch (erro){
        res.status(500).json({erro: "Erro ao mostrar estudante", detalhes: erro.message})
    }
}  

exports.criarEstudante = async (req, res) => {
    try{
        const {nome, matricula, curso, ano} = req.body
        const novoEstudante = await estudantesService.criar(nome, matricula, curso, ano)
        res.status(201).json(novoEstudante)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.atualizarEstudante = async (req, res) => {
    try{
        const {nome, matricula, curso, ano} = req.body
        const id = req.params.id   
        const novoEstudante = await estudantesService.atualizar(id, nome, matricula, curso, ano)
        res.status(201).json(novoEstudante)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.deletarEstudante = async (req, res) => {
    try{
        const id = req.params.id
        await estudantesService.deletar(id)
        res.status(201).json("Estudante removido!")
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}

exports.buscarEstudante = async (req, res) => {
    try{
        const response = await estudantesService.buscar(req.query)
        res.status(200).json(response)
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
}