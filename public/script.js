var matrix = [];
var side = 20;
var socket;

function setup() {

    socket = io();

    frameRate(0);

    socket.on("firstMatrix", function(mtx){
        matrix = mtx;
        createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);

        socket.on("redraw")

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
    background('#acacac');
    noLoop();

}








function draw() {
    
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
}
