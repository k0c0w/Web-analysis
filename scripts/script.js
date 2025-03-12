// Выбор элементов из DOM
const startButton = document.getElementById('start-button');
const typewriterLeft = document.getElementById('typewriter-left');
const typewriterRight = document.getElementById('typewriter-right');
const optimusTheme = document.getElementById('optimus-theme');
const overlay = document.querySelector('.overlay');
const particlesContainer = document.querySelector('.particles-container');
const mainText = document.querySelector('.main_text');
const title = mainText.querySelector('h1');
const description = mainText.querySelector('.description');

// Список уравнений с решениями
const equationsWithSolutions = [
    { equation: "x + 5 = 10", solution: ["    x + 5 - 5 = 10 - 5", "    x = 5"] },
    { equation: "2x² - 8 = 0", solution: ["    2x² = 8", "    x² = 4", "    x = ±2"] },
    { equation: "3x - 9 = 0", solution: ["    3x = 9", "    x = 3"] },
    { equation: "x/2 + 3 = 7", solution: ["    x/2 = 7 - 3", "    x/2 = 4", "    x = 8"] },
    { equation: "x² + 2x + 1 = 0", solution: ["    (x + 1)² = 0", "    x + 1 = 0", "    x = -1"] },
    { equation: "4x + 2 = 18", solution: ["    4x = 18 - 2", "    x = 16", "    x = 4"] },
    { equation: "x² - 5x + 6 = 0", solution: ["    (x - 2)(x - 3) = 0", "    x - 2 = 0  or  x - 3 = 0", "    x = 2  or  x = 3"] },
    { equation: "2x + 3y = 12", solution: ["    3y = 12 - 2x", "    y = (12 - 2x)/3"] },
    { equation: "sin(x) = 0.5", solution: ["    x = arcsin(0.5)", "    x = π/6  or  5π/6"] },
    { equation: "log₂(x) = 3", solution: ["    x = 2³", "    x = 8"] },
    { equation: "x² - 4x + 4 = 0", solution: ["    (x - 2)² = 0", "    x - 2 = 0", "    x = 2"] },
    { equation: "√(x + 1) = 3", solution: ["    x + 1 = 9", "    x = 8"] },
    { equation: "2x² + 3x - 2 = 0", solution: ["    D = 3² - 4·2·(-2) = 25", "    x = (-3 ± √25)/(2·2)", "    x = 1  or  x = -2"] },
    { equation: "cos(x) = -1", solution: ["    x = arccos(-1)", "    x = π"] },
    { equation: "e^(2x) = 1", solution: ["    2x = ln(1)", "    2x = 0", "    x = 0"] },
    { equation: "x³ - 8 = 0", solution: ["    x³ = 8", "    x = ³√8", "    x = 2"] },
    { equation: "tan(x) = 1", solution: ["    x = arctan(1)", "    x = π/4"] },
    { equation: "5x - 2 = 13", solution: ["    5x = 15", "    x = 3"] },
    { equation: "ln(x) = 2", solution: ["    x = e²", "    x ≈ 7.39"] },
    { equation: "x² + 6x + 9 = 0", solution: ["    (x + 3)² = 0", "    x + 3 = 0", "    x = -3"] }
];

// Настройки для эффекта печати
const typingSpeed = 40;
const maxLines = 20;
const initialLines = 15;

// Генерация текста уравнения с решением
function generateEquationText() {
    const randomIndex = Math.floor(Math.random() * equationsWithSolutions.length);
    const { equation, solution } = equationsWithSolutions[randomIndex];
    return [equation, ...solution].join('\n') + '\n\n';
}

// Заполнение столбца начальными уравнениями
function fillColumn(targetTypewriter) {
    for (let i = 0; i < initialLines; i++) {
        const textSpan = document.createElement('span');
        textSpan.textContent = generateEquationText();
        targetTypewriter.appendChild(textSpan);
    }
}

// Анимация печати уравнения
function typeEquation(column, targetTypewriter) {
    const randomIndex = Math.floor(Math.random() * equationsWithSolutions.length);
    const { equation, solution } = equationsWithSolutions[randomIndex];
    const fullText = [equation, ...solution].join('\n') + '\n\n';

    const textSpan = document.createElement('span');
    textSpan.textContent = '';
    targetTypewriter.appendChild(textSpan);

    const lineHeight = parseFloat(getComputedStyle(targetTypewriter).lineHeight);
    const maxHeight = targetTypewriter.offsetHeight;
    const currentHeight = targetTypewriter.scrollHeight;
    if (currentHeight > maxHeight) {
        const firstChild = targetTypewriter.firstChild;
        if (firstChild) {
            firstChild.classList.add('fade-out');
            setTimeout(() => firstChild.remove(), 500);
        }
    }

    let index = 0;
    const chars = fullText.split('');

    const type = () => {
        if (index < chars.length) {
            textSpan.textContent += chars[index];
            targetTypewriter.scrollTop = targetTypewriter.scrollHeight;
            index++;
            setTimeout(type, typingSpeed);
        }
    };
    type();
}

