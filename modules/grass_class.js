var livingCreature = require("./livingCreature_class");
//var matrix = require("./matrix");

module.exports = class Grass extends livingCreature {

    mul(matrix) {
        function random(arr) {
            var r = Math.floor(Math.random() * (arr.length));
            return arr[r];
        }
        
        this.multiply++;
        var newCell = random(this.chooseCell(0));


        if (newCell && this.multiply >= 8) {
            var newJ = newCell[0];
            var newI = newCell[1];

            matrix[newJ][newI] = new Grass(newJ, newI, 1);
            this.multiply = 0;

        }
    }

}
