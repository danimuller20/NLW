//Servidor
const express = require("express")
const server = express()

const { pageLanging, pageStudy, pageGiveClasses, saveClasses } = require("./pages")

//Configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

//Início e configuração do servidor
server
    // Receber os dados do rec.body
    .use(express.urlencoded({ extended: true }))
    //Configurar arquivos estáticos (CSS, scripts, imagens)
    .use(express.static("public"))
    //Rotas da aplicação
    .get("/", pageLanging)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    //Start do servidor
    .listen(5500)