// Одновременная печать в обоих столбцах
function typeSimultaneously() {
    typeEquation('left', typewriterLeft);
    typeEquation('right', typewriterRight);
    setTimeout(typeSimultaneously, 2000);
}

// Функция для создания искр
function createSparks(count, x, y) {
    for (let i = 0; i < count; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        particlesContainer.appendChild(spark);
        setTimeout(() => spark.remove(), 2000); // Удаление после анимации
    }
}

// Функция для создания частиц
function createParticles(count) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('transform-particle');
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particlesContainer.appendChild(particle);
        setTimeout(() => particle.remove(), 3000); // Удаление после анимации
    }
}

// Функция для создания взрыва
function createExplosion(x, y) {
    const explosion = document.createElement('div');
    explosion.classList.add('explosion');
    explosion.style.left = `${x}px`;
    explosion.style.top = `${y}px`;
    particlesContainer.appendChild(explosion);
    setTimeout(() => explosion.remove(), 1000); // Удаление после анимации
}

// Инициализация при загрузке страницы
window.addEventListener('load', () => {
    fillColumn(typewriterLeft);
    fillColumn(typewriterRight);

    typewriterLeft.style.opacity = '0';
    typewriterRight.style.opacity = '0';
    setTimeout(() => {
        typewriterLeft.style.transition = 'opacity 1s ease';
        typewriterRight.style.transition = 'opacity 1s ease';
        typewriterLeft.style.opacity = '1';
        typewriterRight.style.opacity = '1';
    }, 100);

    setTimeout(typeSimultaneously, 1000);
});

// Эпичная анимация трансформации
startButton.addEventListener('click', () => {
    // Отключаем повторные клики
    startButton.style.pointerEvents = 'none';

    // Запуск аудио
    if (optimusTheme) {
        optimusTheme.play()
            .then(() => {
                // Начало анимации
                overlay.classList.add('active');
                startButton.classList.add('transforming');
                title.classList.add('transforming');
                description.classList.add('transforming');
                typewriterLeft.classList.add('transforming');
                typewriterRight.classList.add('transforming');

                // Таймлайн анимации (11 секунд)
                setTimeout(() => createExplosion(window.innerWidth / 2, window.innerHeight / 2), 1000); // Взрыв в центре через 1 сек
                setTimeout(() => createSparks(20, window.innerWidth / 2, window.innerHeight / 2), 1500); // Искры через 1.5 сек
                setTimeout(() => createParticles(30), 2000); // Частицы через 2 сек
                setTimeout(() => createSparks(15, window.innerWidth / 3, window.innerHeight / 3), 3000); // Искры в углу через 4 сек
                setTimeout(() => createExplosion(window.innerWidth * 0.75, window.innerHeight * 0.25), 4000); // Взрыв в углу через 6 сек
                setTimeout(() => createParticles(20), 4350); // Еще частицы через 7 сек
                setTimeout(() => createSparks(25, window.innerWidth / 2, window.innerHeight * 0.75), 4950); // Искры внизу через 9 сек

                // Переход на новую страницу через 11 секунд
                setTimeout(() => {
                    window.location.href = 'math.html';
                }, 5300);
            })
            .catch(error => {
                console.error("Ошибка воспроизведения:", error);
                window.location.href = 'math.html';
            });

            // Сборка таблицы из элементов (на 8-й секунде)
            setTimeout(() => {
                startButton.classList.remove('moving');
                title.classList.remove('moving');
                description.classList.remove('moving');
                typewriterLeft.classList.remove('moving');
                typewriterRight.classList.remove('moving');

                startButton.classList.add('to-table');
                title.classList.add('to-table');
                description.classList.add('to-table');
                typewriterLeft.classList.add('to-table-left');
                typewriterRight.classList.add('to-table-right');
                extraTopLeft.classList.add('to-table');
                extraTopRight.classList.add('to-table');
                extraBottomLeft.classList.add('to-table');
                extraBottomRight.classList.add('to-table');

                tableContainer.classList.add('active');
            }, 8000);

    } else {
        console.error("Элемент audio не найден");
        window.location.href = 'math.html';
    }
});

