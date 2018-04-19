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
    arrOldies.forEach(function(oldie) {
        if (coche1.isTouching(oldie)) {
            coolnessBar1 -= .1;
        }
        console.log("estoy chocando con un oldieee mi coolness es:" +
            coolnessBar1);
    });
}

function checkCollisionMemphis() {
    arrMemphis.forEach(function(memphis) {
        if (coche1.isTouching(memphis)) {
            coolnessBar1 += .1;
        }
        console.log("estoy chocando con un memphis  mi coolness es:" +
            coolnessBar1);
    });
}