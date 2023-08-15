export const getBotResponse = (userMessage) => {
    let botResponse = {
        text: 'Bila Ingin Melihat Command Silahkan Gunakan help',
        sender: 'bot'
    };

    if (userMessage.includes('kenapa belom mengerti')) {
        botResponse = {
            text: 'Saya Juga Tidak Tahu',
            sender: 'bot'
        };
    }else if (userMessage.includes('jam') || (userMessage.includes('time'))) {
        const currentTime = new Date().toLocaleTimeString('en-US');
        botResponse = {
            text: `Sekarang pukul ${currentTime}`,
            sender: 'bot'
        };
    } else if (userMessage.includes('tanggal') || (userMessage.includes('date'))) {
        const currentDate = new Date().toLocaleDateString('en-US');
        botResponse = {
            text: `Sekarang tanggal ${currentDate}`,
            sender: 'bot'
        };
    }if (userMessage.includes('hallo') || userMessage.includes('hello') || userMessage.includes('halo') || userMessage.includes('helo') || userMessage.includes('hai') || userMessage.includes('hei')) {
        const greetings = [userMessage];
        let matchedGreeting = '';
    
        for (const greeting of greetings) {
            if (userMessage.includes(greeting)) {
                matchedGreeting = greeting;
                break;
            }
        }
        botResponse = {
            text: `${matchedGreeting.charAt(0).toUpperCase() + matchedGreeting.slice(1)}, Ada yang bisa dibantu?`,
            sender: 'bot'
        };
    }else if (userMessage.includes('help') || userMessage.includes('bantuan')) {
        botResponse = {
            text: 'Untuk Command Kamu Bisa Menggunakan Command Ini',
            sender: 'bot'
        };
    }else if (userMessage.includes('apa yang bisa kamu bantu') || userMessage.includes('apa yg bisa kamu bantu') || userMessage.includes('bantuan apa')) {
        botResponse = {
            text: 'test',
            sender: 'bot'
        };
    }

    
    

    return botResponse;
};
