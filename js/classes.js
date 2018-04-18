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

 //COOLNESS
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

 //COCHE
 function Coche(image) {
     this.x = 20;
     this.y = 200;
     this.width = 288;
     this.height = 110;
     this.velX = 0;
     this.velY = 0;
     this.speed = 5;
     this.friction = 0.98;
     this.keys = [];

     this.img = new Image();
     this.img.src = image;
     this.img.onload = function() {
         this.draw();
     }.bind(this);

     this.draw = function() {
         ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

     }

     //MOVIMIENTOS
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

 //OBJETOS MALOS
 function Object(x, y, width, image) {
     this.x = x;
     this.y = y;
     this.height = 50;
     this.width = width;
     this.img = new Image();
     this.img.src = image;
     this.draw = function() {
         this.x--;
         ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
     }
 }

 //OBJETOS MEMPHIS
 function Memphis(x, y, image) {
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = 50;
     this.img = new Image();
     this.img.src = image;
     this.draw = function() {
         this.x--;
         ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
     }
 }