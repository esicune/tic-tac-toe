class TicTacToe {
    constructor() {

    }
    currentPlayer = 'x';
    gameField = [
        [ null, null, null ],
        [ null, null, null ],
        [ null, null, null ],
    ]

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex]) {
            return;
        }
        this.gameField[rowIndex][columnIndex] = this.currentPlayer;
        this.currentPlayer = this.currentPlayer == 'x' ? 'o' : 'x';
    }

    isFinished() {

    }

    getWinner() {
        
    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
