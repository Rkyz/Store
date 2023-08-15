export const getBotResponse = (userMessage) => {
    const greetings = ['hallo', 'hello', 'halo', 'helo', 'hai', 'hei'];
    const responses = [
        {
            question: 'kenapa belom mengerti',
            answer: 'Saya Juga Tidak Tahu'
        },
        {
            question: 'jam',
            answer: `Sekarang pukul ${new Date().toLocaleTimeString('en-US')}`
        },
        {
            question: 'tanggal',
            answer: `Sekarang tanggal ${new Date().toLocaleDateString('en-US')}`
        },
        {
            question: 'apa yang bisa kamu bantu',
            answer: 'test'
        },
        {
            question: 'top up error',
            answer: 'Jika Anda mengalami kesalahan saat melakukan top up, coba periksa koneksi internet Anda dan pastikan Anda memasukkan detail pembayaran dengan benar.'
        },
        {
            question: 'top up lama',
            answer: 'Jika top up website berlangsung terlalu lama, mungkin ada masalah teknis. Cobalah muat ulang halaman dan cek apakah masalahnya teratasi.'
        },
        {
            question: 'top up belum masuk',
            answer: 'Jika saldo atau top up belum masuk ke akun Anda setelah pembayaran berhasil, silakan tunggu beberapa saat dan periksa kembali. Jika masih belum masuk, hubungi layanan pelanggan kami.'
        },
        {
            question: 'cara top up',
            answer: 'Untuk melakukan top up website, masuk ke akun Anda, pilih opsi top up, lalu ikuti petunjuk yang diberikan untuk memasukkan detail pembayaran.'
        },
        {
            question: 'metode pembayaran top up',
            answer: 'Kami menerima berbagai metode pembayaran untuk top up, termasuk kartu kredit, transfer bank, dan e-wallet. Anda dapat memilih metode yang paling nyaman bagi Anda.'
        },
        {
            question: 'top up minimal',
            answer: 'Top up minimal pada website kami adalah [jumlah]. Anda tidak dapat melakukan top up dengan jumlah di bawah batas tersebut.'
        },
        {
            question: 'lama waktu top up masuk',
            answer: 'Biasanya, saldo atau top up akan masuk dalam beberapa menit setelah pembayaran berhasil. Namun, dalam beberapa kasus tertentu, bisa memakan waktu lebih lama karena proses verifikasi.'
        },
        {
            question: 'top up terkonfirmasi tapi saldo tak bertambah',
            answer: 'Jika pembayaran sudah terkonfirmasi tetapi saldo tidak bertambah, mungkin ada masalah teknis. Harap hubungi tim dukungan kami untuk mendapatkan bantuan lebih lanjut.'
        },
    ];
    

    userMessage = userMessage.toLowerCase();
    let matchedResponse = {
        text: 'Bila Ingin Melihat Command Silahkan Gunakan help',
        sender: 'bot'
    };

    if (userMessage.includes('/')) {
        matchedResponse = {
            text: `Tentu, saya akan mengarahkan Anda ke halaman ${userMessage}`,
            sender: 'bot',
            redirectTo: `${userMessage}`
        };
    } else {
        for (const response of responses) {
            if (userMessage.includes(response.question)) {
                matchedResponse = {
                    text: response.answer,
                    sender: 'bot'
                };
                break;
            }
        }

        for (const greeting of greetings) {
            if (userMessage.includes(greeting)) {
                matchedResponse = {
                    text: `${greeting.charAt(0).toUpperCase() + greeting.slice(1)}, Ada yang bisa dibantu?`,
                    sender: 'bot'
                };
                break;
            }
        }

        if (userMessage.includes('help') || userMessage.includes('bantuan')) {
            const allQuestions = responses.map(response => `- ${response.question}`).join('\n');
            matchedResponse = {
                text: `Untuk Command Kamu Bisa Menggunakan Command Ini:\n${allQuestions}`,
                sender: 'bot'
            };
        }
    }



    return matchedResponse;
};
