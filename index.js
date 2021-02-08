const customExpress = require('./config/customExpress')
const conexao = require('./infrastructure/conexao')
const Tabelas = require('./infrastructure/tabelas')
conexao.connect(erro =>{
    if(erro) {
        console.log(erro)
    } else {
        console.log('Conectado com sucesso!!')
        Tabelas.init(conexao)
        const app = customExpress()
        app.listen(2000, () => console.log('servidor rodando na porta 2000'))
    }
    
})

