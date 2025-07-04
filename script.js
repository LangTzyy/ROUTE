// Data kuis berdasarkan level
const quizData = {

        pelajar: [
        {
            question: "Apa warna dasar bendera Indonesia?",
            options: ["a. Merah dan Putih", "b. Merah dan Kuning", "c. Hijau dan Putih", "d. Biru dan Putih"],
            answer: 0,
            explanation: "Bendera Indonesia terdiri dari dua warna horizontal, yaitu merah di atas dan putih di bawah.",
            correctFeedback: "Warna merah melambangkan keberanian, sedangkan putih melambangkan kesucian dan kejujuran.",
            image: "assets/soalpelajar1.png"
        },
        {
            question: "Hari Kemerdekaan Indonesia diperingati setiap tanggal?",
            options: ["a. 1 Juni", "b. 10 November", "c. 17 Agustus", "d. 28 Oktober"],
            answer: 2,
            explanation: "Hari Kemerdekaan Indonesia diperingati setiap 17 Agustus sejak 1945.",
            correctFeedback: "Proklamasi kemerdekaan Indonesia dibacakan oleh Soekarno pada 17 Agustus 1945.",
            image: "assets/soalpelajar2.png"
        },
        {
            question: "Suku bangsa asli Papua adalah?",
            options: ["a. Suku Betawi", "b. Suku Dayak", "c. Suku Asmat", "d. Suku Bugis"],
            answer: 2,
            explanation: "Suku Asmat adalah salah satu suku asli Papua yang terkenal dengan seni ukirnya.",
            correctFeedback: "Suku Asmat tinggal di wilayah Papua bagian selatan dan dikenal akan budaya ukirnya.",
            image: "assets/soalpelajar3.png"
        },
        {
            question: "Monas berada di kota?",
            options: ["a. Bandung", "b. Jakarta", "c. Surabaya", "d. Medan"],
            answer: 1,
            explanation: "Monumen Nasional (Monas) adalah ikon kota Jakarta yang dibangun untuk mengenang perjuangan bangsa Indonesia.",
            correctFeedback: "Monas berada di Jakarta dan dibangun pada masa Presiden Soekarno.",
            image: "assets/soalpelajar1.png"
        },
        {
            question: "Siapakah presiden kedua Indonesia?",
            options: ["a. B.J. Habibie", "b. Megawati", "c. Soeharto", "d. Gus Dur"],
            answer: 2,
            explanation: "Presiden kedua Indonesia adalah Soeharto, menjabat dari tahun 1967 hingga 1998.",
            correctFeedback: "Soeharto menjabat selama 32 tahun dan dikenal dengan masa Orde Baru.",
            image: "assets/soalpelajar2.png"
        },
        {
            question: "Simbol negara Indonesia adalah?",
            options: ["a. Harimau", "b. Burung Garuda", "c. Singa", "d. Bambu Runcing"],
            answer: 1,
            explanation: "Simbol negara Indonesia adalah Burung Garuda yang menggambarkan ideologi dan jati diri bangsa.",
            correctFeedback: "Burung Garuda memegang pita bertuliskan 'Bhinneka Tunggal Ika'.",
            image: "assets/soalpelajar3.png"
        },
        {
            question: "Siapakah penjajah yang datang ke Indonesia setelah Belanda?",
            options: ["a. Korea", "b. Inggris", "c. Jepang", "d. Thailand"],
            answer: 1,
            explanation: "Setelah Belanda, Inggris sempat menguasai Indonesia pada awal abad ke-19.",
            correctFeedback: "Inggris sempat memerintah di bawah Gubernur Jenderal Thomas Stamford Raffles.",
            image: "assets/soalpelajar1.png"
        },
        {
            question: "Bahasa resmi Indonesia adalah?",
            options: ["a. Bahasa Jawa", "b. Bahasa Sunda", "c. Bahasa Melayu", "d. Bahasa Indonesia"],
            answer: 3,
            explanation: "Bahasa Indonesia ditetapkan sebagai bahasa resmi sejak Sumpah Pemuda 1928.",
            correctFeedback: "Bahasa Indonesia berasal dari bahasa Melayu yang disempurnakan.",
            image: "assets/soalpelajar2.png"
        },
        {
            question: "Hari Pahlawan diperingati setiap?",
            options: ["a. 17 Agustus", "b. 21 April", "c. 10 November", "d. 2 Mei"],
            answer: 2,
            explanation: "Hari Pahlawan diperingati setiap 10 November untuk mengenang Pertempuran Surabaya 1945.",
            correctFeedback: "Pertempuran ini menjadi simbol perjuangan rakyat Indonesia melawan penjajah.",
            image: "assets/soalpelajar3.png"
        },
        {
            question: "Indonesia dijajah oleh negara mana selama ratusan tahun?",
            options: ["a. Jepang", "b. Malaysia", "c. Belanda", "d. Inggris"],
            answer: 2,
            explanation: "Belanda menjajah Indonesia selama lebih dari 300 tahun.",
            correctFeedback: "Penjajahan Belanda berlangsung dari abad ke-17 hingga pertengahan abad ke-20.",
            image: "assets/soalpelajar3.png"
        }
    ],

    mahasiswa: [
        {
            question: "Apa fungsi Mahkamah Konstitusi di Indonesia?",
            options: ["a. Membuat undang-undang", "b. Menangani korupsi", "c. Mengadili sengketa konstitusi", "d. Mengatur kebijakan fiskal"],
            answer: 2,
            explanation: "Mahkamah Konstitusi memiliki kewenangan menguji undang-undang terhadap UUD 1945 dan menyelesaikan sengketa kewenangan lembaga negara.",
            correctFeedback: "MK juga memutus pembubaran partai politik dan perselisihan hasil pemilu.",
            image: "assets/soalmahasiswa1.png"
        },
        {
            question: "UUD 1945 disahkan pertama kali pada?",
            options: ["a. 17 Agustus 1945", "b. 18 Agustus 1945", "c. 1 Juni 1945", "d. 27 Oktober 1945"],
            answer: 1,
            explanation: "UUD 1945 disahkan oleh PPKI pada 18 Agustus 1945 sehari setelah Proklamasi.",
            correctFeedback: "PPKI juga menetapkan Soekarno dan Hatta sebagai Presiden dan Wakil Presiden.",
            image: "assets/soalmahasiswa2.png"
        },
        {
            question: "Apa penyebab utama dimulainya perlawanan rakyat terhadap penjajah Belanda pada abad ke-19?",
            options: ["a. Kenaikan pajak tanah", "b. Kebijakan tanam paksa", "c. Masuknya Jepang ke Indonesia", "d. Larangan menggunakan bahasa daerah"],
            answer: 1,
            explanation: "Kebijakan tanam paksa membuat rakyat menderita karena lahan pertanian mereka dipaksa untuk menanam komoditas ekspor.",
            correctFeedback: "Tanam paksa dimulai pada 1830 oleh Gubernur Jenderal Van den Bosch.",
            image: "assets/soalmahasiswa3.png"
        },
        {
            question: "Organisasi pergerakan nasional pertama yang berdiri pada tahun 1908 adalah...",
            options: ["a. Sarekat Islam", "b. Budi Utomo", "c. PNI", "d. Taman Siswa"],
            answer: 1,
            explanation: "Budi Utomo berdiri pada 20 Mei 1908 dan menjadi tonggak kebangkitan nasional.",
            correctFeedback: "Tanggal berdirinya Budi Utomo diperingati sebagai Hari Kebangkitan Nasional.",
            image: "assets/soalmahasiswa1.png"
        },
        {
            question: "Konferensi Asia Afrika 1955 diadakan di kota?",
            options: ["a. Yogyakarta", "b. Jakarta", "c. Bandung", "d. Surabaya"],
            answer: 2,
            explanation: "Konferensi Asia Afrika digelar di Bandung pada tahun 1955 untuk mempererat solidaritas negara-negara berkembang.",
            correctFeedback: "Konferensi ini dihadiri oleh 29 negara dan melahirkan Dasasila Bandung.",
            image: "assets/soalmahasiswa2.png"
        },
        {
            question: "Siapakah penulis naskah proklamasi kemerdekaan?",
            options: ["a. Moh. Hatta", "b. Soekarno", "c. Ahmad Subardjo", "d. Sutan Sjahrir"],
            answer: 2,
            explanation: "Ahmad Subardjo adalah tokoh yang menulis konsep naskah proklamasi kemerdekaan Indonesia.",
            correctFeedback: "Soekarno kemudian membacakan naskah tersebut pada 17 Agustus 1945.",
            image: "assets/soalmahasiswa3.png"
        },
        {
            question: "Apa nama sidang yang melahirkan Pancasila?",
            options: ["a. BPUPKI", "b. PPKI", "c. KNIP", "d. MPRS"],
            answer: 0,
            explanation: "Pancasila pertama kali dikemukakan dalam sidang BPUPKI pada 1 Juni 1945 oleh Soekarno.",
            correctFeedback: "BPUPKI adalah badan bentukan Jepang untuk mempersiapkan kemerdekaan Indonesia.",
            image: "assets/soalmahasiswa1.png"
        },
        {
            question: "Siapa tokoh yang menulis buku ''Max Havelaar'' untuk mengkritik kebijakan tanam paksa di Indonesia?",
            options: ["a. Douwes Dekker", "b. R.A. Kartini", "c. Van Deventer", "d. Multatuli"],
            answer: 3,
            explanation: "Max Havelaar ditulis oleh Multatuli untuk mengkritik ketidakadilan kolonial Belanda.",
            correctFeedback: "Buku ini menjadi simbol perlawanan terhadap kolonialisme dan eksploitasi.",
            image: "assets/soalmahasiswa2.png"
        },
        {
            question: "Siapa tokoh reformasi Indonesia tahun 1998?",
            options: ["a. B.J. Habibie", "b. Soeharto", "c. Megawati", "d. Amien Rais"],
            answer: 3,
            explanation: "Amien Rais dikenal sebagai tokoh utama dalam gerakan reformasi 1998 yang menumbangkan rezim Orde Baru.",
            correctFeedback: "Reformasi 1998 menuntut demokratisasi dan pemberantasan korupsi.",
            image: "assets/soalmahasiswa3.png"
        },
        {
            question: "Apa nama sistem pemerintahan Indonesia?",
            options: ["a. Monarki Parlementer", "b. Demokrasi Liberal", "c. Republik Presidensial", "d. Federal"],
            answer: 2,
            explanation: "Indonesia menganut sistem republik presidensial di mana presiden adalah kepala negara sekaligus kepala pemerintahan.",
            correctFeedback: "Presiden dipilih langsung oleh rakyat dan tidak bertanggung jawab kepada DPR.",
            image: "assets/soalmahasiswa1.png"
        }
    ]
};

