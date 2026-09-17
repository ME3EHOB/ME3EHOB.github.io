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
