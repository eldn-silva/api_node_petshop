const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor')
// Neste arquivo tem os dados das colunas e opções. Ele importa as configurações do banco de dados e o sequelize.

ModeloTabela
    .sync() // Para conseguirmos pegar e criar as informações dentro do banco de dados. Vai sincronizar nas configurações e vai retornar uma promessa. Como vai ser uma promessa, vamos usar o método then, que vai executar quando a promessa acabar. 
    .then(() => console.log('Tabela criada com sucesso!')) // o then é executado quando a promessa acabar. Passamos uma função de callback
    .catch(console.log) //caso tenha algum erro o método catch é executado.