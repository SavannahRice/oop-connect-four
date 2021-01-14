import {Game} from './game.js'

let game;

updateUI(){
    const boardHolder = document.getElementById('board-holder');
    const gameName = document.getElementById('game-name');
    if (game === undefined){
        boardHolder.className = 'is-invisible';
    } else {
        boardHolder.className = '';
        gameName.innerHTML = game.getName();


    }
}

window.addEventListener('DOMContentLoaded', event => {

    const player1 = document.getElementById('player-1-name');
    const player2 = document.getElementById('player-2-name');
    const newGameButton = document.getElementById('new-game');

    player1.addEventListener('keyup', event => {
        if (player1.value && player2.value) {
            newGameButton.disabled = false;
        }
    });
    
    newGameButton.addEventListener('submit', event => {
        event.preventDefault();
        game = new Game(player1.value, player2.value);
        player1.innerText = '';
        player2.innerText = '';
        newGameButton.disabled = true;
        updateUI();

    });


})