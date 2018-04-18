var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//cambiar colores boton cada segundo
var boton = document.getElementsByTagName("button");
var isBlue = false;

function buttonColor() {
    setInterval(function() {
        button.classList.toggle("color-button");
    }, 500);
}

buttonColor();

var oldies = [];
var memphis = [];


function Board(image) {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = image;
    this.music = new Audio();
    this.music.src = "assets/spin.mp3";

    this.move = function() {
        this.x -= 4;
        if (this.x < -canvas.width) this.x = 0;
    }

    this.img.onload = function() {
        this.draw();
    }.bind(this);

    this.draw = function() {
        this.move();
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.img, this.x + canvas.width, this.y, this.width, this.height);
    }
}

function Coolness(image) {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = image;

    this.img.onload = function() {
        this.draw();
    }.bind(this);

    this.draw = function() {
        ctx.drawImage(this.img, 150, 10, 150, 40);
    }
}

function Coche(image) {
    this.x = 20;
    this.y = 200;
    this.width = 288;
    this.height = 110;
    this.img = new Image();
    this.img.src = image;
    this.img.onload = function() {
        this.draw();
    }.bind(this);
    this.draw = function() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    this.forward = function() {
        if (this.x < canvas.width - this.width) {
            this.x += 7;
        }

    }

    this.back = function() {
        if (this.x > canvas.width - this.width)
            this.x -= 10;
    }

    this.jump = function() {
        if (this.y > 0)
            this.y -= 50;
    }

    this.moveDown = function() {
        if (this.y < canvas.height - this.height) {
            this.y += 10;
        }

    }

    this.moveUp = function() {
        if (this.y > 0)
            this.y -= 10;
    }

    this.isTouching = function(object) {
        return (this.x < object.x + object.width) &&
            (this.x + (this.width - 110) > object.x) &&
            (this.y < object.y + object.height) &&
            (this.y + (this.height - 50) > object.y);
    }
}

function Object(x, y, image, name) {
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = name === 'bigote' ? 100 : 50;
    this.img = new Image();
    this.img.src = image;
    this.draw = function() {
        this.x--;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

//VARIABLES GLOBALES
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

function generateObjects() {
    if (!(frames % 300 === 0)) return;
    var randomX = Math.floor(Math.random() * 200) + 900;
    var randomY = Math.floor(Math.random() * 200) + 10;
    var object = new Object(randomX, randomY, "assets/bObjects/mustache.png");
    objects.push(object);
}

function drawObjects() {
    objects.forEach(function(object) {
        object.draw();
    });
}

function checkCollision() {
    //verifica si el pajarín está tocando cada pipe
    objects.forEach(function(object) {
        if (coche1.isTouching(object)) gameOver();
    });
}

function screenOver() {
    this.img = new Image();
    this.img.src = "assets/coolness.png";

    this.img.onload = function() {
        this.draw();
    }.bind(this);

    this.draw = function() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

var screenOver;

function gameOver() {
    stop();
    sreenOver.draw();
    //dibujar score final
    //drawFinalScore();
}


//Update: se encarga de que todo se mueva
function update() {
    generateObjects();
    frames++;
    //console.log(frames);
    //va creando y borrando, cambiando x & y
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.draw();
    coche1.draw();
    drawObjects();
    coolness.draw();
    checkCollision();
}



function startGame() {
    if (intervalo > 0) return;
    intervalo = setInterval(function() {
        update();
    }, 1000 / 60); //60fps 
    //HAZ UNA FUNCIÓN APARTE PARA RESETEAR TODO******
    coche1.y = 200;
    objects = [];
    frames = 0;
    board.music.play();
}

function stop() {
    clearInterval(intervalo);
    intervalo = 0;
    board.music.pause();
}


const button = document.getElementById("start-button");
button.addEventListener("click", function() {
    startGame();
    //cambiar boton al dar clic
    button.classList.toggle("restart-button");
    button.textContent = "Restart";
    //button.classList.add("restart-button");

    //button.remove();
    //*** crear boton restart;
});

button.addEventListener("mouseover", function() {
    button.classList.toggle("hover-button");
});

button.addEventListener("mouseout", function() {
    button.classList.toggle("hover-button");
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 40) {
        coche1.moveDown();
    }
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 38) {
        coche1.moveUp();
    }
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 32) {
        coche1.jump();
    }
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 39) {
        coche1.forward();
    }
});

addEventListener("keydown", function(e) {
    if (e.keyCode === 37) {
        coche1.back();
    }
});