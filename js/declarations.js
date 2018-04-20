//CANVAS
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//BOTONES
var boton = document.getElementsByTagName("button");
var isBlue = false;

//OBJETOS QUE RECOLECTAR Y EVITAR
var oldies = ["assets/objects/oldie1.png", "assets/objects/oldie2.png", "assets/objects/oldie3.png"];
var memphis = ["assets/objects/memphis1.png", "assets/objects/memphis2.png", "assets/objects/memphis3.png"];
var arrOldies = [];
var arrMemphis = [];

//PANTALLA DE JUEGO
var board = new Board("assets/escenario.png");

//PERSONAJES
//coche1
var coche1 = new Coche("assets/coche1.png");
var coche2 = new Coche("assets/coche2.png")
var isJumping = false;
var personaje1 = true;
var personaje2 = false;

//SCORE
var coolness = new Coolness();
var coolnessBar1 = 1;
var coolnessBar2 = 5;

//GENERALES
var intervalo;
var frames = 0;


//HACK FONDO INICIO
setTimeout(() => {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fffac4";
    ctx.fill();
    ctx.closePath();
}, 100)

var next = new Next;
var siguiente = false;