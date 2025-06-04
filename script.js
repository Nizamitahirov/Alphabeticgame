document.addEventListener('DOMContentLoaded', () => {
    // --- GENİŞ SUALLAR BAZASI (NÜMUNƏ - 300-ə qədər genişləndirin) ---
    const allQuestionsPool = [
        // Ev Əşyaları
        { category: "Ev Əşyaları", question: "Qonaq otağında olan bir mebel.", example_ideas: ["divan", "kreslo", "stol", "televizor altlığı", "kitab rəfi", "pərdə", "xalça"] },
        { category: "Ev Əşyaları", question: "Yataq otağında istifadə edilən bir şey.", example_ideas: ["yataq", "dolab", "güzgü", "gecə lampası", "yastıq", "ədyal", "komod"] },
        { category: "Ev Əşyaları", question: "Hamam otağında olan bir ləvazimat.", example_ideas: ["sabun", "şampun", "dəsmal", "diş fırçası", "fen", "lif", "tarak"] },
        { category: "Ev Əşyaları", question: "Təmizlik üçün istifadə edilən vasitə.", example_ideas: ["süpürgə", "tozsoran", "bez", "maye sabun", "fırça", "vedrə", "əlcək"] },
        { category: "Ev Əşyaları", question: "Balkonda ola biləcək bir əşya.", example_ideas: ["stul", "gül dibçəyi", "kiçik masa", "asılqan", "skamya", "şezlonq"] },
        { category: "Ev Əşyaları", question: "Mətbəxdə yemək bişirmək üçün alət.", example_ideas: ["qazan", "tava", "bıçaq", "blender", "mikser", "süzgəc"] },
        { category: "Ev Əşyaları", question: "İşıqlandırma üçün istifadə olunan.", example_ideas: ["lampa", "çılçıraq", "bra", "projektor", "fənər"] },
        { category: "Ev Əşyaları", question: "Pəncərədə istifadə olunan bir şey.", example_ideas: ["pərdə", "jalüz", "şüşə", "pəncərəaltı", "tor"] },
        { category: "Ev Əşyaları", question: "Divardan asılan bir dekorasiya.", example_ideas: ["şəkil", "saat", "güzgü", "xalça (kiçik)", "pano"] },
        { category: "Ev Əşyaları", question: "Yemək masasında olan bir şey.", example_ideas: ["boşqab", "stəkan", "qaşıq", "çəngəl", "salat qabı", "süfrə"] },
        // ... 10 ədəd Ev Əşyaları (daha 10-20 ədəd əlavə edin)

        // Heyvanlar
        { category: "Heyvanlar", question: "Evdə saxlanıla bilən bir heyvan.", example_ideas: ["pişik", "it", "quş", "balıq", "hamster", "dovşan", "tısbağa"] },
        { category: "Heyvanlar", question: "Afrikada yaşayan bir vəhşi heyvan.", example_ideas: ["şir", "fil", "zürafə", "zebra", "kərgədan", "begemot", "leopard"] },
        { category: "Heyvanlar", question: "Uça bilən bir canlı.", example_ideas: ["quş", "yarasa", "kəpənək", "arı", "ağcaqanad", "göyərçin", "qartal"] },
        { category: "Heyvanlar", question: "Suda yaşayan bir məməli.", example_ideas: ["balina", "delfin", "suiti", "dəniz donuzu", "dəniz şiri"] },
        { category: "Heyvanlar", question: "Sürünən bir heyvan.", example_ideas: ["ilan", "timsah", "kərtənkələ", "tısbağa", "buqələmun"] },
        { category: "Heyvanlar", question: "Meşədə yaşayan bir gəmirici.", example_ideas: ["sincab", "siçan (çöl)", "dələ", "kirpi (qismən)", "gəmirici porsuq"] },
        { category: "Heyvanlar", question: "Çox hündür boylu bir heyvan.", example_ideas: ["zürafə", "fil (Asiya)", "dəvəquşu"] },
        { category: "Heyvanlar", question: "Qış yuxusuna gedən bir heyvan.", example_ideas: ["ayı", "porsuq", "yarasa (bəzi növləri)", "ilan (soyuq havada)", "kirpi"] },
        { category: "Heyvanlar", question: "Zəhərli bir həşərat.", example_ideas: ["arı (bəzi insanlar üçün)", "eşşəkarısı", "əqrəb", "qaraqurd (hörümçək)"] },
        { category: "Heyvanlar", question: "Çöldə yaşayan bir quş.", example_ideas: ["sərçə", "qarğa", "bildirçin", "kəklik", "turac"] },
        // ... 10 ədəd Heyvanlar (daha 20-30 ədəd əlavə edin)

        // Peşələr
        { category: "Peşələr", question: "Sənət sahəsində bir peşə.", example_ideas: ["rəssam", "musiqiçi", "aktyor", "heykəltaraş", "dizayner", "yazıçı", "rejissor"] },
        { category: "Peşələr", question: "Elmlə məşğul olan bir insan.", example_ideas: ["alim", "fizik", "kimyaçı", "bioloq", "astronom", "arxeoloq", "geoloq"] },
        // ... (Digər kateqoriyalar və suallar əvvəlki cavabdakı kimi genişləndirilməlidir)
        // ... Hədəf 300 sual və hər biri üçün "example_ideas"
    ];

    const sampleVocabulary = { /* ... əvvəlki lüğətiniz (genişləndirilmiş) ... */
        A: ["alma", "armud", "avtobus", "ayı", "ana", "açıqca", "aş", "ad", "alim", "aktyor", "astronom", "araba", "arxeoloq", "asılqan", "ağac", "ağcaqanad", "ayran"],
        B: ["banan", "balıq", "bıçaq", "bina", "bağ", "böyük", "balaca", "boşqab", "basketbol", "bioloq", "bənna", "balina", "bazar", "balkon", "bra", "blender", "bez", "bildirçin", "buqələmun", "badambura"],
        // ... (bütün hərflər üçün lüğəti MÜTLƏQ genişləndirin)
    };

    const AZERBAIJANI_ALPHABET = Object.keys(sampleVocabulary).filter(letter => sampleVocabulary[letter] && sampleVocabulary[letter].length > 0);
    const QUESTIONS_PER_PLAYER = 25;
    const DEFAULT_ANSWER_TIME_LIMIT = 10; // Saniyə (admin dəyişə bilər)
    const FEEDBACK_DISPLAY_TIME = 1500;
    const LEADERBOARD_KEY = 'harfSehrbaziLeaderboardV4';

    let adminSetAnswerTimeLimit = DEFAULT_ANSWER_TIME_LIMIT; // Adminin təyin etdiyi vaxt
    let currentPlayerName = '';
    let selectedLetter = '';
    let score = 0;
    let currentQuestion = null;
    let questionsAskedThisPlayerGame = 0;
    let feedbackTimeoutId = null;
    let answerTimerId = null;
    let timeLeftForAnswer = 0;

    let globallyUsedQuestions = new Set();
    let questionsForCurrentPlayer = [];

    // DOM Elementləri
    const initialSetupArea = document.getElementById('initial-setup-area'); // YENİ
    const playerNameInput = document.getElementById('player-name-input');
    const timerSettingInput = document.getElementById('timer-setting-input'); // YENİ
    const startPlayerGameBtn = document.getElementById('start-player-game-btn');
    // ... (qalan DOM elementləri əvvəlki kimi)
    const currentPlayerNameDisplayLetter = document.getElementById('current-player-name-display-letter');
    const currentPlayerNameDisplayGame = document.getElementById('current-player-name-display-game');
    const letterSelectionArea = document.getElementById('letter-selection-area');
    const letterButtonsContainer = document.getElementById('letter-buttons');
    const gameArea = document.getElementById('game-area');
    const chosenLetterDisplay = document.getElementById('chosen-letter-display');
    const scoreDisplay = document.getElementById('score-display');
    const questionCountDisplay = document.getElementById('question-count-display');
    const totalQuestionsPerPlayerDisplay = document.getElementById('total-questions-per-player');
    const timerDisplay = document.getElementById('timer-display');
    const categoryDisplay = document.getElementById('category-display');
    const questionText = document.getElementById('question-text');
    const adminPanel = document.getElementById('admin-panel');
    const reminderLetterAdmin = document.getElementById('reminder-letter-admin');
    const toggleExamplesBtn = document.getElementById('toggle-examples-btn');
    const exampleAnswersArea = document.getElementById('example-answers-area');
    const exampleAnswersList = document.getElementById('example-answers-list');
    const exampleLetterPlaceholder = document.getElementById('example-letter-placeholder');
    const noExamplesMessage = document.getElementById('no-examples-message');
    const adminCorrectBtn = document.getElementById('admin-correct-btn');
    const adminIncorrectBtn = document.getElementById('admin-incorrect-btn');
    const adminEndPlayerGameBtn = document.getElementById('admin-end-player-game-btn');
    const feedbackMessageArea = document.getElementById('feedback-message-area');
    const feedbackMessage = document.getElementById('feedback-message');
    const playerGameOverArea = document.getElementById('player-game-over-area');
    const playerNameGameOver = document.getElementById('player-name-game-over');
    const finalPlayerScoreDisplay = document.getElementById('final-player-score');
    const nextPlayerBtn = document.getElementById('next-player-btn');
    const showLeaderboardBtn = document.getElementById('show-leaderboard-btn');
    const leaderboardArea = document.getElementById('leaderboard-area');
    const leaderboardTableBody = document.querySelector('#leaderboard-table tbody');
    const backToPlayerNameBtn = document.getElementById('back-to-player-name-btn');
    const clearLeaderboardBtn = document.getElementById('clear-leaderboard-btn');
    const copyrightYearSpan = document.getElementById('copyright-year');


    function initGameSetup() {
        totalQuestionsPerPlayerDisplay.textContent = QUESTIONS_PER_PLAYER;
        createLetterButtons();
        if (copyrightYearSpan) {
            copyrightYearSpan.textContent = new Date().getFullYear();
        }
        showScreen('initial-setup'); // İlkin ayarlar ekranı ilə başla
    }

    function showScreen(screenName) {
        initialSetupArea.classList.add('hidden'); // YENİ
        letterSelectionArea.classList.add('hidden');
        gameArea.classList.add('hidden');
        playerGameOverArea.classList.add('hidden');
        leaderboardArea.classList.add('hidden');

        if (screenName === 'initial-setup') initialSetupArea.classList.remove('hidden'); // YENİ
        else if (screenName === 'letter-selection') letterSelectionArea.classList.remove('hidden');
        else if (screenName === 'game') gameArea.classList.remove('hidden');
        else if (screenName === 'player-game-over') playerGameOverArea.classList.remove('hidden');
        else if (screenName === 'leaderboard') {
            leaderboardArea.classList.remove('hidden');
            displayLeaderboard();
        }
    }

    startPlayerGameBtn.addEventListener('click', () => {
        const name = playerNameInput.value.trim();
        const timerValue = parseInt(timerSettingInput.value, 10);

        if (!name) {
            alert("Zəhmət olmasa, oyunçu adını daxil edin.");
            return;
        }
        if (isNaN(timerValue) || timerValue < 3) { // Minimum 3 saniyə
            alert("Zəhmət olmasa, hər sual üçün düzgün vaxt daxil edin (minimum 3 saniyə).");
            return;
        }

        currentPlayerName = name;
        adminSetAnswerTimeLimit = timerValue; // Adminin təyin etdiyi vaxtı qlobal olaraq saxla

        currentPlayerNameDisplayLetter.textContent = currentPlayerName;
        currentPlayerNameDisplayGame.textContent = currentPlayerName;
        // playerNameInput.value = ''; // Ad inputunu növbəti oyunçu üçün boşaltmayaq, çünki ilkin setup bir dəfə olur.
                                      // Növbəti oyunçu düyməsi basıldıqda yenidən bu ekrana qayıdılacaq.
        prepareQuestionsForCurrentPlayer();
        showScreen('letter-selection');
    });

    function prepareQuestionsForCurrentPlayer() {
        questionsForCurrentPlayer = [];
        let availablePool = allQuestionsPool.filter(q => !globallyUsedQuestions.has(q.question));

        if (availablePool.length < QUESTIONS_PER_PLAYER) {
            console.warn("Xəbərdarlıq: Unikal sual sayı azdır. Təkrarlanma ola bilər.");
            // Əgər unikal sual bitibsə, bütün hovuzdan yenidən təsadüfi seçirik
            // Bu zaman globallyUsedQuestions-u nəzərə almırıq ki, oyun davam etsin
            let tempPool = shuffleArray([...allQuestionsPool]);
             for(let i = 0; i < QUESTIONS_PER_PLAYER; i++){
                if(tempPool.length > 0){
                    let questionToAdd = tempPool.pop();
                    questionsForCurrentPlayer.push(questionToAdd);
                    // Hətta təkrarlanan sual olsa belə, bu oyunçu üçün istifadə edildiyini qeyd edək.
                    // Amma qlobal istifadəyə əlavə etməyək ki, digər oyunçulara da gələ bilsin.
                } else {
                    // Əgər bütün hovuzda belə sual qalmayıbsa (çox kiçik hovuz)
                    alert("Sual hovuzunda kifayət qədər sual yoxdur!");
                    showScreen('initial-setup'); // Oyunu başa qaytar
                    return;
                }
            }
        } else {
             availablePool = shuffleArray(availablePool);
             for (let i = 0; i < QUESTIONS_PER_PLAYER; i++) {
                const questionToAdd = availablePool[i];
                questionsForCurrentPlayer.push(questionToAdd);
                globallyUsedQuestions.add(questionToAdd.question); // Qlobal istifadəyə əlavə et
            }
        }
        // questionsForCurrentPlayer massivini yenidən qarışdıraq ki, suallar həmişə eyni ardıcıllıqda gəlməsin
        questionsForCurrentPlayer = shuffleArray(questionsForCurrentPlayer);
    }


    function createLetterButtons() {
        // ... (əvvəlki kimi)
        letterButtonsContainer.innerHTML = '';
        AZERBAIJANI_ALPHABET.forEach(letter => {
            if (sampleVocabulary[letter] && sampleVocabulary[letter].length > 0) {
                const button = document.createElement('button');
                button.textContent = letter;
                button.addEventListener('click', () => selectLetterForPlayer(letter));
                letterButtonsContainer.appendChild(button);
            }
        });
    }

    function selectLetterForPlayer(letter) {
        // ... (əvvəlki kimi)
        selectedLetter = letter.toUpperCase();
        chosenLetterDisplay.textContent = selectedLetter;
        exampleLetterPlaceholder.textContent = selectedLetter;
        reminderLetterAdmin.textContent = selectedLetter;
        startPlayerGameSession();
    }

    function startPlayerGameSession() {
        score = 0;
        questionsAskedThisPlayerGame = 0;
        
        scoreDisplay.textContent = score;
        feedbackMessage.textContent = '';
        feedbackMessage.className = '';
        clearTimeout(feedbackTimeoutId);
        clearTimeout(answerTimerId);
        
        enableAdminDecisionButtons();
        showScreen('game');
        displayNextQuestionForPlayer();
    }

    function displayNextQuestionForPlayer() {
        clearTimeout(feedbackTimeoutId);
        clearTimeout(answerTimerId);

        if (questionsAskedThisPlayerGame >= QUESTIONS_PER_PLAYER || questionsForCurrentPlayer.length === 0) {
            endPlayerGame();
            return;
        }

        // Sualı questionsForCurrentPlayer-dən götürürük (pop etmirik, çünki artıq qarışdırılıb)
        currentQuestion = questionsForCurrentPlayer[questionsAskedThisPlayerGame];
        questionsAskedThisPlayerGame++; // Bunu sualı göstərdikdən sonra artırmaq daha yaxşıdır

        categoryDisplay.textContent = currentQuestion.category;
        questionText.textContent = currentQuestion.question;
        questionCountDisplay.textContent = questionsAskedThisPlayerGame;

        feedbackMessage.textContent = `${currentPlayerName} cavabını düşünür...`;
        feedbackMessage.className = 'feedback-info';
        exampleAnswersArea.classList.add('hidden');
        noExamplesMessage.classList.add('hidden');
        generateAndDisplayExampleAnswers();
        enableAdminDecisionButtons();
        startAnswerTimer();
    }

    function startAnswerTimer() {
        timeLeftForAnswer = adminSetAnswerTimeLimit; // Adminin təyin etdiyi vaxt
        timerDisplay.textContent = timeLeftForAnswer;
        answerTimerId = setInterval(() => {
            timeLeftForAnswer--;
            timerDisplay.textContent = timeLeftForAnswer;
            if (timeLeftForAnswer <= 0) {
                clearInterval(answerTimerId);
                handleTimeout();
            }
        }, 1000);
    }

    function handleTimeout() {
        showFeedback("Vaxt bitdi! Cavab səhv qəbul edildi.", "incorrect");
        disableAdminDecisionButtons();
        // Avtomatik səhv cavab və növbəti sual
        adminGivesFeedback(false, true); // İkinci parametr timeout olduğunu bildirir
    }

    function generateAndDisplayExampleAnswers() {
        // ... (əvvəlki generateAndDisplayExampleAnswers funksiyası)
        exampleAnswersList.innerHTML = '';
        const letterSpecificExamples = [];
        const wordsStartingWithLetter = sampleVocabulary[selectedLetter] || [];

        if (wordsStartingWithLetter.length > 0) {
            const shuffledWords = shuffleArray([...wordsStartingWithLetter]);
            for (let i = 0; i < Math.min(5, shuffledWords.length); i++) {
                letterSpecificExamples.push(capitalizeFirstLetter(shuffledWords[i]));
            }
        }

        if (letterSpecificExamples.length > 0) {
            letterSpecificExamples.forEach(ex => {
                const li = document.createElement('li');
                li.textContent = ex;
                exampleAnswersList.appendChild(li);
            });
            toggleExamplesBtn.disabled = false;
            noExamplesMessage.classList.add('hidden');
        } else {
            noExamplesMessage.classList.remove('hidden');
            toggleExamplesBtn.disabled = true;
            exampleAnswersArea.classList.add('hidden');
        }
    }
    
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function adminGivesFeedback(isCorrect, fromTimeout = false) {
        if (!fromTimeout) { // Əgər admin özü basıbsa, taymeri dayandır
            clearTimeout(answerTimerId);
        }

        if (isCorrect) {
            score++;
            scoreDisplay.textContent = score;
            if (!fromTimeout) showFeedback("Əla! Düzgün cavab!", "correct");
        } else {
            if (!fromTimeout) showFeedback("Təəssüf... Bu dəfə alınmadı.", "incorrect");
            // fromTimeout zamanı mesaj artıq handleTimeout-da verilib
        }
        disableAdminDecisionButtons();

        feedbackTimeoutId = setTimeout(() => {
            if (questionsAskedThisPlayerGame < QUESTIONS_PER_PLAYER && questionsForCurrentPlayer.length > questionsAskedThisPlayerGame) { // Dəqiq yoxlama
                displayNextQuestionForPlayer();
            } else {
                endPlayerGame();
            }
        }, fromTimeout ? 500 : FEEDBACK_DISPLAY_TIME); // Taymer bitibsə daha tez keç
    }

    function endPlayerGame(forceEnd = false) {
        clearTimeout(feedbackTimeoutId);
        clearTimeout(answerTimerId);
        savePlayerResult(currentPlayerName, score);
        
        playerNameGameOver.textContent = currentPlayerName;
        finalPlayerScoreDisplay.textContent = score;
        showScreen('player-game-over');
        if (forceEnd) {
            showFeedback(`${currentPlayerName} üçün oyun admin tərəfindən bitirildi. Yekun xal: ${score}`, "info", true);
        }
    }

    // savePlayerResult, displayLeaderboard, clearLeaderboard, showFeedback,
    // enableAdminDecisionButtons, disableAdminDecisionButtons, shuffleArray funksiyaları
    // əvvəlki kimi qalır.
    function savePlayerResult(name, playerScore) { /* ... əvvəlki kod ... */
        let leaderboard = JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];
        const existingPlayerIndex = leaderboard.findIndex(p => p.name.toLowerCase() === name.toLowerCase());
        if (existingPlayerIndex > -1) {
            if (playerScore > leaderboard[existingPlayerIndex].score) {
                 leaderboard[existingPlayerIndex].score = playerScore;
            }
        } else {
            leaderboard.push({ name: name, score: playerScore });
        }
        leaderboard.sort((a, b) => b.score - a.score);
        localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(leaderboard));
    }

    function displayLeaderboard() { /* ... əvvəlki kod ... */
        leaderboardTableBody.innerHTML = '';
        let leaderboard = JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];
        if (leaderboard.length === 0) {
            const row = leaderboardTableBody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 3;
            cell.textContent = "Hələ heç bir nəticə yoxdur.";
            cell.style.textAlign = "center";
            return;
        }
        leaderboard.forEach((player, index) => {
            const row = leaderboardTableBody.insertRow();
            row.insertCell().textContent = index + 1;
            row.insertCell().textContent = player.name;
            row.insertCell().textContent = player.score;
        });
    }
    
    function clearLeaderboard() { /* ... əvvəlki kod ... */
         if (confirm("Liderlər cədvəlini təmizləməyə əminsinizmi?")) {
            localStorage.removeItem(LEADERBOARD_KEY);
            displayLeaderboard();
            showFeedback("Liderlər cədvəli təmizləndi.", "info", true);
        }
    }

    function showFeedback(message, type, persist = false) { /* ... əvvəlki kod ... */
        feedbackMessage.textContent = message;
        feedbackMessage.className = `feedback-${type}`;
    }

    function enableAdminDecisionButtons() { /* ... əvvəlki kod ... */
        adminCorrectBtn.disabled = false;
        adminIncorrectBtn.disabled = false;
        adminEndPlayerGameBtn.disabled = false;
    }

    function disableAdminDecisionButtons() { /* ... əvvəlki kod ... */
        adminCorrectBtn.disabled = true;
        adminIncorrectBtn.disabled = true;
        // adminEndPlayerGameBtn-i aktiv saxlayaq ki, admin istənilən vaxt bitirə bilsin
        // adminEndPlayerGameBtn.disabled = true;
    }

    function shuffleArray(array) { /* ... əvvəlki kod ... */
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    // Event Listeners
    adminCorrectBtn.addEventListener('click', () => adminGivesFeedback(true));
    adminIncorrectBtn.addEventListener('click', () => adminGivesFeedback(false));
    adminEndPlayerGameBtn.addEventListener('click', () => endPlayerGame(true));
    toggleExamplesBtn.addEventListener('click', () => { /* ... əvvəlki kod ... */
        exampleAnswersArea.classList.toggle('hidden');
        if (exampleAnswersArea.classList.contains('hidden')) {
            toggleExamplesBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Nümunə Cavabları Göstər';
        } else {
            toggleExamplesBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Nümunə Cavabları Gizlət';
        }
    });
    nextPlayerBtn.addEventListener('click', () => {
        showScreen('initial-setup'); // Növbəti oyunçu üçün yenidən ad və taymer ayarları
    });
    showLeaderboardBtn.addEventListener('click', () => {
        showScreen('leaderboard');
    });
    backToPlayerNameBtn.addEventListener('click', () => {
        showScreen('initial-setup'); // Liderlərdən sonra yenidən başlamaq üçün
    });
    clearLeaderboardBtn.addEventListener('click', clearLeaderboard);

    initGameSetup();
});
