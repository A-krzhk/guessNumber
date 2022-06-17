'use strict';
let secretNumber = Math.floor(Math.random() * 20) + 1,
    scoreNum = document.querySelector('.score'),
    scoreBest = document.querySelector('.highscore');
if (localStorage.getItem('scoreBest')) {
    scoreBest.textContent = localStorage.getItem('scoreBest');
}

// Считывание данных из инпута и вывод сообщений-подсказок
document.querySelector('.check')
    .addEventListener('click', () => {
        let guessingNumber = document.querySelector('.number-input').value,
            guessMess = document.querySelector('.guess-message'),
            blockSecret = document.querySelector('.question'),
            bodyBg = document.querySelector('body');
        if (!Number(guessingNumber)) {
            guessMess.textContent = 'Введите число от 1 до 20!';
        } else if (guessingNumber > secretNumber) {
            guessMess.textContent = 'Слишком много!';
            score(scoreNum, guessMess);
        } else if (guessingNumber < secretNumber) {
            guessMess.textContent = 'Слишком мало!';
            score(scoreNum, guessMess);
        } else if (guessingNumber == secretNumber) {
            guessMess.textContent = 'Победа!';
            bodyBg.style.backgroundColor = '#9de187';
            blockSecret.textContent = secretNumber;
            blockSecret.style.width = '300px';
            if (scoreNum.textContent > scoreBest.textContent) {
                localStorage.setItem('scoreBest', scoreNum.textContent);
            }
            scoreBest.textContent = localStorage.getItem('scoreBest');
        }
        // Начать игру сначала
        document.querySelector('.again').addEventListener('click', () => {
            window.location.reload();
        });
    });

// Подсчет очков в игре
function score(num, guessMess) {
    let current = +num.textContent;
    if (current > 1) {
        current--;
        num.textContent = current;
    } else {
        num.textContent = '0';
        guessMess.textContent = 'Вы проиграли!';
    }
}