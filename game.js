import { Column } from './column.js';

export class Game {
    constructor (player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = 1;
        this.winnerNumber = 0;

        this.columns = [(new Column()), (new Column()), (new Column()), (new Column()), (new Column()), (new Column()), (new Column())];
    }

    

    getName() {
        if (this.winnerNumber === 3){
            return `${this.player1} ties with ${this.player2}` 
        }
        return `${this.player1} vs. ${this.player2}`
    }

    playInColumn(index) {
        
        let currentColumn = this.columns[index];
        //console.log(this.columns);
        console.log(currentColumn);
        if (this.currentPlayer === 1) {
            currentColumn.add(this.currentPlayer);
            this.currentPlayer = 2;
        } 
        else {
            currentColumn.add(this.currentPlayer);
            this.currentPlayer = 1;
        }
        console.log(currentColumn);
    }

    checkForTie() {
        this.winnerNumber = 3;
        for (let i =0; i < 6; i++) {
            let currentColumn = this.columns[i];
            if (!currentColumn.isFull()) {
                return this.winnerNumber = 0;
            }

        }
        return this.winnerNumber;
    }

    getTokenAt (rowIndex,columnIndex) {
        //console.log('row', rowIndex);
        //console.log('col', columnIndex)
    let currentColumn = this.columns[columnIndex];
    //console.log(currentColumn.getTokenAt(rowIndex));
    return currentColumn.getTokenAt(rowIndex);
    }

    isColumnFull(idx) {
        return this.columns[idx].isFull();
    }
}

// export default Game;