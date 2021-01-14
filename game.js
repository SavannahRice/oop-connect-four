import { Column } from './column.js';

export class Game {
    constructor (player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;

        this.columns = [];
    }

    for (let i = 0; i < 7; i++) {
        this.columns.push(new Column);
    }

    getName() {
        return `${this.player1} vs. ${this.player2}`
    }

    playInColumn(index) {
        let currentColumn = this.columns[index];

        if (this.currentPlayer === 1) {
            currentColumn.add(this.currentPlayer);
            this.currentPlayer = 2;
        } else {
            currentColumn.add(this.currentPlayer);
            this.currentPlayer = 1;
        }
    }

    getTokenAt (rowIndex,columnIndex) {
    let currentColumn = this.columns[index];
    return currentColumn.getTokenAt(rowIndex);
    }
}

// export default Game;