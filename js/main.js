document.addEventListener('DOMContentLoaded', () => {
    const playerScoreElement = document.getElementById('player-score');
    const computerScoreElement = document.getElementById('computer-score');
    const resultMessageElement = document.getElementById('result-message');
    const resetButton = document.getElementById('reset-game');

    let playerScore = 0;
    let computerScore = 0;

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * 3);
        return choices[randomIndex];
    }

    function playRound(playerChoice) {
        const computerChoice = getComputerChoice();
        let resultMessage = '';
        let outcome = '';

        if (playerChoice === computerChoice) {
            resultMessage = "Empate";
            outcome = 'draw';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            resultMessage = "Has ganado";
            playerScore++;
            outcome = 'winner';
        } else {
            resultMessage = "Has perdido";
            computerScore++;
            outcome = 'loser';
        }

        resultMessageElement.textContent = resultMessage;
        resultMessageElement.classList.remove('winner', 'loser', 'draw');
        resultMessageElement.classList.add(outcome);

        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
    }

    document.querySelectorAll('.choice-box').forEach(box => {
        box.addEventListener('click', () => {
            const playerChoice = box.querySelector('i').id;
            playRound(playerChoice);
        });
    });

    resetButton.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        playerScoreElement.textContent = playerScore;
        computerScoreElement.textContent = computerScore;
        resultMessageElement.textContent = '';
        resultMessageElement.classList.remove('winner', 'loser', 'draw');
    });
});
