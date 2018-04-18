//CANVAS
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//BOTONES
var boton = document.getElementsByTagName("button");
var isBlue = false;


//OBJETOS QUE RECOLECTAR Y EVITAR
var oldies = [];
var memphis = [];

var board = new Board("assets/escenario.png");
var coche1 = new Coche("assets/coche1.png");
var coolness = new Coolness("assets/coolness.png");
var intervalo;
var frames = 0;
var objects = [];
var x = 150;
var y = 150;
var velY = 0;
var velX = 0;
var speed = 2;
var friction = 0.98;
var keys = [];