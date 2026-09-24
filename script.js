// Таймер обратного отсчёта до 22 октября
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    let targetDate = new Date(currentYear, 9, 22, 0, 0, 0);
    
    if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 9, 22, 0, 0, 0);
    }
    
    const diff = targetDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===== ГЛИТЧ-ЭФФЕКТ =====
function triggerGlitch() {
    document.body.classList.add("glitch");
    
    // Убираем класс через 300мс (длительность анимации)
    setTimeout(() => {
        document.body.classList.remove("glitch");
    }, 300);
}

// Случайный глитч каждые 5-15 секунд
function scheduleGlitch() {
    const randomDelay = 5000 + Math.random() * 10000; // от 5 до 15 секунд
    setTimeout(() => {
        triggerGlitch();
        scheduleGlitch(); // планируем следующий
    }, randomDelay);
}

// Запускаем после загрузки
scheduleGlitch();
// ===== СИМВОЛЫ "R." КАК ГЛИТЧ =====
function spawnRSymbols() {
    const count = Math.floor(Math.random() * 5) + 1; // 1-5 символов
    
    for (let i = 0; i < count; i++) {
        // Небольшая задержка между символами, чтобы появлялись не все разом
        setTimeout(() => {
            createRSymbol();
        }, Math.random() * 500);
    }
}

function createRSymbol() {
    const symbol = document.createElement("div");
    symbol.className = "r-symbol";
    symbol.textContent = "R.";
    
    // Случайный размер от 12 до 120px
    const size = 12 + Math.random() * 108;
    symbol.style.fontSize = size + "px";
    
    // Случайная прозрачность от 0.05 до 0.5
    const opacity = 0.05 + Math.random() * 0.45;
    symbol.style.opacity = opacity;
    
    // Случайная позиция на экране
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    symbol.style.left = x + "%";
    symbol.style.top = y + "%";
    
    // Случайный цвет — красный или голубой оттенок
    if (Math.random() > 0.7) {
        symbol.style.color = Math.random() > 0.5 ? "#ff2a4d" : "#00d9ff";
    }
    
    document.body.appendChild(symbol);
    
    // Длительность жизни символа от 100 до 500мс (резко появился-исчез)
    const lifetime = 100 + Math.random() * 400;
    setTimeout(() => {
        symbol.remove();
    }, lifetime);
}

// Запускаем появление каждые 2-6 секунд
function scheduleRSymbols() {
    const delay = 2000 + Math.random() * 4000;
    setTimeout(() => {
        spawnRSymbols();
        scheduleRSymbols();
    }, delay);
}

// Старт
scheduleRSymbols();
