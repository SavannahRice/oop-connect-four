class Column {
    constructor () {
        this.column = [null, null, null, null, null, null];
    }

    add(playerNum) {
        
        let index = 6;
        while (index > 0) {
            if (this.column[index - 1] === null) {
                this.column[index - 1] = playerNum;
                index = 0;
            } else {
                index--;
            }
        }
    } 

    getTokenAt (rowIdxNum) {


    } 
}