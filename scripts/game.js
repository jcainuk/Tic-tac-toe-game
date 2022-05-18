const startNewGame = () => {
  if (players[0].name === '' || players[1] === '') {
    alert('Please set custom player names for both players!');
    return;
  }
  gameAreaElement.style.display = 'block';
};

const switchPlayer = () => {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
};

const selectGameField = (event) => {
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add('disabled');
};
