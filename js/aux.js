//CAMBIO DE COLOR BOTÓN
function buttonColor() {
    setInterval(function() {
        button.classList.toggle("color-button");
    }, 500);
}

buttonColor();

//GENERAR OBJETOS MALOS
function generateObjects() {
    if (!(frames % 100 === 0)) return;
    var randomX = Math.floor(Math.random() * 200) + 600;
    var randomY = Math.floor(Math.random() * 200) + 40;
    var image = oldies[Math.floor(Math.random() * oldies.length)];

    var width = image === "assets/objects/oldie1.png" ? 145 : "assets/objects/oldie2.png" ? 100 : "assets/objects/oldie3.png" ? 50 : 50;

    var oldieObject = new OldieObject(randomX, randomY, width, image);
    arrOldies.push(oldieObject);
}

function drawObjects() {
    arrOldies.forEach(function(oldieObject) {
        oldieObject.draw();
    });
}


function checkJumping() {
    if (coche1.y >= 200) {
        isJumping = false;
    }
    if (isJumping) {
        coche1.y += 1.5;
    }

    if (coche2.y >= 200) {
        isJumping = false;
    }
    if (isJumping) {
        coche2.y += 1.5;
    }
}

//GENERAR OBJETOS BUENOS
function generateMemphisObject() {
    if (!(frames % 150 === 0)) return;
    var randomX = Math.floor(Math.random() * 200) + 900;
    var randomY = Math.floor(Math.random() * 200) + 10;
    var image = memphis[Math.floor(Math.random() * memphis.length)];
    var width = image === "assets/objects/memphis1.png" ? 23 : "assets/objects/memphis2.png" ? 117 : "assets/objects/memphis3.png" ? 50 : 23;
    var memphisObject = new MemphisObject(randomX, randomY, width, image);
    arrMemphis.push(memphisObject);
}

function drawMemphisObjects() {
    arrMemphis.forEach(function(memphisObject) {
        memphisObject.draw();
    });
}