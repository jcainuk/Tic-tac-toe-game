const openPlayerConfig = () => {
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
};

const closePlayerConfig = () => {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
};

const savePlayerConfig = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('playername').trim();

  if (!enteredPlayername) {
    errorsOutputElement.textContent = 'Please enter a valid name!';
  }
};
