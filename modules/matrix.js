var Grass = require("./grass_class");
// var GrassEater = require("./grassEater_class");
/*var Predator = require("./predator_class");
var Lion = require("./lion_class");
var Hunter = require("./hunter_class");*/

var matrix = [];
var side = 10;

var n = 10;
var lion = 0;
for (var i = 0; i < n; i++) {
    matrix[i] = [];
    for (var j = 0; j < n; j++) {
        matrix[i][j] = Math.floor(Math.random() * (4));

    }
}

matrix[Math.floor(Math.random() * (n))][0] = 5


matrix[Math.floor(Math.random() * (n))][Math.floor(Math.random() * (n))] = 4

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] == 1) {
            matrix[i][j] = new Grass(i, j, 1);
        // } else if (matrix[i][j] == 2) {
        //     matrix[i][j] = new GrassEater(i, j, 2);
        } /*else if (matrix[i][j] == 3) {
            matrix[i][j] = new Predator(i, j, 3);
        } else if (matrix[i][j] == 4) {
            matrix[i][j] = new Lion(i, j, 4);
        } else if (matrix[i][j] == 5) {
            matrix[i][j] = new Hunter(i, j, 5);
        }*/
    }
}

console.log(matrix);


module.exports = matrix;