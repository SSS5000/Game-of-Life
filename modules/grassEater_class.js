var livingCreature = require("./livingCreature_class");

module.exports = class GrassEater extends livingCreature {
    constructor(i, j, index) {
        super(i,j,index);
        this.energy = 8;
        this.directions = [];
        this.acted = false;
    }
    random(arr) {
        var r = Math.floor(Math.random() * (arr.length));
        return arr[r];
    }
    getNewCoordinates() {
        this.directions = [
            [this.i - 1, this.j - 1],
            [this.i, this.j - 1],
            [this.i + 1, this.j - 1],
            [this.i - 1, this.j],
            [this.i + 1, this.j],
            [this.i - 1, this.j + 1],
            [this.i, this.j + 1],
            [this.i + 1, this.j + 1]
        ];
    }

    chooseCell(num, matrix) {
        this.getNewCoordinates();
        return super.chooseCell(num, matrix);
    }

    mul(matrix) {
        
        var newCell = this.random(this.chooseCell(0, matrix));


        if (newCell) {
            var newJ = newCell[0];
            var newI = newCell[1];

            matrix[newJ][newI] = new GrassEater(newJ, newI, 2);
            this.energy = 8;
        }
    }
    move(matrix) {
        
        var newCell = this.random(this.chooseCell(0, matrix));

        if (newCell) {
            this.energy--;
            var newI = newCell[0];
            var newJ = newCell[1];
            matrix[newI][newJ] = matrix[this.i][this.j];
            matrix[this.i][this.j] = 0;
            this.j = newJ;
            this.i = newI;

        }
    }
    eat(matrix) {

        
        var newCell = this.random(this.chooseCell(1, matrix));
        this.acted = true;
        if (this.energy == 0) {
            matrix[this.i][this.j] = 0;
        }
        if (newCell) {
            var newI = newCell[0];
            var newJ = newCell[1];
            matrix[newI][newJ] = matrix[this.i][this.j];
            matrix[this.i][this.j] = 0;
            this.j = newJ;
            this.i = newI;

            this.energy++;
        } else {
            this.move(matrix);
        }
    }
}
