let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;
let player1Choice = null;
let player2Choice = null;

function makeChoice(choice) {
    if (currentPlayer === 1) {
        player1Choice = choice;
        currentPlayer = 2;
        document.getElementById('result-message').innerText = 'Jugador 2, elige una opción';
    } else if (currentPlayer === 2) {
        player2Choice = choice;
        const result = determineWinner(player1Choice, player2Choice);

        updateScore(result);
        displayResult(result);
        currentPlayer = 1;
        player1Choice = null;
        player2Choice = null;
    }
}

function determineWinner(choice1, choice2) {
    if (choice1 === choice2) return 'draw';
    if (
        (choice1 === 'rock' && choice2 === 'scissors') ||
        (choice1 === 'paper' && choice2 === 'rock') ||
        (choice1 === 'scissors' && choice2 === 'paper')
    ) {
        return 'player1';
    } else {
        return 'player2';
    }
}

function updateScore(result) {
    if (result === 'player1') player1Score++;
    if (result === 'player2') player2Score++;
    document.getElementById('player1-score').innerText = player1Score;
    document.getElementById('player2-score').innerText = player2Score;
}

function displayResult(result) {
    let resultMessage = '';

    if (result === 'draw') {
        resultMessage = '¡Empate!';
        document.getElementById('result-message').style.color = 'black';
    } else if (result === 'player1') {
        resultMessage = '¡Jugador 1 gana!';
        document.getElementById('result-message').style.color = '#2ecc71';
    } else if (result === 'player2') {
        resultMessage = '¡Jugador 2 gana!';
        document.getElementById('result-message').style.color = '#e74c3c';
    }

    document.getElementById('result-message').innerText = resultMessage;
}

document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', () => {
        makeChoice(item.id);
    });
});

document.getElementById('reset-game').addEventListener('click', () => {
    player1Score = 0;
    player2Score = 0;
    document.getElementById('player1-score').innerText = player1Score;
    document.getElementById('player2-score').innerText = player2Score;
    document.getElementById('result-message').innerText = 'Jugador 1, elige una opción';
});