// Variabel game
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let timer;
let timeLeft = 30;
let questions = [];
let level = '';
let username = localStorage.getItem('playerName') || 'Player';
let userAnswers = []; // Tambahan variabel untuk menyimpan jawaban

// Elemen DOM
const quizScreen = document.getElementById('quizScreen');
const winScreen = document.getElementById('winScreen');
const correctFeedback = document.getElementById('correctFeedback');

// Quiz Screen
const quizUsername = document.getElementById('quizUsername');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const currentQuestionDisplay = document.getElementById('currentQuestion');
const totalQuestionsDisplay = document.getElementById('totalQuestions');
const scoreDisplay = document.getElementById('scoreDisplay');
const quizProgress = document.getElementById('quizProgress');
const timerDisplay = document.getElementById('timer');
const levelIndicator = document.getElementById('levelIndicator');
const currentLevel = document.getElementById('currentLevel');

// Feedback Screen elements
const userAnswerText = document.getElementById('userAnswerText');
const explanationText = document.getElementById('explanationText');
const correctAnswerText = document.getElementById('correctAnswerText');
const correctAnswerTitle = document.getElementById('correctAnswerTitle');
const correctExplanationText = document.getElementById('correctExplanationText');
const additionalInfoText = document.getElementById('additionalInfoText');
const nextFromWrong = document.getElementById('nextFromWrong');
const nextFromCorrect = document.getElementById('nextFromCorrect');

