const Modelo = require('./ModeloTabelaFornecedor')
const NaoEncontrado = require('../../erros/NaoEncontrado')

module.exports = {
    listar () {
        return Modelo.findAll() // método findAll é método ingês do sequelize
    },
    inserir (fornecedor) {
        return Modelo.create(fornecedor);
    },
    async pegarPorId (id) {
       const encontrado =  await Modelo.findOne({ //finOne é um método Sequelize para enconrar somente 1 ítem
           where: {
               id: id
           }
       })

       if (!encontrado) {
           throw new NaoEncontrado()
       }

       return encontrado
    },

    atualizar(id, dadosParaAtualizar) {
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: { id: id }
            }
        )
    },

    remover(id) {
        return Modelo.destroy({
            where: { id: id }
        })
    }

}
// Este arquivo foi criado para não exportarmos dados diretamene do sequelize