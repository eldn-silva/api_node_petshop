const Sequelize = require('sequelize');
const instancia = require('../../banco-de-dados')

const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,//congela e não altera o nome da nossa tabela
    tableName: 'fornecedores',
    timestamps: true, // timestamps tem relação com as colunas criadas automaticamente, referente a data de criação, data de atualização
    createdAt: 'dataCriacao', // Para as colunas de data não ficarem em inglês
    updatedAt: 'dataAtualização', // Para as colunas de data não ficarem em inglês
    version: 'versao' // É criada a coluna de versão
}

// O primeiro item é o nome da nossa tabela no código. O segundo argumento é a variável de colunas. O terceiro argumento são as opções da tabela 
module.exports = instancia.define('fornecedor', colunas, opcoes)