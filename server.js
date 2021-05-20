const express = require("express");
const path = require("path");

const port = 8000;

const app = express();

//------------------------------RENDERIZAÇÂO COM EJS-----------------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views")); //Onde vamos fazer a renderização

//---------------------------------------ROTAS----------------------------------------------
app.use(express.static(path.join(__dirname, "./static")));

//Index
let dadosMarcas = require('./dadosMarcas/marcas.json'); //Trazendo marcas.json para variavel dadosMarcas

app.get("/", (req, res) => {
  res.render("layout/template", { marcas : dadosMarcas, conteudo : "index" });
});


/*let titulos = {
    especificacoes : "Especificaçõessssssss"
}

app.get("/iphone11", (req, res) => {
    //res.render("descricaoModelo", { titulo: titulos });
    res.render("layout/descricaoModelo", { descricao: titulos,  conteudo: "descricaoModelo" });
  });
*/

//HomeIphone
let dadosAppleModelos = require('./dadosModelosApple/modelos.json' );
let dadosAppleDescricao = require('./dadosModelosApple/descricao.json');

app.get("/homeIphone", (req, res) => {  //modelo para HomeApple
    res.render("layout/homeMarcas/templateHome", { homeMarcas :  dadosAppleModelos, conteudo : "homeMarcas"});
  });

app.get("/iphone11", (req, res) => { //Descrição e informaçoes do modelo
    //res.sendFile(path.join(__dirname, "./static/pages/cellphone/iphone/iphone11.html"));
res.render("layout/homeMarcas/templateDescricao", { descricaoModelo : dadosAppleDescricao, conteudo : "descricaoModelo"});
});

//HomeSamsung
let dadosSamsungModelos = require('./dadosModeloSamsung/modelos.json');
let dadosSamsungDescricao = require('./dadosModeloSamsung/descricao.json');

app.get("/homeSamsung", (req, res) => {
    res.render("layout/homeMarcas/templateHome", { homeMarcas :  dadosSamsungModelos, conteudo : "homeMarcas"});
});

app.get("/SamsungS20FE", (req, res) => { //Descrição e informaçoes do modelo
res.render("layout/homeMarcas/templateDescricao", { descricaoModelo : dadosSamsungDescricao, conteudo : "descricaoModelo"});
});


//HomeMotorola
let dadosMotorolaModelo = require('./dadosModeloMotorola/modelos.json');
let dadosMotorolaDescricao = require('./dadosModeloMotorola/descricao.json');
app.get("/homeMotorola", (req, res) => {
    res.render("layout/homeMarcas/templateHome", { homeMarcas :  dadosMotorolaModelo, conteudo : "homeMarcas"});
});

app.get("/MotorolaMotoG100", (req, res) => { //Descrição e informaçoes do modelo
    res.render("layout/homeMarcas/templateDescricao", { descricaoModelo : dadosMotorolaDescricao, conteudo : "descricaoModelo"});
});

//HomeXiami
let dadosXiaomiModelo = require('./dadosModeloXiaomi/modelos.json');
let dadosXiaomiDescricao = require('./dadosModeloXiaomi/descricao.json');

app.get("/homeXiaomi", (req, res) => {
    res.render("layout/homeMarcas/templateHome", { homeMarcas :  dadosXiaomiModelo, conteudo : "homeMarcas"});
});

app.get("/xiaomiMI9T", (req, res) => { //Descrição e informaçoes do modelo
    res.render("layout/homeMarcas/templateDescricao", { descricaoModelo : dadosXiaomiDescricao, conteudo : "descricaoModelo"});
});

//HomeAsus
let dadosAsusModelo = require('./dadosModeloAsus/modelos.json');
let dadosAsusDescricao = require('./dadosModeloAsus/descricao.json');

app.get("/homeAsus", (req, res) => {
    res.render("layout/homeMarcas/templateHome", { homeMarcas :  dadosAsusModelo, conteudo : "homeMarcas"});
});

app.get("/AsusROGPhone3", (req, res) => { //Descrição e informaçoes do modelo
    res.render("layout/homeMarcas/templateDescricao", { descricaoModelo : dadosAsusDescricao, conteudo : "descricaoModelo"});
});



app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
