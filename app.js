var express = require('express');
var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

app.use(express.static("./public"));

app.get('/', function (req, res) {
   res.redirect('index.html');
});

server.listen(3001);

var fs = require('fs');



var matrix = require("./modules/matrix")

var time = frameRate(1);

function frameRate (frameCount) {

    return 1000 / frameCount;
    
}


var grass = 0;
var grassEater = 0;
var predator = 0;
var lion = 0;


var obj = {
    "grass": grass,
    "grassEater": grassEater,
    "predator": predator,
    "lion": lion
 }

obj.grass = 0;
obj.grassEater = 0;
obj.predator = 0;
obj.lion = 0;

io.on('connection', function (socket) {
    socket.emit("firstMatrix", matrix);
    setInterval(draw, time);
    function draw () {
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j].index == 1) {
                        obj.grass++;
                    matrix[i][j].mul(matrix);
                } else if (matrix[i][j].index == 5) {
                    matrix[i][j].shoot(matrix);
                } else  if (matrix[i][j].index == 2) {
                    obj.grassEater++;
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
                    obj.lion++;
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
                    obj.predator++;
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

    setInterval(
        function(){ 
            //nullify
            //for()
            //
           fs.writeFileSync ("Statistic.JSON", JSON.stringify(obj) );
           socket.emit();
            obj.grass = 0;
            obj.grassEater = 0;
            obj.predator = 0;
            obj.lion = 0;
   }, 1000);
 });











