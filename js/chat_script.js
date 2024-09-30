document.addEventListener('DOMContentLoaded', () => {
    const chatList = document.querySelector('.chat-items');
    const messagesContainer = document.querySelector('.messages');
    const messageInput = document.querySelector('.message-input input');
    const sendButton = document.querySelector('.send-btn');
    lucide.createIcons();
    // Simula data del chat
    const chats = [
        { id: 1, name: 'ChangoBot', avatar: '../components/img/Chat/botvioleta.png', lastMessage: 'Hola! necesitas ayuda?', time: '11:30 AM' },
        { id: 2, name: 'Arturo Pug', avatar: '../components/img/Profile/Outer.jpg', lastMessage: 'Hello there!', time: '10:30 AM' },
        { id: 3, name: 'Akira Jones', avatar: '../components/img/Chat/akira.jpg', lastMessage: 'How are you?', time: '9:45 AM' },
        { id: 4, name: 'Michael Brown', avatar: '../components/img/Chat/Ellipse.png', lastMessage: 'Good morning!', time: '8:20 AM' },
        // Add more chat items as needed
    ];

    // Render chat list
    function renderChatList() {
        chatList.innerHTML = chats.map(chat => `
            <div class="chat-item" data-id="${chat.id}">
                <img src="${chat.avatar}" alt="${chat.name}" class="img-fluid">
                <div class="chat-info">
                    <div class="name">${chat.name}</div>
                    <div class="last-message">${chat.lastMessage}</div>
                </div>
                <div class="time">${chat.time}</div>
            </div>
        `).join('');
    }

    // Simula los mensajes en el chat
    const messages = [
        { id: 1, sender: 'Leslie Alexander', content: 'Hola!', timestamp: '10:30', type: 'received' },
        { id: 2, sender: 'You', content: 'Hola Arturo!', timestamp: '10:31', type: 'sent' },
        // Add more messages as needed
    ];

    // Render mensajes
    function renderMessages() {
        messagesContainer.innerHTML = messages.map(message => `
            <div class="message ${message.type}">
                <div class="content">${message.content}</div>
                <div class="timestamp">${message.timestamp}</div>
            </div>
        `).join('');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // manda mensajes
    function sendMessage() {
        const content = messageInput.value.trim();
        if (content) {
            messages.push({
                id: messages.length + 1,
                sender: 'You',
                content: content,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                type: 'sent'
            });
            renderMessages();
            messageInput.value = '';
        }
    }

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Initial render
    renderChatList();
    renderMessages();

    // In a real application, you would connect to a Node.js backend here
    // using WebSockets or Server-Sent Events for real-time communication
    // Example using Socket.io:
    // 
    // const socket = io('http://localhost:3000');
    // 
    // socket.on('new message', (message) => {
    //     messages.push(message);
    //     renderMessages();
    // });
    // 
    // function sendMessage() {
    //     // ... existing code ...
    //     socket.emit('send message', { content: content });
    // }
});