//GENERAR GAME OVER
function game2() {
    stop();
    coche1.width = 0;
    if (siguiente === false) {
        this.next.draw();
    }

    //en 2 segundos, empieza otra vez el intervalo se updatea cada 60 fps
    setTimeout(function() {
        siguiente = true;
        intervalo = setInterval(function() {
            update();
        }, 1000 / 60); //60fps 
    }, 2000);

    coche2.x = 10;
    coche2.y = 200;
    personaje2 = true;
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

    //boards, coolness y personajes
    board.draw();
    coche1.draw();

    //personajes

    if (personaje2 === true) {
        coche2.draw();
        coche1.width = 0;
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
        game2();
    }

    if (coolnessBar1 >= 6 && siguiente === false) {
        game2();
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
        //end
        final();
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