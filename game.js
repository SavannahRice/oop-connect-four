import { Column } from './column.js';

export class Game {
    constructor (player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;

        this.columns = [(new Column()), (new Column()), (new Column()), (new Column()), (new Column()), (new Column()), (new Column())];
    }

    

    getName() {
        return `${this.player1} vs. ${this.player2}`
    }

    playInColumn(index) {
        
        let currentColumn = this.columns[index];
        //console.log(this.columns);
        //console.log(currentColumn);
        if (this.currentPlayer === 1) {
            currentColumn.add(this.currentPlayer);
            this.currentPlayer = 2;
        } else {
            currentColumn.add(this.currentPlayer);
            this.currentPlayer = 1;
        }
    }

    getTokenAt (rowIndex,columnIndex) {
        //console.log('row', rowIndex);
        //console.log('col', columnIndex)
    let currentColumn = this.columns[columnIndex];
    console.log(currentColumn.getTokenAt(rowIndex));
    return currentColumn.getTokenAt(rowIndex);
    }
}

// export default Game;