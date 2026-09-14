* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #0f0f1e;
    color: #e0e0e0;
    line-height: 1.6;
    min-height: 100vh;
}

/* Анимированный градиент - общий */
@keyframes colorShift {
    0% { color: #ff2a4d; border-color: #ff2a4d; }
    50% { color: #00d9ff; border-color: #00d9ff; }
    100% { color: #ff2a4d; border-color: #ff2a4d; }
}

@keyframes borderShift {
    0% { border-color: #ff2a4d; box-shadow: 0 0 20px rgba(255, 42, 77, 0.5); }
    50% { border-color: #00d9ff; box-shadow: 0 0 20px rgba(0, 217, 255, 0.5); }
    100% { border-color: #ff2a4d; box-shadow: 0 0 20px rgba(255, 42, 77, 0.5); }
}

@keyframes textGlow {
    0% { text-shadow: 0 0 20px rgba(255, 42, 77, 0.7); }
    50% { text-shadow: 0 0 20px rgba(0, 217, 255, 0.7); }
    100% { text-shadow: 0 0 20px rgba(255, 42, 77, 0.7); }
}

header {
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    padding: 60px 20px;
    text-align: center;
    border-bottom: 3px solid #ff2a4d;
    animation: borderShift 4s infinite ease-in-out;
}

header h1 {
    font-size: 48px;
    margin-bottom: 10px;
    animation: colorShift 4s infinite ease-in-out, textGlow 4s infinite ease-in-out;
}

header p {
    font-size: 18px;
    color: #a0a0a0;
}

main {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
}

#countdown-section {
    text-align: center;
    padding: 40px 20px;
    background: linear-gradient(135deg, #1a1a2e, #0f0f1e);
    border-radius: 15px;
    border: 2px solid #ff2a4d;
    margin-bottom: 50px;
    animation: borderShift 4s infinite ease-in-out;
}

#countdown-section h2 {
    font-size: 28px;
    margin-bottom: 30px;
    animation: colorShift 4s infinite ease-in-out, textGlow 4s infinite ease-in-out;
}

.countdown {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.time-block {
    background: #0a0a15;
    padding: 20px 25px;
    border-radius: 10px;
    min-width: 100px;
    border: 1px solid #2a2a4e;
    transition: transform 0.3s;
    animation: borderShift 4s infinite ease-in-out;
}

.time-block:hover {
    transform: translateY(-5px);
}

.time-block span {
    font-size: 48px;
    font-weight: bold;
    display: block;
    font-family: monospace;
    animation: colorShift 4s infinite ease-in-out, textGlow 4s infinite ease-in-out;
}

.time-block p {
    color: #a0a0a0;
    font-size: 14px;
    margin: 10px 0 0 0;
    text-transform: uppercase;
    letter-spacing: 2px;
}

footer {
    text-align: center;
    padding: 30px;
    background: #0a0a15;
    color: #606060;
    border-top: 1px solid #1a1a2e;
}

@media (max-width: 600px) {
    header h1 {
        font-size: 32px;
    }
    .time-block span {
        font-size: 32px;
    }
    .time-block {
        padding: 15px;
        min-width: 70px;
    }
}
