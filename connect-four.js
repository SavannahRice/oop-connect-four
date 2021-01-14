import {Game} from './game.js'

let game;

window.addEventListener('DOMContentLoaded', event => {

    const player1 = document.getElementById('player-1-name');
    const player2 = document.getElementById('player-2-name');

    player1.addEventListener('keyup', event => {
        if (player1.value && player2.value) {
            const newGameButton = document.getElementById('new-game');
            newGameButton.setAttribute('disabled', false);
        }
    })
})