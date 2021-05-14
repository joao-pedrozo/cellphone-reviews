const express = require("express");
const path = require("path");

const port = 3000;

const app = express();

//Objeto com as informações da index
/*let card = {
    nome : "Iphone",
    img : "./img/Apple.png"

}*/

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

//HomeIphone
app.get("/homeIphone", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/pages/cellphone/homeIphone.html"));
  });

app.get("/iphone11", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/pages/cellphone/iphone/iphone11.html"));
});
  
//HomeSamsung
app.get("/homeSamsung", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/pages/cellphone/homeSamsung.html"));
});

app.get("/SamsungS20FE", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/pages/cellphone/Samsung/SamsungS20FE.html"));
});

//HomeMotorola
app.get("/homeMotorola", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/pages/cellphone/homeMotorola.html"));
});

app.get("/motog100", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/pages/cellphone/motorola/motog100.html"));
});

//HomeXiami
app.get("/homeXiaomi", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/pages/cellphone/homeXiaomi.html"));
});

app.get("/xiaomiMI9T", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/pages/cellphone/xiaomi/xiaomiMI9T.html"));
});

//HomeAsus
app.get("/homeAsus", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/pages/cellphone/homeAsus.html"));
});

app.get("/AsusROGPhone3", (req, res) => {
    res.sendFile(path.join(__dirname, "./static/pages/cellphone/Asus/AsusROGPhone3.html"));
});



app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
