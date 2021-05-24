const express = require("express");
const path = require("path");

const port = 3000;

const app = express();

//------------------------------RENDERIZAÇÂO COM EJS-----------------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views")); //Onde vamos fazer a renderização

//---------------------------------------ROTAS----------------------------------------------
app.use(express.static(path.join(__dirname, "./static")));

//Index
let dadosHome = require("./dadosHome/marcas.json"); //Trazendo marcas.json para variavel dadosMarcas

app.get("/", (req, res) => {
  res.render("layout/home/template", { marcas: dadosHome, conteudo: "index" });
});

//Login
let loginBody = {
  titulo: "Informe o login e senha",
  email: "E-mail",
  senha: "Senha",
  button: "Entrar",
};

app.get("/login", (req, res) => {
  res.render("layout/login/templateLogin", {
    login: loginBody,
    conteudo: "login",
  });
});

//Register
let registerBody = {
  titulo: "Cadastradar Aparelho",
  modelo: "Modelo do aparelho:",
  descricao: "Descrição do produto:",
  img: "Carregar Imagem",

  especificacoes: "Especificações",
  sistema: "Sistema Operacional:",
  disponibilidade: "Disponibilidade",
  dimensoes: "Dimensões",
  peso: "Peso",

  precos: "Preços",
  melhor: "Melhor preço:",
  faixa: "Faixa de preço:",

  notas: "Notas",
  custo: "Custo-benefício",
  hardware: "Hardware",
  tela: "Tela:",
  camera: "Câmera",
  desempenho: "Desempenho",
};
app.get("/registerProduct", (req, res) => {
  res.render("layout/registerProduct/templateRegister", {
    register: registerBody,
    conteudo: "register",
  });
});

//descricaoModelo
/*let descricaoModeloBody = {
    Especificacoes : "Especificações",
     
  }
  app.get("/descricaoModelo", (req, res) => {
    res.render("layout/homeMarcas/templateDescricao", { descricao: descricaoModeloBody,  conteudo: "descricaoModelo" });
  });*/

//HomeIphone
let dadosAppleModelos = require("./dadosMarcas/dadosModelosApple/modelos.json");
let dadosAppleDescricao = require("./dadosMarcas/dadosModelosApple/descricao.json");

app.get("/homeIphone", (req, res) => {
  //modelo para HomeApple
  res.render("layout/homeMarcas/templateHome", {
    homeMarcas: dadosAppleModelos,
    conteudo: "homeMarcas",
  });
});

app.get("/iphone11", (req, res) => {
  //Descrição e informaçoes do modelo
  res.render("layout/homeMarcas/templateDescricao", {
    descricaoModelo: dadosAppleDescricao,
    conteudo: "descricaoModelo",
  });
});

//HomeSamsung
let dadosSamsungModelos = require("./dadosMarcas/dadosModeloSamsung/modelos.json");
let dadosSamsungDescricao = require("./dadosMarcas/dadosModeloSamsung/descricao.json");

app.get("/homeSamsung", (req, res) => {
  res.render("layout/homeMarcas/templateHome", {
    homeMarcas: dadosSamsungModelos,
    conteudo: "homeMarcas",
  });
});

app.get("/SamsungS20FE", (req, res) => {
  //Descrição e informaçoes do modelo
  res.render("layout/homeMarcas/templateDescricao", {
    descricaoModelo: dadosSamsungDescricao,
    conteudo: "descricaoModelo",
  });
});

//HomeMotorola
let dadosMotorolaModelo = require("./dadosMarcas/dadosModeloMotorola/modelos.json");
let dadosMotorolaDescricao = require("./dadosMarcas/dadosModeloMotorola/descricao.json");
app.get("/homeMotorola", (req, res) => {
  res.render("layout/homeMarcas/templateHome", {
    homeMarcas: dadosMotorolaModelo,
    conteudo: "homeMarcas",
  });
});

app.get("/MotorolaMotoG100", (req, res) => {
  //Descrição e informaçoes do modelo
  res.render("layout/homeMarcas/templateDescricao", {
    descricaoModelo: dadosMotorolaDescricao,
    conteudo: "descricaoModelo",
  });
});

//HomeXiami
let dadosXiaomiModelo = require("./dadosMarcas/dadosModeloXiaomi/modelos.json");
let dadosXiaomiDescricao = require("./dadosMarcas/dadosModeloXiaomi/descricao.json");

app.get("/homeXiaomi", (req, res) => {
  res.render("layout/homeMarcas/templateHome", {
    homeMarcas: dadosXiaomiModelo,
    conteudo: "homeMarcas",
  });
});

app.get("/xiaomiMI9T", (req, res) => {
  //Descrição e informaçoes do modelo
  res.render("layout/homeMarcas/templateDescricao", {
    descricaoModelo: dadosXiaomiDescricao,
    conteudo: "descricaoModelo",
  });
});

//HomeAsus
let dadosAsusModelo = require("./dadosMarcas/dadosModeloAsus/modelos.json");
let dadosAsusDescricao = require("./dadosMarcas/dadosModeloAsus/descricao.json");

app.get("/homeAsus", (req, res) => {
  res.render("layout/homeMarcas/templateHome", {
    homeMarcas: dadosAsusModelo,
    conteudo: "homeMarcas",
  });
});

app.get("/AsusROGPhone3", (req, res) => {
  //Descrição e informaçoes do modelo
  res.render("layout/homeMarcas/templateDescricao", {
    descricaoModelo: dadosAsusDescricao,
    conteudo: "descricaoModelo",
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
