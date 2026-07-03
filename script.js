if(tool === "chat"){
main.innerHTML = `
<h1>🤖 AI Chat</h1>

<div id="chatBox" style="
margin-top:20px;
height:300px;
overflow-y:auto;
background:#1e293b;
padding:15px;
border-radius:10px;
">

<div style="margin-bottom:10px;">
<b>AI:</b> Hello! Ask me something 👋
</div>

</div>

<div style="margin-top:10px;display:flex;gap:10px;">
<input id="userInput" placeholder="Type message..." style="
flex:1;
padding:10px;
border-radius:8px;
border:none;
">

<button onclick="sendMessage()" style="
padding:10px 20px;
background:#38bdf8;
border:none;
border-radius:8px;
cursor:pointer;
">
Send
</button>

</div>
`;
}
function sendMessage(){

let input = document.getElementById("userInput");
let chatBox = document.getElementById("chatBox");

if(input.value.trim() === "") return;

// user message
chatBox.innerHTML += `
<div style="text-align:right;margin:10px 0;">
<b>You:</b> ${input.value}
</div>
`;

// fake AI reply
setTimeout(()=>{
chatBox.innerHTML += `
<div style="margin:10px 0;">
<b>AI:</b> I got it: "${input.value}" 🤖
</div>
`;

chatBox.scrollTop = chatBox.scrollHeight;

},500);

input.value = "";
}