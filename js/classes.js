//PANTALLA DE JUEGO
function Board(image) {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "assets/escenario.png";

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

//COOLNESS1
function Coolness1() {
    this.draw = function() {
        this.coolnessEscrito = "Coolness : " + Math.floor(coolnessBar1);
        ctx.beginPath();
        ctx.font = "40px Caveat"
        ctx.strokeStyle = 'magenta';
        ctx.lineWidth = 5;
        ctx.strokeText(this.coolnessEscrito, 60, 40);
        ctx.fillStyle = 'white';
        ctx.fillText(this.coolnessEscrito, 60, 40);
        ctx.closePath();
    }
}

//COOLNESS2
function Coolness2() {
    this.draw = function() {
        this.coolnessEscrito2 = "Coolness : " + Math.floor(coolnessBar2);
        ctx.beginPath();
        ctx.font = "40px Caveat"
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 5;
        ctx.strokeText(this.coolnessEscrito2, 450, 40);
        ctx.fillStyle = 'white';
        ctx.fillText(this.coolnessEscrito2, 450, 40);
        ctx.closePath();
    }
}

//PERSONAJE
function Coche(image) {
    this.x = 20;
    this.y = 200;
    this.width = 250;
    this.height = 95;

    this.img = new Image();
    this.img.src = image;
    this.img.onload = function() {
        this.draw();
    }.bind(this);

    this.draw = function() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    //movimientos
    this.forward = function() {
        if (this.x < canvas.width - this.width) {
            this.x += 20;
        }

    }

    this.back = function() {
        if (this.x > 0) {
            this.x -= 10;
        }
    }

    this.jump = function() {
        if (this.y > 0) {
            this.y -= 50;
            isJumping = true;
        }

    }

    this.moveDown = function() {
        if (this.y < canvas.height - this.height) {
            this.y += 10;
        }

    }

    this.moveUp = function() {
        if (this.y > 130)
            this.y -= 10;
    }

    this.isTouching = function(object) {
        return (this.x < object.x + object.width) &&
            (this.x + (this.width - 110) > object.x) &&
            (this.y < object.y + object.height) &&
            (this.y + (this.height - 50) > object.y);
    }

}

//OBJETOS MALOS
function OldieObject(x, y, width, image) {
    this.x = x;
    this.y = y;
    this.height = 40;
    this.width = width;
    this.img = new Image();
    this.img.src = image;
    this.draw = function() {
        this.x -= 5;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

//OBJETOS Chidos
function MemphisObject(x, y, width, image) {
    this.x = x;
    this.y = y;
    this.height = 50;
    this.width = width;
    this.img = new Image();
    this.img.src = image;
    this.draw = function() {
        this.x -= 5;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

function Next() {
    this.x = 0;
    this.y = 0;
    this.height = canvas.height;
    this.width = canvas.width;
    this.img = new Image();
    this.img.src = "assets/ready2.png";
    this.draw = function() {
        this.x--;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}