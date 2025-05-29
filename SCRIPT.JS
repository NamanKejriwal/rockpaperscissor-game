// Define the score object
const score = {
    wins: 0,
    ties: 0,
    loses: 0,
  };
  
  // Function to pick the computer's move
  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else {
      computerMove = 'scissor';
    }
    return computerMove;
  }
  
  // Function to play the game
  function playgame(playerMove) {
    const compMove = pickComputerMove();
    let result = '';
  
    if (playerMove === 'rock') {
      if (compMove === 'paper') {
        result = 'You lose.';
      } else if (compMove === 'scissor') {
        result = 'You win.';
      } else {
        result = 'Tie.';
      }
    } else if (playerMove === 'paper') {
      if (compMove === 'scissor') {
        result = 'You lose.';
      } else if (compMove === 'rock') {
        result = 'You win.';
      } else {
        result = 'Tie.';
      }
    } else if (playerMove === 'scissor') {
      if (compMove === 'rock') {
        result = 'You lose.';
      } else if (compMove === 'paper') {
        result = 'You win.';
      } else {
        result = 'Tie.';
      }
    }
  
    // Update the score based on the result
    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.loses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }
  
    // Update the DOM with the result and moves
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `
      YOU PICKED <img src="${playerMove}-emoji.png" class="moveicon">.
      COMPUTER PICKED <img src="${compMove}-emoji.png" class="moveicon">.
    `;
  
    // Update the score display
    updateScore();
  }
  
  // Function to update the score display
  function updateScore() {
    document.querySelector('.js-scores').innerHTML = `
      WINS: ${score.wins}, LOSES: ${score.loses}, TIES: ${score.ties}
    `;
  }
  
  // Function to reset the score
  function resetScore() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    updateScore();
  }