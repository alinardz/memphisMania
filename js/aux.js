//CAMBIO DE COLOR BOTÓN
function buttonColor() {
    setInterval(function() {
        button.classList.toggle("color-button");
    }, 500);
}

buttonColor();



//GENERAR OBJETOS OLDIES
function generateObjects() {
    if (!(frames % 300 === 0)) return;
    var randomX = Math.floor(Math.random() * 200) + 900;
    var randomY = Math.floor(Math.random() * 200) + 10;
    var image = oldies[Math.floor(Math.random() * oldies.length)];
    //var width = (image === "assets/objects/oldie1.png" ? 145 : 145)(image === "assets/objects/oldie2.png" ? 100 : 100)(image === "assets/objects/oldie3.png" ? 50 : 50);

    var width = image === "assets/objects/oldie1.png" ? 145 : "assets/objects/oldie2.png" ? 100 : "assets/objects/oldie3.png" ? 50 : 50;

    var oldieObject = new OldieObject(randomX, randomY, width, image);
    arrOldies.push(oldieObject);
}

function drawObjects() {
    arrOldies.forEach(function(oldieObject) {
        oldieObject.draw();
    });
}

function checkCollision() {
    arrOldies.forEach(function(object) {
        if (coche1.isTouching(object))
            console.log("chocando con un oldie, mis puntos son: " + coolnessBar1)
    });
}

function checkCollisionMemphis() {
    arrMemphis(function(object) {
        if (coche1.isTouching(object))
            console.log("chocando con un memphis, mis puntos son: " + coolnessBar1)
    });

}

//GENERAR OBJETOS MEMPHIS
function generateMemphisObject() {
    if (!(frames % 300 === 0)) return;
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

function checkCollision() {
    //verifica si el pajarín está tocando cada pipe
    arrOldies.forEach(function(oldie) {
        if (coche1.isTouching(oldie)) {
            coolnessBar1 -= .1;
        }
        console.log("estoy chocando con un oldieee mi coolness es:" +
            coolnessBar1);
    });
    arrOldies.forEach(function(oldie) {
        if (coche1.isTouching(oldie)) {
            coolnessBar1 -= .1;
        }
        console.log("estoy chocando con un oldieee mi coolness es:" +
            coolnessBar1);
    });
}