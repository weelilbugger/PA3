

const messageInput = document.getElementById('messageInput');
const displayField = document.getElementById('displayField');
const displayBtn = document.getElementById('displayBtn');

// Function to change the text in the display field
function displayMessage() {
  const message = messageInput.value;
  displayField.textContent = message;
}

// Event listener for the button click
displayBtn.addEventListener('click', displayMessage);


