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


// ===== СИМВОЛЫ "R." КАК ГЛИТЧ =====
function spawnRSymbols() {
    const count = Math.floor(Math.random() * 5) + 1;
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            createRSymbol();
        }, Math.random() * 500);
    }
}

function createRSymbol() {
    const symbol = document.createElement("div");
    symbol.className = "r-symbol";
    symbol.textContent = "R.";
    
    const size = 12 + Math.random() * 108;
    symbol.style.fontSize = size + "px";
    
    const opacity = 0.05 + Math.random() * 0.45;
    symbol.style.opacity = opacity;
    
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    symbol.style.left = x + "%";
    symbol.style.top = y + "%";
    
    if (Math.random() > 0.7) {
        symbol.style.color = Math.random() > 0.5 ? "#8b0000" : "#a00000";
    }
    
    document.body.appendChild(symbol);
    
    const lifetime = 100 + Math.random() * 400;
    setTimeout(() => {
        symbol.remove();
    }, lifetime);
}

function scheduleRSymbols() {
    const delay = 2000 + Math.random() * 4000;
    setTimeout(() => {
        spawnRSymbols();
        scheduleRSymbols();
    }, delay);
}

scheduleRSymbols();


// ===== СМЕНА 👀👀👀 НА R. =====
function startTitleGlitch() {
    const title = document.getElementById("countdown-title");
    if (!title) return;
    
    const originalText = "👀👀👀";
    
    function scheduleNextGlitch() {
        const delay = 15000 + Math.random() * 25000;
        
        setTimeout(() => {
            title.textContent = "R.";
            
            const backDelay = 100 + Math.random() * 300;
            setTimeout(() => {
                title.textContent = originalText;
                
                if (Math.random() > 0.7) {
                    setTimeout(() => {
                        title.textContent = "R.";
                        setTimeout(() => {
                            title.textContent = originalText;
                        }, 150);
                    }, 200);
                }
                
                scheduleNextGlitch();
            }, backDelay);
        }, delay);
    }
    
    scheduleNextGlitch();
}

startTitleGlitch();


// ===== СПЛЕШИ (как в Minecraft) =====
async function loadSplash() {
    try {
        const response = await fetch("splashes.txt");
        const text = await response.text();
        
        const splashes = text
            .split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0);
        
        if (splashes.length === 0) return;
        
        const randomSplash = splashes[Math.floor(Math.random() * splashes.length)];
        
        const hasNoov = randomSplash.includes("Noov");
        
        let splashElement = document.getElementById("splash");
        if (!splashElement) {
            splashElement = document.createElement("div");
            splashElement.id = "splash";
            
            const h1 = document.querySelector("header h1");
            if (h1) {
                h1.parentNode.insertBefore(splashElement, h1.nextSibling);
            }
        }
        
        if (hasNoov) {
    const parts = randomSplash.split("Noov");
    
    splashElement.innerHTML = "";
    
    const noovSpans = [];
    
    parts.forEach((part, index) => {
        if (part) {
            splashElement.appendChild(document.createTextNode(part));
        }
        
        if (index < parts.length - 1) {
            const noovSpan = document.createElement("span");
            noovSpan.className = "noov-word";
            noovSpan.textContent = "Noov";
            splashElement.appendChild(noovSpan);
            noovSpans.push(noovSpan);
        }
    });
    
    // Регулярные глитчи в Biiv (пока страница открыта)
    function scheduleBiiv() {
        const delay = 3000 + Math.random() * 5000; // каждые 3-8 секунд
        
        setTimeout(() => {
            if (Math.random() < 0.12) { // шанс 12%
                noovSpans.forEach(span => {
                    span.textContent = "Biiv";
                    span.classList.add("biiv-word");
                });
                
                const backDelay = 300 + Math.random() * 300;
                setTimeout(() => {
                    noovSpans.forEach(span => {
                        span.textContent = "Noov";
                        span.classList.remove("biiv-word");
                    });
                }, backDelay);
            }
            
            // Продолжаем цикл
            scheduleBiiv();
        }, delay);
    }
    
    scheduleBiiv();
} else {
    splashElement.textContent = randomSplash;
}
        
        const rotation = -15 + Math.random() * 10;
        splashElement.style.transform = "rotate(" + rotation + "deg)";
        
    } catch (error) {
        console.log("Не удалось загрузить сплеши:", error);
    }
}

loadSplash();