// Event Listeners
nextFromWrong.addEventListener('click', () => {
    wrongFeedback.classList.remove('active');
    proceedToNextQuestion();
});

nextFromCorrect.addEventListener('click', () => {
    correctFeedback.classList.remove('active');
    proceedToNextQuestion();
});

// Ambil parameter level dari URL
const urlParams = new URLSearchParams(window.location.search);
const selectedLevel = urlParams.get('level');

// Jika level valid, mulai game
if (selectedLevel === 'pelajar' || selectedLevel === 'mahasiswa') {
    startGame(selectedLevel);
}


window.addEventListener('load', () => {
    quizScreen.classList.remove('hidden');
});

// Fungsi untuk memulai game berdasarkan level
function startGame(selectedLevel) {
    if (!selectedLevel || !quizData[selectedLevel]) {
        console.error("Level tidak valid atau tidak ditemukan");
        return;
    }
    level = selectedLevel;
    quizScreen.classList.toggle('hidden');
    
    // Set username di quiz screen
    quizUsername.textContent = username;
    
    // Set level indicator
    currentLevel.textContent = `Level: ${level === 'pelajar' ? 'Pelajar' : 'Mahasiswa'}`;
    levelIndicator.className = `level-indicator ${level}`;
    
    // Inisialisasi kuis
    initializeQuiz();
}

// Inisialisasi kuis
function initializeQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedOption = null;
    timeLeft = 30;

    const allQuestions = [...quizData[level]];
    questions = allQuestions.sort(() => Math.random() - 0.5);
    userAnswers = Array(questions.length).fill(null);  // inisialisasi di sini

    totalQuestionsDisplay.textContent = questions.length;
    scoreDisplay.textContent = '0';

    loadQuestion();
}

// Muat pertanyaan
function loadQuestion() {
    resetOptions();
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    currentQuestionDisplay.textContent = currentQuestion + 1;
    quizProgress.style.width = `${(currentQuestion / questions.length) * 100}%`;

    // Update gambar sesuai soal
    document.getElementById('soekarnoImage').src = question.image;
    
    // Kosongkan container opsi
    optionsContainer.innerHTML = '';
    
    // Tambahkan opsi jawaban
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption);
        optionsContainer.appendChild(optionElement);
    });

    // Mulai timer
    startTimer();
}

