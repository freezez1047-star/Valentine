let yesSize = 1;
let noAttempts = 0;

function createFloatingHearts() {
    const heartBg = document.getElementById('heartBg');
    const hearts = ['💕', '💖', '💗', '💓', '💝'];

    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.animationDuration = (10 + Math.random() * 10) + 's';
        heartBg.appendChild(heart);
    }
}

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const container = document.getElementById('buttonsContainer');

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    noBtn.style.left = Math.random() * maxX + 'px';
    noBtn.style.top = Math.random() * maxY + 'px';

    noAttempts++;
    yesSize += 0.15;
    yesBtn.style.transform = `scale(${yesSize})`;

    const texts = [
        'No',
        'Are you sure?',
        'Really?',
        'Think again!',
        'Pretty please?',
        'Just click Yes 🥺'
    ];

    if (noAttempts < texts.length) {
        noBtn.textContent = texts[noAttempts];
    }
}

function showLetter() {
    document.getElementById('questionPage').classList.add('hidden');
    document.getElementById('letterPage').classList.add('active');
    createRoseBackground();
}

function createRoseBackground() {
    const rosesBg = document.getElementById('rosesBg');
    const roses = ['🌹', '🤍'];

    for (let i = 0; i < 30; i++) {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.textContent = roses[i % 2];
        rose.style.left = Math.random() * 100 + '%';
        rose.style.top = Math.random() * 100 + '%';
        rosesBg.appendChild(rose);
    }
}

createFloatingHearts();
