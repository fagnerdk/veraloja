const Sequelize = require('sequelize')
const sequelize = new Sequelize( 'kaio','root', '',{
    host:"localhost",
    dialect:'mysql'
})
//cra uma tabela
var po =sequelize.define('produtos',{
  titulo:{
    type:Sequelize.STRING
  },
  conteudo:{
    type:Sequelize.TEXT
  }
})
//shamada de tabela
//po.sync({force:true})



///cria uma postagem
po.create({
  titulo:'sor teste',
  conteudo:20
})
//po.sync({force:true})