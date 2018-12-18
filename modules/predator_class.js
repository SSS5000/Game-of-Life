
module.exports = class Predator {
    constructor(i, j, index) {
        this.i = i;
        this.j = j;
        this.index = index;
        this.acted = true;
        this.directions = [];
        this.energy = 18;
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

    random(arr) {
        var r = Math.floor(Math.random() * (arr.length));
        return arr[r];
    }

    chooseCell(num,num2,matrix) {
        this.getNewCoordinates();
        var found = [];
        for (var k in this.directions) {
            var i = this.directions[k][0];
            var j = this.directions[k][1];
            if (i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[0].length - 1) {
                continue;
            } else if (matrix[i][j] == num) {
                found.push([i, j]);
            } else if (matrix[i][j].index == num, matrix[i][j].index == num2) {
                found.push([i, j]);
            }
        }
        return found;
    }

    move(matrix) {
 
        
        var newCell = this.random(this.chooseCell(0,1,matrix));

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
        
        var newCell = this.random(this.chooseCell(2,2,matrix));

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

    mul(matrix) {
        var newCell = this.random(this.chooseCell(0,0,matrix));

        if (newCell) {
            var newJ = newCell[0];
            var newI = newCell[1];

            matrix[newJ][newI] = new Predator(newJ, newI, 3);
        }
    }

}
