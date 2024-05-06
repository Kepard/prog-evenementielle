// Modèle
let playerScore = 0;
let computerScore = 0;
let roundsLeft = 10;

// Fonction pour jouer un tour
function play(playerChoice) {
    const choices = ['feuille', 'ciseaux', 'pierre', 'puits'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = getResult(playerChoice, computerChoice);
    
    if (result === 'J1') {
        playerScore++;
    } else if (result === 'J2') {
        computerScore++;
    }
    
    roundsLeft--;
    updateView();
    
    if (roundsLeft === 0) {
        endGame();
    }
}

// Fonction pour obtenir le résultat d'un tour
function getResult(playerChoice, computerChoice) {
    const results = {
        'feuille': {'feuille': 0, 'ciseaux': 'J2', 'pierre': 'J1', 'puits': 'J1'},
        'ciseaux': {'feuille': 'J1', 'ciseaux': 0, 'pierre': 'J2', 'puits': 'J2'},
        'pierre': {'feuille': 'J2', 'ciseaux': 'J1', 'pierre': 0, 'puits': 'J2'},
        'puits': {'feuille': 'J2', 'ciseaux': 'J1', 'pierre': 'J1', 'puits': 0}
    };
    
    return results[playerChoice][computerChoice];
}

// Fonction pour mettre à jour la vue
function updateView() {
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.getElementById('roundsLeft').textContent = roundsLeft;
}

// Fonction pour terminer le jeu
function endGame() {
    document.getElementById('actions').style.display = 'none';
    document.getElementById('restartButton').style.display = 'block';
}

// Fonction pour recommencer le jeu
function restart() {
    playerScore = 0;
    computerScore = 0;
    roundsLeft = 10;
    document.getElementById('actions').style.display = 'flex';
    document.getElementById('restartButton').style.display = 'none';
    updateView();
}
