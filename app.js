var express = require('express');
var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

app.use(express.static("./public"));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3001);



var matrix = require("./modules/matrix")

var time = frameRate(5);

function frameRate (frameCount) {

    return 1000 / frameCount;
    
}


io.on('connection', function (socket) {
    socket.emit("firstMatrix", matrix);
    setInterval(draw, time)
 });



function draw () {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j].index == 1) {
                matrix[i][j].mul(matrix);
            } else if (matrix[i][j].index == 5) {
                matrix[i][j].shoot(matrix);
            } else  if (matrix[i][j].index == 2) {
                if (matrix[i][j].energy == 18) {
                    matrix[i][j].mul(matrix);
                }
                if (matrix[i][j].acted == true) {
                    matrix[i][j].acted = false;
                    continue;
                } else {
                    matrix[i][j].eat(matrix);
                }
            } else if (matrix[i][j].index == 4) {
                if (matrix[i][j].acted == true) {
                    matrix[i][j].acted = false;
                    continue;
                } else {
                    if (matrix[i][j].hunt == 5) {
                        matrix[i][j].eat(matrix);
                        matrix[i][j].hunt = 0;
                    } else {
                        matrix[i][j].waalk(matrix);
                    }
                }
            } else if (matrix[i][j].index == 3) {
                if (matrix[i][j].energy == 21) {
                    matrix[i][j].mul(matrix);
                }
                if (matrix[i][j].acted == true) {
                    matrix[i][j].acted = false;
                    continue;
                } else {
                    matrix[i][j].eat(matrix);
                }
            }
        }
    }  
    
    socket.emit("redraw", matrix);
}





