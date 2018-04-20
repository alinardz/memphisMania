//GENERAR GAME OVER
function game2() {
    stop();
    coche1.width = 0;
    if (siguiente === false) {
        this.next.draw();
    }
    setTimeout(function() {
        siguiente = true;
        intervalo = setInterval(function() {
            update();
        }, 1000 / 60); //60fps 
    }, 2000);
    coche2.x = 0;
    coche2.y = 200;
    personaje2 = true;
}

function final() {
    stop();
    next.draw();
    //dibujar score final
    //drawFinalScore();
}

//DETIENE TODO
function stop() {
    clearInterval(intervalo);
    intervalo = 0;
    //board.music.pause();
}

//AQUI VA TODO LO QUE SE ACTUALIZA
function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //boards, coolness y personajes
    board.draw();

    //personajes
    if (personaje1 === true) {
        coche1.draw();
    }

    if (personaje2 === true) {
        coche2.draw();
        coche1.width = 0;
    }


    //score
    coolness.draw();

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
    //HAZ UNA FUNCIÓN APARTE PARA RESETEAR TODO******
    //coche1.y = 200;
    //chance no es necesario
    arrOldies = [];
    arrMemphis = [];

    frames = 0;
    coolnessBar1 = 6;
    coolnessBar2 = 6;
    //board.music.play();

    //movemos la interface
    moveInfo();
}

//VERIFICA SI PERSONAJE 1 CHOCA CON OBJETOS MALOS
function checkCollision() {
    arrOldies.forEach(function(oldie, oindex) {
        if (coche1.isTouching(oldie)) {
            coolnessBar1 -= 2;
            arrOldies.splice(oindex, 1);
        }
    });
    if (coolnessBar1 <= 0 && siguiente === false) {
        personaje1 = false;
        game2();
    }
}

//VERIFICA SI PERSONAJE 1 CHOCA CON OBJETOS BUENOS
function checkCollisionMemphis() {
    arrMemphis.forEach(function(memphis, mindex) {
        if (coche1.isTouching(memphis)) {
            coolnessBar1 += 1;
            arrMemphis.splice(mindex, 1);
            console.log("coche 1 toco un memphis")
        }
    });
}

//VERIFICA SI PERSONAJE 2 CHOCA CON OBJETOS MALOS
function checkCollision2() {
    arrOldies.forEach(function(oldie, oindex) {
        if (coche2.isTouching(oldie)) {
            coolnessBar2 -= 2;
            arrOldies.splice(oindex, 1);
            console.log("coche 2 toco un malo")
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
            console.log("coche 2 toco un memphis")
        }
    });
}

//MOVER LOGO Y BOTÓN
function moveInfo() {
    var info = document.getElementById("info");
    info.style.transition = "all 1s ease";
    info.style.transform = "translateY(-300px)";
}