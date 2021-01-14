import { Game } from './game.js';

let game;
const clickTarget = document.getElementById('click-targets');

function updateUI(){
    console.log('inside update UI');
    const boardHolder = document.getElementById('board-holder');
    const gameName = document.getElementById('game-name');
    console.log(game);
    if (game === undefined){
        boardHolder.classList.add('is-invisible');
    } else {
        boardHolder.classList.remove('is-invisible');
        gameName.innerHTML = game.getName();
        if (game.currentPlayer === 1){
            clickTarget.className = 'red';
        } else {
            clickTarget.className = 'black';
        }


    }
}

window.addEventListener('DOMContentLoaded', event => {

    const player1 = document.getElementById('player-1-name');
    const player2 = document.getElementById('player-2-name');
    const newGameButton = document.getElementById('new-game');
    const clickTarget = document.getElementById('click-targets');

    player1.addEventListener('keyup', event => {
        if (player1.value && player2.value) {
            newGameButton.disabled = false;
        }
    });

    //Refactor later
    player2.addEventListener('keyup', event => {
        if (player1.value && player2.value) {
            newGameButton.disabled = false;
        }
    });
    
    newGameButton.addEventListener('click', event => {
        //event.preventDefault();
        game = new Game(player1.value, player2.value);
        player1.innerText = '';
        player2.innerText = '';
        newGameButton.disabled = true;
        updateUI();

    });
    
    clickTarget.addEventListener('click', event => {
        console.log(event.target.id);
        let colTarget = event.target.id;
        let colIdx = colTarget[colTarget.length - 1]
        colIdx = Number.parseInt(colIdx);
        game.playInColumn(colIdx);
        updateUI();
    })

})