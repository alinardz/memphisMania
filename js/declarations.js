//CANVAS
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//BOTONES
var boton = document.getElementsByTagName("button");
var isBlue = false;

//OBJETOS QUE RECOLECTAR Y EVITAR
var oldies = ["assets/objects/oldie1.png", "assets/objects/oldie2.png", "assets/objects/oldie3.png"];
var memphis = ["assets/objects/memphis1.png", "assets/objects/memphis2.png", "assets/objects/memphis3.png"];

var board = new Board("assets/escenario.png");

var coche1 = new Coche("assets/coche1.png");
var coolness = new Coolness("assets/coolness.png");
var intervalo;
var frames = 0;
var objects = [];