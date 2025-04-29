    document.getElementById("send-button").addEventListener("click" , function() {

    const inputField = document.getElementById("user-input");
    const userMessage = inputField.ariaValueMax.trim();

    if (userMessage !== ""){
    const userMessage = inputField.ariaValueMax.trim();

    const messageElement = document.createElement("p");
    messageElement.textContent = "You: " + userMessage;

    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;


    inputField.value = "";

    }


}); 