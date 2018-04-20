var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//GENERALES
var coolnessBar1;
var coolnessBar2;
var intervalo;
var frames = 0;

//ARCHIVOS
var audio = ["assets/spin.mp3"];
var oldies = ["assets/objects/oldie1.png", "assets/objects/oldie2.png", "assets/objects/oldie3.png"];
var memphis = ["assets/objects/memphis1.png", "assets/objects/memphis2.png", "assets/objects/memphis3.png"];
var coolnessImg = ["assets/coolness9.png", "assets/coolness8.png", "assets/coolness7.png", "assets/coolness6.png", "assets/coolness5.png", "assets/coolness4.png", "assets/coolness3.png", "assets/coolness2.png", "assets/coolness1.png", "assets/coolness0.png"]

//NUEVOS OBJETOS
//...pantallas
var board = new Board();

var next = new Next;

//...personajes
var coche1 = new Coche("assets/coche1.png");
var coche2 = new Coche("assets/coche2.png");

//...scores
var coolness1 = new Coolness1();
var coolness2 = new Coolness2();

//ARRAYS QUE SE VAN A LLENAR
var arrOldies = [];
var arrMemphis = [];


//BOOLEANS
var isBlue = false;
var personaje2 = false;
var isJumping = false;
var siguiente = false;

//BOTONES
var boton = document.getElementsByTagName("button");

//HACK FONDO INICIO
setTimeout(() => {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fffac4";
    ctx.fill();
    ctx.closePath();
}, 100)

musica = new Audio()
musica.src = audio[0]
musica.loop = true;
//musica.play();