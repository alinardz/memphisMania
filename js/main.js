function resultado1() {
    stop();
    coche1.width = 0;
    coche1.height = 0;
    if (coolnessBar1 > 9) {
        coche1Good.draw();
    }
    if (coolnessBar1 < 1) {
        coche1Bad.draw();
    }
    //en 2 segundos, empieza otra vez el intervalo se updatea cada 60 fps
    setTimeout(function() {
        siguiente = true;
        intervalo = setInterval(function() {
            this.turno2.draw();
            update();
        }, 1000 / 60); //60fps 
    }, 4000);


    //set bg 2
    coche2.x = 10;
    coche2.y = 200;
    personaje2 = true;
}


function resultado2() {
    stop();
    coche2.width = 0;
    coche2.height = 0;

    setTimeout(function() {
        if (coolnessBar1 > coolnessBar2) {
            win1.draw();
        }
        if (coolnessBar1 < coolnessBar2) {
            win2.draw();
        }
        if (coolnessBar1 === 0 && coolnessBar2 === 0) {
            loseB.draw();
        }
        if (coolnessBar1 === 10 && coolnessBar2 === 10) {
            winB.draw();
        }

    }, 4000);
    if (coolnessBar2 > 9) {
        coche2Good.draw();
    }
    if (coolnessBar2 < 1) {
        coche2Bad.draw();
    }

}




//DETIENE TODO
function stop() {
    clearInterval(intervalo);
    intervalo = 0;
}

//AQUI VA TODO LO QUE SE ACTUALIZA
function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.draw();
    coche1.draw();

    //si es 2do turno dibuja al coche2
    if (personaje2 === true) {
        coche2.draw();
    }


    //score
    coolness1.draw();
    coolness2.draw();

    //objetos
    generateObjects();
    drawObjects();
    generateMemphisObject();
    drawMemphisObjects();

    //checa funciones
    checkCollision();
    checkCollisionMemphis();
    checkCollision2();
    checkCollisionMemphis2();
    checkJumping();
}

//EMPIEZA JUEGO
function startGame() {
    if (intervalo > 0) return;
    intervalo = setInterval(function() {
        update();
    }, 1000 / 60); //60fps 
    arrOldies = [];
    arrMemphis = [];

    frames = 0;
    coolnessBar1 = 5;
    coolnessBar2 = 5;

    moveInfo();
}

//VERIFICA SI PERSONAJE 1 CHOCA CON OBJETOS MALOS
function checkCollision() {
    arrOldies.forEach(function(oldie, oindex) {
        if (coche1.isTouching(oldie)) {
            coolnessBar1 -= 1;
            arrOldies.splice(oindex, 1);
        }
    });
    if (coolnessBar1 <= 0 && siguiente === false) {
        resultado1();
    }

    if (coolnessBar1 > 9 && siguiente === false) {
        resultado1();
    }
}

//VERIFICA SI PERSONAJE 1 CHOCA CON OBJETOS BUENOS
function checkCollisionMemphis() {
    arrMemphis.forEach(function(memphis, mindex) {
        if (coche1.isTouching(memphis)) {
            coolnessBar1 += 1;
            arrMemphis.splice(mindex, 1);
        }
    });
}

//VERIFICA SI PERSONAJE 2 CHOCA CON OBJETOS MALOS
function checkCollision2() {
    arrOldies.forEach(function(oldie, oindex) {
        if (coche2.isTouching(oldie)) {
            coolnessBar2 -= 2;
            arrOldies.splice(oindex, 1);
        }
    });
    if (coolnessBar2 <= 0) {
        resultado2();
    }
    if (coolnessBar2 > 9) {
        resultado2();
    }
}

//VERIFICA SI PERSONAJE 2 CHOCA CON OBJETOS BUENOS
function checkCollisionMemphis2() {
    arrMemphis.forEach(function(memphis, mindex) {
        if (coche2.isTouching(memphis)) {
            coolnessBar2 += 1;
            arrMemphis.splice(mindex, 1);
        }
    });
}

//MOVER LOGO Y BOTÓN
function moveInfo() {
    var info = document.getElementById("info");
    var logo = document.getElementById("logo");
    info.style.transition = "all 1s ease";
    info.style.transform = "translateY(-300px)";
    logo.style.transform = "scale(.7)";
}