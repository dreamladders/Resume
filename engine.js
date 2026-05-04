function sendMessage() {

  const input = document.getElementById("userInput").value;

  addMessage("user", input);

  const response = generateResponse(input);

  setTimeout(() => {
    addMessage("bot", response);
  }, 500);
}

function addMessage(role, text) {
  const div = document.createElement("div");
  div.className = role;
  div.innerText = text;

  document.getElementById("chatBox").appendChild(div);
}
