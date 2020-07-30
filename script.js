const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 10000;
const breathingTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const breathAnimation = () => {
    text.innerText = 'Breath IN all positivity';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breath OUT the negativity';
            container.className = 'container shrink';
        }, holdTime);
    }, breathingTime);
}

setInterval(breathAnimation, totalTime);

breathAnimation();