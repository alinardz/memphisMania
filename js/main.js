function gameOver() {
    stop();
    sreenOver.draw();
    //dibujar score final
    //drawFinalScore();
}


//Update: se encarga de que todo se mueva
function update() {
    generateObjects();
    frames++;
    //console.log(frames);
    //va creando y borrando, cambiando x & y
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.draw();
    coche1.draw();
    drawObjects();
    coolness.draw();
    checkCollision();
}



function startGame() {
    if (intervalo > 0) return;
    intervalo = setInterval(function() {
        update();
    }, 1000 / 60); //60fps 
    //HAZ UNA FUNCIÓN APARTE PARA RESETEAR TODO******
    coche1.y = 200;
    objects = [];
    frames = 0;
    board.music.play();
}

function stop() {
    clearInterval(intervalo);
    intervalo = 0;
    board.music.pause();
}