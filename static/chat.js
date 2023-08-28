var fMsg = localStorage.getItem("msg");
var id = localStorage.getItem("id");

function createUserDivWithMessage(message) {
  var msgBox = document.getElementById("chat-box")
  // Create a <div> element with the "user" class
  const userDiv = document.createElement('div');
  userDiv.classList.add('user');

  // Create an <img> element with the "account.png" image source and set attributes
  const imgElement = document.createElement('img');
  imgElement.src = './icons/account.png';
  imgElement.width = '48px';
  imgElement.alt = '';

  // Create a <div> element with the "text" class
  const textDiv = document.createElement('div');
  textDiv.classList.add('text');

  // Create a <p> element with the provided message
  const pElement = document.createElement('p');
  pElement.textContent = message;

  // Append the <p> element to the "text" <div>
  textDiv.appendChild(pElement);

  // Append the <img> element and the "text" <div> to the "user" <div>
  userDiv.appendChild(imgElement);
  userDiv.appendChild(textDiv);

  // Append the "user" <div> to the document body
  msgBox.appendChild(userDiv);

}
function createBotDivWithMessage(message) {
  var msgBox = document.getElementById("chat-box")
  // Create a <div> element with the "user" class
  const userDiv = document.createElement('div');
  userDiv.classList.add('bot');

  // Create an <img> element with the "account.png" image source and set attributes
  const imgElement = document.createElement('img');
  imgElement.src = './icons/magic-wand-black.png';
  imgElement.width = '48px';
  imgElement.alt = '';

  // Create a <div> element with the "text" class
  const textDiv = document.createElement('div');
  textDiv.classList.add('text');

  // Create a <p> element with the provided message
  const pElement = document.createElement('p');
  pElement.textContent = message;

  // Append the <p> element to the "text" <div>
  textDiv.appendChild(pElement);

  // Append the <img> element and the "text" <div> to the "user" <div>
  userDiv.appendChild(imgElement);
  userDiv.appendChild(textDiv);

  // Append the "user" <div> to the document body
  msgBox.appendChild(userDiv);

}
function sendMessage() {
  var msg = document.getElementById("inputMagic").value;
  createUserDivWithMessage(msg);
  document.getElementById("inputMagic").value = "";
}
function clickBack(){
  history.back()
}
createUserDivWithMessage(fMsg);
// createBotDivWithMessage('Testing message');

 fetch(`/chatbot?id=${id}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(fMsg)
})
.then(response => response.json())
.then(data => {
  console.log(data.result);
  createBotDivWithMessage(data.result);
});
