const recordButton = document.querySelector('.voice-record-btn');
let mediaRecorder;
let audioChunks = [];

recordButton.addEventListener('click', toggleRecording);

function toggleRecording() {
  if (mediaRecorder && mediaRecorder.state === 'recording') {
    stopRecording();
  } else {
    startRecording();
  }
}

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        
        mediaRecorder.ondataavailable = (event) => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = sendVoiceMessage;

        mediaRecorder.start();
        recordButton.classList.add('recording');
    } catch(err) {
        console.error("Error accessing microphone:", err);
        alert('Error accessing microphone. Please ensure you have granted microphone permissions.');
    }
}

function stopRecording() {
    if(mediaRecorder){
        mediaRecorder.stop();
        recordButton.classList.remove('recording');
    }
}

function sendVoiceMessage() {
    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
    const formData = new FormData();
    formData.append('audio', audioBlob, 'voice-message.webm');
    formData.append('incoming_id', document.querySelector('.incoming_id').value);

    fetch('php/insert-voice-message.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            // Voice message sent successfully
            audioChunks = [];
            // Trigger chat reload
            updateChat();
        } else {
            console.error('Error sending voice message:', data.error);
            alert('Error sending voice message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error sending voice message. Please try again.');
    });
}

function updateChat() {
    // This function will trigger the chat to update
    // It's similar to the setInterval function in chat.js
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let chatBox = document.querySelector(".chat-box");
                chatBox.innerHTML = xhr.response;
                if(!chatBox.classList.contains("active")){
                    chatBox.scrollTop = chatBox.scrollHeight;
                }
            }
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("incoming_id="+document.querySelector('.incoming_id').value);
}