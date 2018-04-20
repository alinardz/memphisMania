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
    var randomY = Math.floor(Math.random() * 200) + 70;
    var image = oldies[Math.floor(Math.random() * oldies.length)];

    var width = image === "assets/objects/oldie1.png" ? 145 : "assets/objects/oldie2.png" ? 100 : "" ? 50 : 50;

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
    if (!(frames % 300 === 0)) return;
    var randomXS = Math.floor(Math.random() * 200) + 900;
    var randomYS = Math.floor(Math.random() * 300) + 10;
    var randomXC = Math.floor(Math.random() * 200) + 500;
    var randomYC = Math.floor(Math.random() * 300) + 10;
    var randomXV = Math.floor(Math.random() * 200) + 600;
    var randomYV = Math.floor(Math.random() * 300) + 10;
    var sodaI = sodas[Math.floor(Math.random() * sodas.length)];
    var videoI = videos[Math.floor(Math.random() * videos.length)];
    var cuadroI = cuadros[Math.floor(Math.random() * cuadros.length)];
    //var width = image === "assets/objects/memphis1.png" ? 23 : "assets/objects/memphis2.png" ? 117 : "assets/objects/memphis3.png" ? 50 : 23;
    var sodaO = new MemphisObject(randomXS, randomYS, 23, 50, sodaI);
    var videoO = new MemphisObject(randomXV, randomYV, 117, 50, videoI);
    var cuadroO = new MemphisObject(randomXC, randomYC, 50, 50, cuadroI);
    arrMemphis.push(sodaO);
    arrMemphis.push(videoO);
    arrMemphis.push(cuadroO);
}

function drawMemphisObjects() {
    arrMemphis.forEach(function(memphisObject) {
        memphisObject.draw();
    });
}