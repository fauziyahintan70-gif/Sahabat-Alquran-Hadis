/*************************************************
 SAHABAT AL-QUR'AN & HADIS
 script.js
 Versi 1.0
**************************************************/

//==========================
// VARIABEL
//==========================

let currentNode = "N1";

const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");
const typing = document.getElementById("typing");


//==========================
// JAM CHAT
//==========================

function getTime(){

    const now = new Date();

    let hour = now.getHours().toString().padStart(2,"0");
    let minute = now.getMinutes().toString().padStart(2,"0");

    return hour + ":" + minute;

}


//==========================
// AUTO SCROLL
//==========================

function scrollBottom(){

    chatBox.scrollTop = chatBox.scrollHeight;

}


//==========================
// BUBBLE BOT
//==========================

function botMessage(text){

    const div = document.createElement("div");

    div.className = "message bot";

    div.innerHTML =

    `
        ${text}

        <div style="
        font-size:11px;
        color:#777;
        margin-top:6px;
        text-align:right;">
        ${getTime()}
        </div>
    `;

    chatBox.appendChild(div);

    scrollBottom();

}


//==========================
// BUBBLE USER
//==========================

function userMessage(text){

    const div = document.createElement("div");

    div.className = "message user";

    div.innerHTML =

    `
        ${text}

        <div style="
        font-size:11px;
        color:#555;
        margin-top:6px;
        text-align:right;">
        ${getTime()}
        </div>
    `;

    chatBox.appendChild(div);

    scrollBottom();

}


//==========================
// TYPING BOT
//==========================

function showTyping(){

    typing.classList.remove("hidden");

    scrollBottom();

}

function hideTyping(){

    typing.classList.add("hidden");

}


//==========================
// AMBIL NODE
//==========================

function getNode(){

    return nodes[currentNode];

}


//==========================
// TAMPILKAN STIMULUS
//==========================

function showStimulus(){

    const node = getNode();

    showTyping();

    setTimeout(function(){

        hideTyping();

        botMessage(node.stimulus);

    },900);

}


//==========================
// MULAI CHATBOT
//==========================

window.onload = function(){

    showStimulus();

};
//==========================
// CLASSIFIER YANG LEBIH FLEKSIBEL
//==========================

function classifyAnswer(message){

    const node = getNode();

    const text = message.toLowerCase().trim();

    // Hilangkan tanda baca
    const cleanText = text
        .replace(/[.,!?;:()]/g," ")
        .replace(/\s+/g," ")
        .trim();

    for(const category in node.classify){

        const keywords = node.classify[category];

        for(const keyword of keywords){

            const key = keyword.toLowerCase();

            // Cocok persis
            if(cleanText.includes(key)){
                return category;
            }

            // Cocok per kata
            const words = key.split(" ");

            let cocok = 0;

            for(const word of words){

                if(cleanText.includes(word)){
                    cocok++;
                }

            }

            // Jika lebih dari setengah kata cocok
            if(cocok >= Math.ceil(words.length/2)){
                return category;
            }

        }

    }

    return node.defaultCategory;

}



//==========================
// KIRIM PESAN
//==========================

function sendMessage(){

    const text = input.value.trim();

    if(text==="") return;

    userMessage(text);

    clearInput();

    processAnswer(text);

}

//==========================
// EVENT TOMBOL KIRIM
//==========================

sendButton.addEventListener("click", function () {
    sendMessage();
});


//==========================
// ENTER = KIRIM
//==========================

input.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        sendMessage();

    }

});


//==========================
// RESET INPUT
//==========================

function clearInput() {

    input.value = "";

    input.focus();

}


//==========================
// VALIDASI NODE
//==========================

function nodeExists(nodeId) {

    return nodes.hasOwnProperty(nodeId);

}


//==========================
// PINDAH KE NODE BERIKUTNYA
//==========================

function gotoNode(nodeId){

    if(!nodes[nodeId]){

        botMessage("🎉 Alhamdulillah, pembelajaran selesai.");
        return;

    }

    currentNode = nodeId;

    showTyping();

    setTimeout(function(){

        hideTyping();

        showStimulus();

    },1200);

}


//==========================
// REVISI PROCESS ANSWER
//==========================

function processAnswer(answer) {

    const node = getNode();

    const category = classifyAnswer(answer);

    const feedback = node.responses[category];

    showTyping();

    setTimeout(function () {

        hideTyping();

        botMessage(feedback.text);

        if (feedback.next) {

            gotoNode(feedback.next);

        }

    }, 900);

}