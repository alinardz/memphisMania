function gameOver() {
    stop();
    //dibujar score final
    //drawFinalScore();
}

function update() {
    generateObjects();
    generateMemphisObject();
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.draw();
    coche1.draw();
    coolness.draw();
    drawMemphisObjects();
    drawObjects();
    checkCollision();
    checkCollisionMemphis();
    if (coche1.y >= 200) {
        isJumping = false;
    }
    if (isJumping) {
        coche1.y += 1.5;
    }


}

function startGame() {
    if (intervalo > 0) return;
    intervalo = setInterval(function() {
        update();
    }, 1000 / 60); //60fps 
    //HAZ UNA FUNCIÓN APARTE PARA RESETEAR TODO******
    coche1.y = 200;
    //chance no es necesario
    arrOldies = [];
    arrMemphis = [];

    frames = 0;
    coolnessBar1 = 5;
    coolnessBar2 = 5;
    //board.music.play();
}

function stop() {
    clearInterval(intervalo);
    intervalo = 0;
    board.music.pause();
}

function checkCollision() {
    arrOldies.forEach(function(oldie, oindex) {
        if (coche1.isTouching(oldie)) {
            coolnessBar1 -= 2;
            arrOldies.splice(oindex, 1);
        }
        console.log("estoy chocando con un oldieee mi coolness es:" +
            coolnessBar1);
    });
}

function checkCollisionMemphis() {
    arrMemphis.forEach(function(memphis, mindex) {
        if (coche1.isTouching(memphis)) {
            coolnessBar1 += 1;
            arrMemphis.splice(mindex, 1);
        }
        console.log("estoy chocando con un memphis  mi coolness es:" +
            coolnessBar1);
    });
}