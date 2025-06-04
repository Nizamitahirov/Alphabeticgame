document.addEventListener('DOMContentLoaded', () => {
    // --- GENİŞ SUALLAR BAZASI (NÜMUNƏ) ---
    // Real tətbiqdə bura 300 sual və hər biri üçün "example_ideas" əlavə edin.
    // Mən burada daha çox nümunə verəcəm, amma 300-ü tamamlamaq sizə qalır.
    const allQuestionsPool = [
        // Ev Əşyaları (1-20)
        { category: "Ev Əşyaları", question: "Qonaq otağında olan bir mebel.", example_ideas: ["divan", "kreslo", "stol", "televizor altlığı", "kitab rəfi"] },
        { category: "Ev Əşyaları", question: "Yataq otağında istifadə edilən bir şey.", example_ideas: ["yataq", "dolab", "güzgü", "gecə lampası", "yastıq"] },
        { category: "Ev Əşyaları", question: "Hamam otağında olan bir ləvazimat.", example_ideas: ["sabun", "şampun", "dəsmal", "diş fırçası", "fen"] },
        { category: "Ev Əşyaları", question: "Təmizlik üçün istifadə edilən vasitə.", example_ideas: ["süpürgə", "tozsoran", "bez", "maye sabun", "fırça"] },
        { category: "Ev Əşyaları", question: "Balkonda ola biləcək bir əşya.", example_ideas: ["stul", "gül dibçəyi", "kiçik masa", "asılqan", "skamya"] },
        // ... (Ev Əşyaları kateqoriyasını 20-yə tamamlayın)

        // Heyvanlar (21-50)
        { category: "Heyvanlar", question: "Evdə saxlanıla bilən bir heyvan.", example_ideas: ["pişik", "it", "quş", "balıq", "hamster"] },
        { category: "Heyvanlar", question: "Afrikada yaşayan bir vəhşi heyvan.", example_ideas: ["şir", "fil", "zürafə", "zebra", "kərgədan"] },
        { category: "Heyvanlar", question: "Uça bilən bir canlı.", example_ideas: ["quş", "yarasa", "kəpənək", "arı", "ağcaqanad"] },
        { category: "Heyvanlar", question: "Suda yaşayan bir məməli.", example_ideas: ["balina", "delfin", "suiti", "dəniz donuzu"] },
        { category: "Heyvanlar", question: "Sürünən bir heyvan.", example_ideas: ["ilan", "timsah", "kərtənkələ", "tısbağa"] },
        // ... (Heyvanlar kateqoriyasını 30-a tamamlayın)

        // Peşələr (51-80)
        { category: "Peşələr", question: "Sənət sahəsində bir peşə.", example_ideas: ["rəssam", "musiqiçi", "aktyor", "heykəltaraş", "dizayner"] },
        { category: "Peşələr", question: "Elmlə məşğul olan bir insan.", example_ideas: ["alim", "fizik", "kimyaçı", "bioloq", "astronom"] },
        { category: "Peşələr", question: "Tikinti ilə bağlı bir iş.", example_ideas: ["memar", "inşaatçı", "mühəndis", "bənna", "suvaqçı"] },
        { category: "Peşələr", question: "İnsanların sağlamlığı ilə məşğul olan.", example_ideas: ["həkim", "tibb bacısı", "stomatoloq", "əczaçı", "fizioterapevt"] },
        { category: "Peşələr", question: "Qanunla bağlı bir peşə.", example_ideas: ["vəkil", "hakim", "prokuror", "notarius", "hüquqşünas"] },
        // ... (Peşələr kateqoriyasını 30-a tamamlayın)

        // Yemək və İçkilər (81-110)
        { category: "Yemək", question: "Azərbaycan mətbəxindən bir yemək.", example_ideas: ["plov", "dolma", "kabab", "piti", "düşbərə"] },
        { category: "Yemək", question: "Səhər yeməyi üçün bir qida.", example_ideas: ["yumurta", "pendir", "çörək", "qaymaq", "sıyıq"] },
        { category: "İçkilər", question: "İsti bir içki.", example_ideas: ["çay", "qəhvə", "kakao", "isti şokolad", "bitki çayı"] },
        { category: "İçkilər", question: "Sərinləşdirici bir içki.", example_ideas: ["su", "şirə", "kompot", "limonad", "ayran"] },
        { category: "Şirniyyat", question: "Milli bir şirniyyat.", example_ideas: ["paxlava", "şəkərbura", "qoğal", "badambura", "kətə"] },
        // ... (Yemək və İçkilər kateqoriyasını 30-a tamamlayın)

        // Təbiət və Coğrafiya (111-150)
        { category: "Təbiət", question: "Bir ağac növü.", example_ideas: ["palıd", "şam", "çinar", "qovaq", "alma ağacı"] },
        { category: "Təbiət", question: "Bir gül adı.", example_ideas: ["qızılgül", "bənövşə", "zanbaq", "nərgiz", "çobanyastığı"] },
        { category: "Coğrafiya", question: "Avropada bir ölkə.", example_ideas: ["Fransa", "Almaniya", "İtaliya", "İspaniya", "Böyük Britaniya"] },
        { category: "Coğrafiya", question: "Bir okean adı.", example_ideas: ["Sakit", "Atlantik", "Hind", "Şimal Buzlu"] },
        { category: "Coğrafiya", question: "Azərbaycanda bir çay.", example_ideas: ["Kür", "Araz", "Qanıx", "Samur", "Tərtər"] },
        // ... (Təbiət və Coğrafiya kateqoriyasını 40-a tamamlayın)

        // İdman və Hobbi (151-180)
        { category: "İdman", question: "Komanda ilə oynanılan bir idman.", example_ideas: ["futbol", "basketbol", "voleybol", "həndbol", "reqbi"] },
        { category: "İdman", question: "Qış idman növü.", example_ideas: ["xizək", "snoubord", "fiqurlu konkisürmə", "hokkey", "kerlinq"] },
        { category: "Hobbi", question: "Əl işi ilə bağlı bir məşğuliyyət.", example_ideas: ["toxuma", "rəsm", "heykəltaraşlıq", "modelçilik", "zərgərlik"] },
        { category: "Hobbi", question: "Kolleksiya edilə bilən bir şey.", example_ideas: ["marka", "pul", "açıqca", "kitab", "oyuncaq"] },
        { category: "Hobbi", question: "Açıq havada edilən bir fəaliyyət.", example_ideas: ["gəzinti", "velosiped sürmə", "balıq tutma", "piknik", "dağçılıq"] },
        // ... (İdman və Hobbi kateqoriyasını 30-a tamamlayın)

        // Elm və Texnologiya (181-210)
        { category: "Elm", question: "Bir kimyəvi element.", example_ideas: ["qızıl", "dəmir", "oksigen", "hidrogen", "karbon"] },
        { category: "Elm", question: "Bir planet adı.", example_ideas: ["Mars", "Yupiter", "Saturn", "Venera", "Merkuri"] },
        { category: "Texnologiya", question: "Müasir bir kommunikasiya vasitəsi.", example_ideas: ["telefon", "kompüter", "internet", "planşet", "smart saat"] },
        { category: "Texnologiya", question: "Məişətdə istifadə olunan elektrik cihazı.", example_ideas: ["soyuducu", "paltaryuyan", "mikrodalğalı soba", "toster", "ütü"] },
        { category: "Texnologiya", question: "Bir proqramlaşdırma dili.", example_ideas: ["Python", "JavaScript", "Java", "C++", "Ruby"] },
        // ... (Elm və Texnologiya kateqoriyasını 30-a tamamlayın)

        // Ümumi Biliklər və Mücərrəd Anlayışlar (211-300) - Bunları daha da genişləndirin
        { category: "Musiqi", question: "Bir musiqi aləti.", example_ideas: ["gitara", "piano", "skripka", "tar", "nağara"] },
        { category: "Ədəbiyyat", question: "Bir kitab janrı.", example_ideas: ["roman", "hekayə", "şeir", "dram", "nağıl"] },
        { category: "Rənglər", question: "Əsas rənglərdən biri.", example_ideas: ["qırmızı", "göy", "sarı", "yaşıl"] }, // Yaşıl ikinci dərəcəli olsa da, tez-tez əsas kimi qəbul edilir
        { category: "Həndəsə", question: "Düz xətlərdən ibarət fiqur.", example_ideas: ["kvadrat", "üçbucaq", "düzbucaqlı", "romb", "trapesiya"] },
        { category: "Hava Hadisələri", question: "Səmadan yağan bir şey.", example_ideas: ["yağış", "qar", "dolu", "çiskin"] },
        { category: "Bayramlar", question: "Azərbaycanda qeyd olunan bir bayram.", example_ideas: ["Novruz", "Respublika günü", "Qurban", "Yeni il", "Müstəqillik günü"] },
        { category: "Duyğular", question: "Mənfi bir hiss.", example_ideas: ["qəzəb", "qorxu", "kədər", "paxıllıq", "məyusluq"] },
        { category: "Zaman", question: "Bir həftənin günü.", example_ideas: ["bazar ertəsi", "çərşənbə", "cümə", "şənbə", "bazar"] },
        { category: "Ölçü Vahidləri", question: "Uzunluq ölçü vahidi.", example_ideas: ["metr", "santimetr", "kilometr", "mil", "fut"] },
        { category: "Mifologiya", question: "Qədim bir tanrı adı (ümumi).", example_ideas: ["Zevs", "Poseydon", "Ra", "Tor", "Odin"] },
        // ... bu kateqoriyaları və digərlərini əlavə edərək 300-ə çatdırın.
    ];

    // Hərflə başlayan sözlər üçün lüğət (əvvəlki kimi)
    const sampleVocabulary = { /* ... əvvəlki lüğətiniz ... */
        A: ["alma", "armud", "avtobus", "ayı", "ana", "açıqca", "aş", "ad", "alim", "aktyor", "astronom", "araba"],
        B: ["banan", "balıq", "bıçaq", "bina", "bağ", "böyük", "balaca", "boşqab", "basketbol", "bioloq", "bənna", "balina", "bazar"],
        C: ["canavar", "corab", "cib", "cəld", "cücə", "cümə", "cərrah"], // Azərbaycan dilində C ilə başlayan söz azdır
        Ç: ["çay", "çanta", "çətir", "çiyələk", "çəkic", "çiçək", "çinar", "çərşənbə", "çoban", "çörək"],
        D: ["dovşan", "dəftər", "dəniz", "dağ", "darvaza", "divan", "dolma", "dizayner", "delfin", "dəmir", "düşbərə"],
        E: ["ev", "eşşək", "elm", "elektrik", "ekran", "enerji"], // E hərfi üçün Azərbaycan dilində söz azdır
        Ə: ["ərik", "əlcək", "əsgər", "ədyal", "ətir", "əsas", "əczaçı", "əfsanə", "əyləncə"],
        F: ["fincan", "fil", "fırça", "futbol", "fərqli", "Fransa", "fizik", "fen", "fiqur", "fontan"],
        G: ["gəmi", "günəş", "gül", "göz", "gecə", "göy", "gitara", "gilas", "geyim", "güzgü"],
        Ğ: [], // "ğ" ilə başlayan söz yoxdur deyə bilərik
        H: ["həkim", "heyva", "hava", "hörümçək", "hesab", "həndbol", "hokkey", "hamster", "hekayə", "hakim"],
        X: ["xalça", "xiyar", "xəritə", "xoruz", "xəstə", "xizək", "xəbər", "xəmir", "xəzinə"],
        I: ["ıspanaq", "ıslıq", "işıq", "isti"], // I hərfi üçün də söz azdır
        İ: ["ilan", "iynə", "isti", "it", "iki", "insan", "iş", "internet", "İtaliya", "inşaatçı", "idman"],
        J: ["Jurnal", "Jilet", "Jeton", "Judo", "Jaket"], // J hərfi üçün də söz azdır
        K: ["kitab", "keçi", "küçə", "kreslo", "kartof", "körpü", "kompüter", "kaktus", "kəpənək", "kofe"],
        Q: ["qarpız", "qələm", "qapı", "qar", "qayıq", "qaşıq", "qutu", "qırmızı", "qızıl", "qonaq", "qaymaq"],
        L: ["limon", "lampa", "lələk", "layla", "lacivərd", "limonad", "lobya", "lüğət"],
        M: ["maşın", "meymun", "maral", "mavi", "məktəb", "müəllim", "memar", "musiqi", "marka", "Mars"],
        N: ["nar", "nənə", "neft", "nöqtə", "nailiyyət", "Novruz", "notarius", "nağıl", "nərgiz"],
        O: ["odun", "otaq", "oyun", "orta", "obraz", "okean", "oksigen", "opera"],
        Ö: ["ördək", "ömür", "örtük", "ölkə", "özəl", "ölçü"],
        P: ["palıd", "pişik", "paltar", "pəncərə", "pul", "polis", "Python", "plov", "piano", "paxlava", "pendir"],
        R: ["radio", "rəng", "rəsm", "robot", "ruh", "roman", "rəssam", "reqbi", "Respublika"],
        S: ["saat", "soba", "su", "səhər", "sarı", "sincab", "sabun", "sakit", "Saturn", "skripka", "sıyıq"],
        Ş: ["şar", "şir", "şəkil", "şəhər", "şokolad", "şam", "şampun", "şəkərbura", "şərf", "şahmat"],
        T: ["top", "tülkü", "telefon", "təyyarə", "torpaq", "tar", "timsah", "tibb", "toster", "tarix"],
        U: ["ulduz", "un", "uzaq", "uca", "uşaq", "universitet", "uğur"],
        Ü: ["üzüm", "ürək", "üç", "üst", "ütgəc", "ümid", "üzgüçülük"],
        V: ["vaqon", "velosiped", "vaza", "vətən", "varlı", "vulkan", "vəkil", "vitamin", "Venera"],
        Y: ["yumurta", "yağış", "yarpaq", "yaşıl", "yol", "yataq", "yanğınsöndürən", "Yupiter", "yaxata"],
        Z: ["zebra", "zəng", "zeytun", "zibil", "zaman", "zürafə", "zanbaq", "zərgərlik", "Zevs"]
    };

    const AZERBAIJANI_ALPHABET = Object.keys(sampleVocabulary).filter(letter => sampleVocabulary[letter] && sampleVocabulary[letter].length > 0); // Lüğətdə sözü olan hərflər
    const QUESTIONS_PER_PLAYER = 25;
    const ANSWER_TIME_LIMIT = 5; // Saniyə
    const FEEDBACK_DISPLAY_TIME = 1500;
    const LEADERBOARD_KEY = 'harfSehrbaziLeaderboardV3';

    let currentPlayerName = '';
    let selectedLetter = '';
    let score = 0;
    let currentQuestion = null;
    let questionsAskedThisPlayerGame = 0;
    let feedbackTimeoutId = null;
    let answerTimerId = null;
    let timeLeftForAnswer = ANSWER_TIME_LIMIT;

    // Bütün oyun sessiyası boyunca istifadə edilmiş sualları saxlamaq üçün
    let globallyUsedQuestions = new Set();
    // Hər oyunçu üçün təsadüfi sual dəsti
    let questionsForCurrentPlayer = [];


    // DOM Elementləri (əvvəlki kimi)
    const playerNameArea = document.getElementById('player-name-area');
    const playerNameInput = document.getElementById('player-name-input');
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
    const timerDisplay = document.getElementById('timer-display'); // Taymer üçün

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


    function initGameSetup() {
        totalQuestionsPerPlayerDisplay.textContent = QUESTIONS_PER_PLAYER;
        createLetterButtons();
        showScreen('player-name');
    }

    function showScreen(screenName) {
        // ... (əvvəlki showScreen funksiyası)
        playerNameArea.classList.add('hidden');
        letterSelectionArea.classList.add('hidden');
        gameArea.classList.add('hidden');
        playerGameOverArea.classList.add('hidden');
        leaderboardArea.classList.add('hidden');

        if (screenName === 'player-name') playerNameArea.classList.remove('hidden');
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
        if (!name) {
            alert("Zəhmət olmasa, oyunçu adını daxil edin.");
            return;
        }
        currentPlayerName = name;
        currentPlayerNameDisplayLetter.textContent = currentPlayerName;
        currentPlayerNameDisplayGame.textContent = currentPlayerName;
        playerNameInput.value = '';
        prepareQuestionsForCurrentPlayer(); // Oyunçu üçün sualları hazırla
        showScreen('letter-selection');
    });

    function prepareQuestionsForCurrentPlayer() {
        questionsForCurrentPlayer = [];
        let availablePool = allQuestionsPool.filter(q => !globallyUsedQuestions.has(q.question)); // Hələ istifadə edilməmiş suallar

        // Əgər istifadə edilməmiş sual sayı 25-dən azdırsa, istifadə edilmişlərdən də əlavə et (və ya oyunu bitir)
        if (availablePool.length < QUESTIONS_PER_PLAYER) {
            console.warn("Xəbərdarlıq: Bütün oyunçular üçün fərqli sual təmin etmək üçün kifayət qədər unikal sual yoxdur. Təkrarlanma ola bilər.");
            // Təkrarlanmaya icazə vermək üçün globallyUsedQuestions-u sıfırlaya və ya başqa məntiq işlədə bilərik.
            // Sadəlik üçün, qalanları mövcud hovuzdan götürürük.
            const neededMore = QUESTIONS_PER_PLAYER - availablePool.length;
            // Bu mərhələdə, əgər sual hovuzu bitibsə, oyun davam edə bilməz.
            // Amma real senaridə, eyni sualların təkrarlanmasına icazə verə bilərik.
            // Mən burada sadəcə mövcud olanları qarışdırıb götürəcəm.
            let tempPool = shuffleArray([...allQuestionsPool]); // Bütün sualları yenidən qarışdır
             for(let i = 0; i < QUESTIONS_PER_PLAYER; i++){
                if(tempPool.length > 0){
                    let questionToAdd = tempPool.pop();
                    questionsForCurrentPlayer.push(questionToAdd);
                } else {
                    break; // Hovuzda sual qalmadı
                }
            }
        } else {
             availablePool = shuffleArray(availablePool);
             for (let i = 0; i < QUESTIONS_PER_PLAYER; i++) {
                questionsForCurrentPlayer.push(availablePool[i]);
            }
        }
        // Seçilmiş sualları qlobal istifadə edilmişlərə əlavə et
        questionsForCurrentPlayer.forEach(q => globallyUsedQuestions.add(q.question));
    }


    function createLetterButtons() {
        // ... (əvvəlki createLetterButtons funksiyası)
        letterButtonsContainer.innerHTML = '';
        AZERBAIJANI_ALPHABET.forEach(letter => {
            // "Ğ" kimi hərfləri çıxarırıq (əgər lüğətdə sözü yoxdursa)
            if (sampleVocabulary[letter] && sampleVocabulary[letter].length > 0 && !sampleVocabulary[letter][0].includes("çətin")) {
                const button = document.createElement('button');
                button.textContent = letter;
                button.addEventListener('click', () => selectLetterForPlayer(letter));
                letterButtonsContainer.appendChild(button);
            }
        });
    }

    function selectLetterForPlayer(letter) {
        // ... (əvvəlki selectLetterForPlayer funksiyası)
        selectedLetter = letter.toUpperCase();
        chosenLetterDisplay.textContent = selectedLetter;
        exampleLetterPlaceholder.textContent = selectedLetter;
        reminderLetterAdmin.textContent = selectedLetter;
        startPlayerGameSession();
    }

    function startPlayerGameSession() {
        score = 0;
        questionsAskedThisPlayerGame = 0;
        // availableQuestionsForPlayer artıq prepareQuestionsForCurrentPlayer-də təyin edilib.
        
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
        clearTimeout(answerTimerId); // Əvvəlki sualın taymerini dayandır

        if (questionsAskedThisPlayerGame >= QUESTIONS_PER_PLAYER || questionsForCurrentPlayer.length === 0) {
            endPlayerGame();
            return;
        }

        currentQuestion = questionsForCurrentPlayer.pop(); // Hazır dəstdən sual götür
        questionsAskedThisPlayerGame++;

        categoryDisplay.textContent = currentQuestion.category;
        questionText.textContent = currentQuestion.question;
        questionCountDisplay.textContent = questionsAskedThisPlayerGame;

        feedbackMessage.textContent = `${currentPlayerName} cavabını düşünür...`;
        feedbackMessage.className = 'feedback-info';
        exampleAnswersArea.classList.add('hidden');
        noExamplesMessage.classList.add('hidden');
        generateAndDisplayExampleAnswers();
        enableAdminDecisionButtons();
        startAnswerTimer(); // Yeni sual üçün taymeri başlat
    }

    function startAnswerTimer() {
        timeLeftForAnswer = ANSWER_TIME_LIMIT;
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
        disableAdminDecisionButtons(); // Taymer bitdikdə admin artıq qərar verə bilməz
        // Avtomatik səhv cavab kimi qeyd et və növbəti suala keç
        feedbackTimeoutId = setTimeout(() => {
            if (questionsAskedThisPlayerGame < QUESTIONS_PER_PLAYER && questionsForCurrentPlayer.length > 0) {
                displayNextQuestionForPlayer();
            } else {
                endPlayerGame();
            }
        }, FEEDBACK_DISPLAY_TIME);
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


    function adminGivesFeedback(isCorrect) {
        clearTimeout(answerTimerId); // Admin qərar verdisə, taymeri dayandır
        if (isCorrect) {
            score++;
            scoreDisplay.textContent = score;
            showFeedback("Əla! Düzgün cavab!", "correct");
        } else {
            showFeedback("Təəssüf... Bu dəfə alınmadı.", "incorrect");
        }
        disableAdminDecisionButtons();

        feedbackTimeoutId = setTimeout(() => {
            if (questionsAskedThisPlayerGame < QUESTIONS_PER_PLAYER && questionsForCurrentPlayer.length > 0) {
                displayNextQuestionForPlayer();
            } else {
                endPlayerGame();
            }
        }, FEEDBACK_DISPLAY_TIME);
    }

    function endPlayerGame(forceEnd = false) {
        clearTimeout(feedbackTimeoutId);
        clearTimeout(answerTimerId); // Oyun bitdikdə də taymeri dayandır
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
            } // Əgər eyni xaldırsa və ya azdırsa heç nə etmirik
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
    }

    function shuffleArray(array) { /* ... əvvəlki kod ... */
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }


    // Event Listeners (əvvəlki kimi)
    adminCorrectBtn.addEventListener('click', () => adminGivesFeedback(true));
    adminIncorrectBtn.addEventListener('click', () => adminGivesFeedback(false));
    adminEndPlayerGameBtn.addEventListener('click', () => endPlayerGame(true));

    toggleExamplesBtn.addEventListener('click', () => {
        exampleAnswersArea.classList.toggle('hidden');
        if (exampleAnswersArea.classList.contains('hidden')) {
            toggleExamplesBtn.innerHTML = '<i class="fas fa-lightbulb"></i> Nümunə Cavabları Göstər';
        } else {
            toggleExamplesBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Nümunə Cavabları Gizlət';
        }
    });

    nextPlayerBtn.addEventListener('click', () => {
        showScreen('player-name');
    });
    showLeaderboardBtn.addEventListener('click', () => {
        showScreen('leaderboard');
    });
    backToPlayerNameBtn.addEventListener('click', () => {
        showScreen('player-name');
    });
    clearLeaderboardBtn.addEventListener('click', clearLeaderboard);

    initGameSetup();
});
