document.addEventListener('DOMContentLoaded', () => {
    const allQuestionsPool = [
        // Ev Əşyaları (Minimum 25-ə çatdırın!)
        { category: "Ev Əşyaları", question: "Qonaq otağında olan bir mebel.", example_ideas: ["divan", "kreslo", "stol", "televizor altlığı", "kitab rəfi", "pərdə", "xalça"] },
        { category: "Ev Əşyaları", question: "Yataq otağında istifadə edilən bir şey.", example_ideas: ["yataq", "dolab", "güzgü", "gecə lampası", "yastıq", "ədyal", "komod"] },
        { category: "Ev Əşyaları", question: "Hamam otağında olan bir ləvazimat.", example_ideas: ["sabun", "şampun", "dəsmal", "diş fırçası", "fen", "lif", "tarak"] },
        { category: "Ev Əşyaları", question: "Təmizlik üçün istifadə edilən vasitə.", example_ideas: ["süpürgə", "tozsoran", "bez", "maye sabun", "fırça", "vedrə", "əlcək"] },
        { category: "Ev Əşyaları", question: "Mətbəxdə yemək bişirmək üçün alət.", example_ideas: ["qazan", "tava", "bıçaq", "blender", "mikser", "süzgəc", "rende"] },
        { category: "Ev Əşyaları", question: "İşıqlandırma üçün istifadə olunan.", example_ideas: ["lampa", "çılçıraq", "bra", "projektor", "fənər", "spot"] },
        { category: "Ev Əşyaları", question: "Pəncərədə istifadə olunan bir şey.", example_ideas: ["pərdə", "jalüz", "şüşə", "pəncərəaltı", "tor", "dəstək"] },
        { category: "Ev Əşyaları", question: "Divardan asılan bir dekorasiya.", example_ideas: ["şəkil", "saat", "güzgü", "xalça (kiçik)", "pano", "çərçivə"] },
        { category: "Ev Əşyaları", question: "Yemək masasında olan bir şey.", example_ideas: ["boşqab", "stəkan", "qaşıq", "çəngəl", "salat qabı", "süfrə", "peçetka"] },
        { category: "Ev Əşyaları", question: "Ofisdə iş masasının üzərində olan.", example_ideas: ["kompüter", "qələmdan", "monitor", "klaviatura", "kağız", "stapler"] },
        { category: "Ev Əşyaları", question: "Geyim saxlamaq üçün mebel.", example_ideas: ["şkaf", "qarderob", "komod", "asılqan (stend)"] },
        { category: "Ev Əşyaları", question: "Yerdə sərilən bir şey.", example_ideas: ["xalça", "palaz", "kilim", "linoleum", "parket"] },
        { category: "Ev Əşyaları", question: "Bitki əkmək üçün qab.", example_ideas: ["dibçək", "vaza (gül üçün)", "kassa (şitil üçün)"] },
        { category: "Ev Əşyaları", question: "Soyuq saxlamaq üçün məişət texnikası.", example_ideas: ["soyuducu", "dondurucu"] },
        { category: "Ev Əşyaları", question: "İstilənmək üçün istifadə olunan.", example_ideas: ["radiator", "soba (elektrik/qaz)", "kamin", "kondisioner (isti rejim)"] },
        { category: "Ev Əşyaları", question: "Qapını açmaq/bağlamaq üçün.", example_ideas: ["açar", "dəstək", "kilid", "zəncir"] },
        { category: "Ev Əşyaları", question: "Musiqi dinləmək üçün cihaz.", example_ideas: ["dinamik", "qulaqlıq", "musiqi mərkəzi", "radio"] },
        { category: "Ev Əşyaları", question: "Kitab qoymaq üçün yer.", example_ideas: ["rəf", "şkaf", "polka", "kitabxana (mebel)"] },
        { category: "Ev Əşyaları", question: "Çay dəmləmək üçün qab.", example_ideas: ["çaydan", "samovar", "termos"] },
        { category: "Ev Əşyaları", question: "Oturmaq üçün yumşaq mebel.", example_ideas: ["kreslo", "divan", "pufik", "banketka"] },
        { category: "Ev Əşyaları", question: "Yazı yazmaq üçün səth.", example_ideas: ["masa", "parta", " yazı lövhəsi"] },
        { category: "Ev Əşyaları", question: "Paltar yumaq üçün maşın.", example_ideas: ["paltaryuyan"] },
        { category: "Ev Əşyaları", question: "Qab yumaq üçün maşın.", example_ideas: ["qabyuyan"] },
        { category: "Ev Əşyaları", question: "Ütü vurmaq üçün altlıq.", example_ideas: ["ütü masası"] },
        { category: "Ev Əşyaları", question: "Zibil atmaq üçün qab.", example_ideas: ["zibil qutusu", "vedrə (zibil üçün)"] },
        // Daha çox sual əlavə edin ki, cəmi ən az 25 olsun
    ];

    const sampleVocabulary = {
        A: ["alma", "armud", "avtobus", "ayı", "ana", "açıqca", "aş", "ad", "alim", "aktyor", "astronom", "araba", "arxeoloq", "asılqan", "ağac", "ağcaqanad", "ayran", "aşpaz", "aqronom", "Avropa", "Afrika", "Atlantik", "açar", "ağ"],
        B: ["banan", "balıq", "bıçaq", "bina", "bağ", "böyük", "balaca", "boşqab", "basketbol", "bioloq", "bənna", "balina", "bazar", "balkon", "bra", "blender", "bez", "bildirçin", "buqələmun", "badambura", "begemot", "barmen", "bələdçi", "bitki", "banketka", "boz"],
        C: ["canavar", "corab", "cib", "cəld", "cücə", "cümə", "cərrah", "ceyran", "cin", "cədvəl", "cızma-qara"],
        Ç: ["çay", "çanta", "çətir", "çiyələk", "çəkic", "çiçək", "çinar", "çərşənbə", "çoban", "çörək", "çəngəl", "çərçivə", "çılçıraq", "çöl", "çəmən", "çaydan", "çəhrayı"],
        D: ["dovşan", "dəftər", "dəniz", "dağ", "darvaza", "divan", "dolma", "dizayner", "delfin", "dəmir", "düşbərə", "dəsmal", "diş", "direktor", "dekan", "dülgər", "dəvəquşu", "dibçək", "dinamik", "dondurucu", "dəstək", "duman"],
        E: ["ev", "eşşək", "elm", "elektrik", "ekran", "enerji", "effekt", "elan", "era", "etiraf", "ekskavator", "emulsiya"],
        Ə: ["ərik", "əlcək", "əsgər", "ədyal", "ətir", "əsas", "əczaçı", "əfsanə", "əyləncə", "əqrəb", "əkinçi", "əhali", "ərazi", "əjdaha", "əlifba"],
        F: ["fincan", "fil", "fırça", "futbol", "fərqli", "Fransa", "fizik", "fen", "fiqur", "fontan", "fermer", "fizioterapevt", "fənər", "fakt", "fabrika", "fosfor"],
        G: ["gəmi", "günəş", "gül", "göz", "gecə", "göy", "gitara", "gilas", "geyim", "güzgü", "geoloq", "göyərçin", "gəmirici", "gəzinti", "qarderob", "qaz", "qırmızı"], // "Q" ilə başlayanları da bura əlavə etdim ki, lüğət zənginləşsin
        Ğ: ["ğar (mağara)", "ğəliz (çətin)"], // Hələ də çox az
        H: ["həkim", "heyva", "hava", "hörümçək", "hesab", "həndbol", "hokkey", "hamster", "hekayə", "hakim", "hüquqşünas", "heyvan", "hovuz", "həftə", "hədiyyə"],
        X: ["xalça", "xiyar", "xəritə", "xoruz", "xəstə", "xizək", "xəbər", "xəmir", "xəzinə", "xarakter", "xidmət", "xurma", "xəttat", "xlor"],
        I: ["ıspanaq", "ıslıq", "işıq", "isti", "ırmaq (çay)", "ılgım (miraj)", "ızqara"],
        İ: ["ilan", "iynə", "isti", "it", "iki", "insan", "iş", "internet", "İtaliya", "inşaatçı", "idman", "inək", "iqlim", "ixtira", "istiqamət", "ifadə"],
        J: ["jurnal", "jilet", "jeton", "judo", "jaket", "jalüz", "jele", "jokey"],
        K: ["kitab", "keçi", "küçə", "kreslo", "kartof", "körpü", "kompüter", "kaktus", "kəpənək", "qəhvə (Kofe)", "kəklik", "kapitan", "kassir", "klaviatura", "komod", "konfet", "kassa", "kilim", "kamin", "kondisioner", "kilid"],
        Q: ["qarpız", "qələm", "qapı", "qar", "qayıq", "qaşıq", "qutu", "qırmızı", "qızıl", "qonaq", "qaymaq", "qazan", "qartal", "qaranquş", "qoyun", "qəzet", "qəsr", "qələmdan", "qulaqlıq", "qabyuyan"],
        L: ["limon", "lampa", "lələk", "layla", "lacivərd", "limonad", "lobya", "lüğət", "leopar", "lif", "laboratoriya", "linoleum", "lokomotiv"],
        M: ["maşın", "meymun", "maral", "mavi", "məktəb", "müəllim", "memar", "musiqi", "marka", "Mars", "mikser", "maye", "mühəndis", "məşqçi", "müstəntiq", "monitor", "musiqi mərkəzi", "mina"],
        N: ["nar", "nənə", "neft", "nöqtə", "nailiyyət", "Novruz", "notarius", "nağıl", "nərgiz", "nəqliyyat", "nəfəs", "nümunə", "narıncı", "neon"],
        O: ["odun", "otaq", "oyun", "orta", "obraz", "okean", "oksigen", "opera", "ofisiant", "obyekt", "od", "ocaq", "otel"],
        Ö: ["ördək", "ömür", "örtük", "ölkə", "özəl", "ölçü", "öküz", "öskürək", "öyrənmək", "önlük"],
        P: ["palıd", "pişik", "paltar", "pəncərə", "pul", "polis", "Python", "plov", "piano", "paxlava", "pendir", "pilot", "prokuror", "professor", "psixoloq", "pərdə", "projektor", "peçetka", "palaz", "parket", "parta", "paltaryuyan", "pufik", "polka", "pano"],
        R: ["radio", "rəng", "rəsm", "robot", "ruh", "roman", "rəssam", "reqbi", "Respublika", "rejissor", "rende", "raket", "radiator", "rəf", "rotor"],
        S: ["saat", "soba", "su", "səhər", "sarı", "sincab", "sabun", "sakit", "Saturn", "skripka", "sıyıq", "stol", "stul", "stəkan", "sürücü", "satıcı", "süpürgə", "spot", "süzgəc", "samovar", "stapler", "sirk"],
        Ş: ["şar", "şir", "şəkil", "şəhər", "şokolad", "şam", "şampun", "şəkərbura", "şərf", "şahmat", "şüşə", "şezlonq", "şorba", "şkaf", "şosse"],
        T: ["top", "tülkü", "telefon", "təyyarə", "torpaq", "tar", "timsah", "tibb", "toster", "tarix", "tava", "tarak", "tərbiyəçi", "turac", "tısbağa", "televizor", "trapesiya", "termos", "traktor"],
        U: ["ulduz", "un", "uzaq", "uca", "uşaq", "universitet", "uğur", "usta", "uniforma", "uran"],
        Ü: ["üzüm", "ürək", "üç", "üst", "ütgəc", "ümid", "üzgüçülük", "ünsiyyət", "ülgüc", "üzük"],
        V: ["vaqon", "velosiped", "vaza", "vətən", "varlı", "vulkan", "vəkil", "vitamin", "Venera", "voleybol", "varan", "vedrə", "vint"],
        Y: ["yumurta", "yağış", "yarpaq", "yaşıl", "yol", "yataq", "yanğınsöndürən", "Yupiter", "yaxata", "yastıq", "yazıçı", "yarasa", "yelləncək"],
        Z: ["zebra", "zəng", "zeytun", "zibil", "zaman", "zürafə", "zanbaq", "zərgərlik", "Zevs", "zoomühəndis", "zirvə", "zəlzələ", "zəncir", "zavod"]
    };

    const AZERBAIJANI_ALPHABET = Object.keys(sampleVocabulary).filter(letter => sampleVocabulary[letter] && sampleVocabulary[letter].length > 0 && !(sampleVocabulary[letter].length === 1 && sampleVocabulary[letter][0].includes("çətin")));
    const QUESTIONS_PER_PLAYER = 25;
    const DEFAULT_ANSWER_TIME_LIMIT = 10;
    const FEEDBACK_DISPLAY_TIME = 1500;
    const LEADERBOARD_KEY = 'harfSehrbaziLeaderboardV6';

    let adminSetAnswerTimeLimit = DEFAULT_ANSWER_TIME_LIMIT;
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

    const initialSetupArea = document.getElementById('initial-setup-area');
    const playerNameInput = document.getElementById('player-name-input');
    const timerSettingInput = document.getElementById('timer-setting-input');
    const startPlayerGameBtn = document.getElementById('start-player-game-btn');
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
        showScreen('initial-setup');
    }

    function showScreen(screenName) {
        initialSetupArea.classList.add('hidden');
        letterSelectionArea.classList.add('hidden');
        gameArea.classList.add('hidden');
        playerGameOverArea.classList.add('hidden');
        leaderboardArea.classList.add('hidden');

        const screenElement = document.getElementById(screenName + '-area');
        if (screenElement) {
            screenElement.classList.remove('hidden');
        } else {
            console.error("Ekran tapılmadı: " + screenName + "-area");
        }

        if (screenName === 'leaderboard') {
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
        if (isNaN(timerValue) || timerValue < 3 || timerValue > 60) {
            alert("Zəhmət olmasa, hər sual üçün düzgün vaxt daxil edin (3-60 saniyə).");
            return;
        }

        if (allQuestionsPool.length < QUESTIONS_PER_PLAYER) {
            alert(`Oyun başlaya bilməz! Sual hovuzunda minimum ${QUESTIONS_PER_PLAYER} sual olmalıdır. Hazırda ${allQuestionsPool.length} sual var. Zəhmət olmasa, script.js faylına daha çox sual əlavə edin.`);
            return;
        }

        currentPlayerName = name;
        adminSetAnswerTimeLimit = timerValue;
        currentPlayerNameDisplayLetter.textContent = currentPlayerName;
        currentPlayerNameDisplayGame.textContent = currentPlayerName;
        
        if (prepareQuestionsForCurrentPlayer()) {
            showScreen('letter-selection');
        }
    });

    function prepareQuestionsForCurrentPlayer() {
        questionsForCurrentPlayer = [];
        let availableForSelectionPool = shuffleArray([...allQuestionsPool]); // Bütün hovuzu qarışdırırıq
        let selectedCount = 0;

        // Əvvəlcə qlobal olaraq istifadə edilməmişlərdən seçməyə çalışaq
        let uniquePool = availableForSelectionPool.filter(q => !globallyUsedQuestions.has(q.question));
        
        for (let i = 0; i < uniquePool.length && selectedCount < QUESTIONS_PER_PLAYER; i++) {
            questionsForCurrentPlayer.push(uniquePool[i]);
            globallyUsedQuestions.add(uniquePool[i].question);
            selectedCount++;
        }

        // Əgər hələ də 25 sual yığılmayıbsa, o zaman təkrarlanmaya icazə verərək qalanları tamamla
        // (amma eyni oyunçu üçün təkrarlanmasın)
        if (selectedCount < QUESTIONS_PER_PLAYER) {
            console.warn(`Qlobal unikal suallar bitdi (${selectedCount} ədəd seçildi). Qalan suallar təkrarlana bilər (fərqli oyunçular üçün).`);
            for (let i = 0; i < availableForSelectionPool.length && selectedCount < QUESTIONS_PER_PLAYER; i++) {
                const questionCandidate = availableForSelectionPool[i];
                // Bu oyunçu üçün bu sualın təkrarlanmadığını yoxla
                if (!questionsForCurrentPlayer.some(q => q.question === questionCandidate.question)) {
                    questionsForCurrentPlayer.push(questionCandidate);
                    // globallyUsedQuestions-a artıq əlavə olunub və ya burada da əlavə edilə bilər (problem yaratmır)
                    globallyUsedQuestions.add(questionCandidate.question);
                    selectedCount++;
                }
            }
        }
        
        if (questionsForCurrentPlayer.length < QUESTIONS_PER_PLAYER) {
            // Bu mesaj çox güman ki, allQuestionsPool-un özü 25-dən az olduqda görünəcək
            alert(`Oyunçu üçün ${QUESTIONS_PER_PLAYER} sual seçilə bilmədi. Mövcud sual sayı: ${questionsForCurrentPlayer.length}. Sual hovuzunu yoxlayın.`);
            showScreen('initial-setup');
            return false;
        }
        questionsForCurrentPlayer = shuffleArray(questionsForCurrentPlayer);
        return true;
    }

    function createLetterButtons() {
        letterButtonsContainer.innerHTML = '';
        const availableLetters = Object.keys(sampleVocabulary).filter(letter => {
            const words = sampleVocabulary[letter];
            return words && words.length > 0 && !(words.length === 1 && words[0].toLowerCase().includes("çətin"));
        });
        
        if (availableLetters.length === 0) {
            letterButtonsContainer.innerHTML = "<p style='color: var(--danger-color); font-weight: bold;'>Lüğətdə heç bir hərf üçün uyğun söz tapılmadı. Oyun davam edə bilməz.</p>";
            return;
        }

        availableLetters.forEach(letter => {
            const button = document.createElement('button');
            button.textContent = letter;
            button.addEventListener('click', () => selectLetterForPlayer(letter));
            letterButtonsContainer.appendChild(button);
        });
    }

    function selectLetterForPlayer(letter) {
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

        if (questionsAskedThisPlayerGame >= QUESTIONS_PER_PLAYER || questionsAskedThisPlayerGame >= questionsForCurrentPlayer.length) {
            endPlayerGame();
            return;
        }

        currentQuestion = questionsForCurrentPlayer[questionsAskedThisPlayerGame];
        
        questionCountDisplay.textContent = questionsAskedThisPlayerGame + 1;

        categoryDisplay.textContent = currentQuestion.category;
        questionText.textContent = currentQuestion.question;

        feedbackMessage.textContent = `${currentPlayerName} cavabını düşünür...`;
        feedbackMessage.className = 'feedback-info';
        exampleAnswersArea.classList.add('hidden'); // Nümunələri gizlət
        toggleExamplesBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Nümunə Cavabları Göstər'; // Düymə mətnini sıfırla
        noExamplesMessage.classList.add('hidden');
        generateAndDisplayExampleAnswers();
        enableAdminDecisionButtons();
        startAnswerTimer();
    }

    function startAnswerTimer() {
        timeLeftForAnswer = adminSetAnswerTimeLimit;
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
        adminGivesFeedback(false, true);
    }

    function generateAndDisplayExampleAnswers() {
        exampleAnswersList.innerHTML = '';
        const letterSpecificExamples = [];
        const wordsStartingWithLetter = sampleVocabulary[selectedLetter] || [];

        if (wordsStartingWithLetter.length > 0) {
            const shuffledWords = shuffleArray([...wordsStartingWithLetter]);
            for (let i = 0; i < Math.min(5, shuffledWords.length); i++) {
                if (shuffledWords[i] && !shuffledWords[i].toLowerCase().includes("çətin")) {
                    letterSpecificExamples.push(capitalizeFirstLetter(shuffledWords[i]));
                }
            }
        }

        if (letterSpecificExamples.length > 0) {
            toggleExamplesBtn.disabled = false;
            noExamplesMessage.classList.add('hidden');
            letterSpecificExamples.forEach(ex => {
                const li = document.createElement('li');
                li.textContent = ex;
                exampleAnswersList.appendChild(li);
            });
        } else {
            noExamplesMessage.classList.remove('hidden');
            toggleExamplesBtn.disabled = true;
            exampleAnswersArea.classList.add('hidden');
        }
    }
    
    function capitalizeFirstLetter(string) {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function adminGivesFeedback(isCorrect, fromTimeout = false) {
        if (!fromTimeout) {
            clearTimeout(answerTimerId);
        }
        questionsAskedThisPlayerGame++; // Sual sayını burada artırırıq

        if (isCorrect) {
            score++;
            scoreDisplay.textContent = score;
            if (!fromTimeout) showFeedback("Əla! Düzgün cavab!", "correct");
        } else {
            if (!fromTimeout) showFeedback("Təəssüf... Bu dəfə alınmadı.", "incorrect");
        }
        disableAdminDecisionButtons();

        feedbackTimeoutId = setTimeout(() => {
            if (questionsAskedThisPlayerGame < QUESTIONS_PER_PLAYER && questionsAskedThisPlayerGame < questionsForCurrentPlayer.length) {
                displayNextQuestionForPlayer();
            } else {
                endPlayerGame();
            }
        }, fromTimeout ? 600 : FEEDBACK_DISPLAY_TIME); // Timeout üçün bir az daha sürətli keçid
    }

    function endPlayerGame(forceEnd = false) {
        clearTimeout(feedbackTimeoutId);
        clearTimeout(answerTimerId);
        savePlayerResult(currentPlayerName, score);
        
        playerNameGameOver.textContent = currentPlayerName;
        finalPlayerScoreDisplay.textContent = score;
        showScreen('player-game-over');
        if (forceEnd && !playerGameOverArea.classList.contains('hidden')) { // Əgər ekran artıq göstərilibsə, mesajı yenilə
             showFeedback(`${currentPlayerName} üçün oyun admin tərəfindən bitirildi. Yekun xal: ${score}`, "info", true);
        }
    }

    function savePlayerResult(name, playerScore) {
        let leaderboard = JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];
        const existingPlayerIndex = leaderboard.findIndex(p => p.name.trim().toLowerCase() === name.trim().toLowerCase());
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

    function displayLeaderboard() {
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
    
    function clearLeaderboard() {
         if (confirm("Liderlər cədvəlini təmizləməyə əminsinizmi? Bu əməliyyat geri qaytarıla bilməz.")) {
            localStorage.removeItem(LEADERBOARD_KEY);
            displayLeaderboard();
            showFeedback("Liderlər cədvəli təmizləndi.", "info", true);
        }
    }

    function showFeedback(message, type, persist = false) {
        feedbackMessage.textContent = message;
        feedbackMessage.className = `feedback-${type}`;
        // Persist olmayan mesajların avtomatik silinməsi məntiqini çıxardım,
        // çünki növbəti sualda onsuz da təmizlənir.
    }

    function enableAdminDecisionButtons() {
        adminCorrectBtn.disabled = false;
        adminIncorrectBtn.disabled = false;
        adminEndPlayerGameBtn.disabled = false;
    }

    function disableAdminDecisionButtons() {
        adminCorrectBtn.disabled = true;
        adminIncorrectBtn.disabled = true;
        // adminEndPlayerGameBtn aktiv qalsın ki, admin istənilən vaxt bitirə bilsin.
    }

    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    adminCorrectBtn.addEventListener('click', () => adminGivesFeedback(true));
    adminIncorrectBtn.addEventListener('click', () => adminGivesFeedback(false));
    adminEndPlayerGameBtn.addEventListener('click', () => endPlayerGame(true));
    toggleExamplesBtn.addEventListener('click', () => {
        exampleAnswersArea.classList.toggle('hidden');
        toggleExamplesBtn.innerHTML = exampleAnswersArea.classList.contains('hidden') ?
            '<i class="fas fa-lightbulb"></i> Nümunə Cavabları Göstər' :
            '<i class="fas fa-eye-slash"></i> Nümunə Cavabları Gizlət';
    });
    nextPlayerBtn.addEventListener('click', () => {
        // Növbəti oyunçu üçün playerNameInput və timerSettingInput-u sıfırlamayaq,
        // admin eyni ayarlarla davam etmək istəyə bilər və ya dəyişə bilər.
        showScreen('initial-setup');
    });
    showLeaderboardBtn.addEventListener('click', () => {
        showScreen('leaderboard');
    });
    backToPlayerNameBtn.addEventListener('click', () => {
        showScreen('initial-setup');
    });
    clearLeaderboardBtn.addEventListener('click', clearLeaderboard);

    initGameSetup();
});
