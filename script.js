// Таймер обратного отсчёта до 22 апреля
function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    
    // 22 апреля текущего года (месяцы с 0: 3 = апрель)
    let targetDate = new Date(currentYear, 9, 22, 0, 0, 0);
    
    // Если 22 апреля уже прошло - берём следующий год
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

// Обновляем каждую секунду
setInterval(updateCountdown, 1000);
updateCountdown();
