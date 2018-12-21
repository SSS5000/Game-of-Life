var matrix = [];
var side = 20;
var socket;

function setup() {

    socket = io();

    frameRate(0);

    socket.on("firstMatrix", function(mtx){
        matrix = mtx;
        createCanvas(10000, matrix.length * side + 1);

        socket.on("redraw", function (mtx) {
           matrix = mtx;
           redraw(); 
        });

        //HETO JNJEL

        /*for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j].index == 1) {
                    fill("lightgreen");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j].index == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill(255, 255, 255);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j].index == 4) {
                    fill(0, 0, 0);
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j].index == 3) {
                    fill("red");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j].index == 5) {
                    fill("darkgreen");
                    rect(j * side, i * side, side, side);
                }
            }
        }*/

    });
    noLoop();
    
}








function draw() {
    background('#acacac');
    
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j].index == 1) {
                fill("lightgreen");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j].index == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill(255, 255, 255);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j].index == 4) {
                fill(0, 0, 0);
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j].index == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j].index == 5) {
                fill("darkgreen");
                rect(j * side, i * side, side, side);
            }
        }
    }

    line(400,50,2500,50);
    line(600,500,600,0);
    line(900,500,900,0);
    textSize(20);
    fill("lightgreen");
    text("Grass",450,80);
    fill("yellow");
    text("GrassEater",450,120);
    fill('red');
    text("Predator",450,160);
    fill('black');
    text("Lion",450,200);
    fill("darkgreen");
    text("Hunter",450,240)
}