// Pilih opsi jawaban
function selectOption(e) {
    if (userAnswers[currentQuestion] !== null) return;
    
    const selectedIndex = parseInt(e.target.dataset.index);
    selectedOption = selectedIndex;
    userAnswers[currentQuestion] = selectedIndex;
    
    // Tampilkan opsi yang dipilih
    e.target.classList.add('selected');
    
    // Periksa jawaban
    const isCorrect = selectedIndex === questions[currentQuestion].answer;
    
    if (isCorrect) {
        e.target.classList.add('correct');
        // Hitung skor berdasarkan level
        score += 10;
        scoreDisplay.textContent = score;
        showCorrectFeedback();
    } else {
        e.target.classList.add('wrong');
        // Kurangi skor sebanyak 10 poin jika salah
        score = Math.max(0, score - 10);
        scoreDisplay.textContent = score;
        // Tambahkan efek visual
        scoreDisplay.classList.add('score-decrease');
        setTimeout(() => scoreDisplay.classList.remove('score-decrease'), 500);
        // Tampilkan jawaban yang benar
        showWrongFeedback();
    }
    
    // Nonaktifkan semua opsi setelah memilih
    document.querySelectorAll('.option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    
    // Hentikan timer
    clearInterval(timer);
}

// Tampilkan feedback jawaban salah
function showWrongFeedback() {
    const question = questions[currentQuestion];
    const selectedOptionText = question.options[userAnswers[currentQuestion]]; // Tetap pakai a. b. c.
    const correctOptionText = question.options[question.answer];

    // Jawaban yang dipilih user
    userAnswerText.textContent = selectedOptionText;

    // Label "explanation / penjelasan"
    explanationText.innerHTML = `<span style="font-style: italic; font-weight: bold; font-size: 1.8rem; display: inline-block; margin-top: 1rem;">explanation / penjelasan</span>`;

    // Gabungan kalimat penjelasan (bawah label)
    correctAnswerText.innerHTML = `
        Oh no jawaban kamu salah, yang benar adalah <u style="font-weight: bold;">${correctOptionText}</u>. 
        ${question.explanation} ${question.correctFeedback}
    `;

    // Tampilkan layar feedback
    quizScreen.classList.add('hidden');
    wrongFeedback.classList.add('active');
}


// Tampilkan feedback jawaban benar
function showCorrectFeedback() {
    const question = questions[currentQuestion];
    const correctOptionText = question.options[question.answer]; // Contoh: "c. Ahmad Subardjo"

    // Tampilkan jawaban di atas dengan efek putih + shadow hijau muda
    correctAnswerTitle.innerHTML = `
        <span style="
            color: white;
            font-weight: bold;
            font-size: 2rem;
            text-shadow: 0 0 10px #C0FFB6;
        ">
            ${correctOptionText}
        </span>
    `;

    // Label "explanation / penjelasan"
    correctExplanationText.innerHTML = `
        <span style="
            font-style: italic;
            font-size: 1.8rem;
            color: white;
        ">
            explanation / penjelasan
        </span>
    `;

    // Paragraf penjelasan lengkap dengan jawaban benar digarisbawahi
    additionalInfoText.innerHTML = `
        <span style="
            font-size: 1.2rem;
            font-weight: 600;
            color: white;
            display: block;
            margin-top: 10px;
        ">
            cakep, <u>${correctOptionText}</u> ${question.explanation} ${question.correctFeedback}
        </span>
    `;

    // Tampilkan layar feedback
    quizScreen.classList.add('hidden');
    correctFeedback.classList.add('active');
}



// Lanjut ke pertanyaan berikutnya
function proceedToNextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
        quizScreen.classList.remove('hidden');
    } else {
        finishQuiz();
    }
}

// Reset opsi jawaban
function resetOptions() {
    optionsContainer.innerHTML = '';
    selectedOption = null;
    timeLeft = 30;
    timerDisplay.textContent = timeLeft;
}

// Timer
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (currentQuestion < questions.length - 1) {
                proceedToNextQuestion();
            } else {
                finishQuiz();
            }
        }
    }, 1000);
}

// Selesai kuis
function finishQuiz() {
    quizScreen.classList.add('hidden');

    // Simpan skor & nama ke localStorage agar bisa ditampilkan di halaman hasil
    localStorage.setItem('finalScore', score);
    localStorage.setItem('finalLevel', level);
    localStorage.setItem('finalUsername', username);

    // Redirect ke halaman hasil
    if (score >= 70) {
        window.location.href = "Game/hasil1.html";
    } else {
        window.location.href = "Game/hasil2.html";
    }
}
