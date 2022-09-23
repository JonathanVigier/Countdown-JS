let totalSeconds;
let interval;


function countDown() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const sec = seconds < 10 ? "0" + seconds : seconds;

    countdown.innerHTML = `<span>${minutes} : ${sec}</span>`;

    if (totalSeconds > 0) {
        totalSeconds--;
    } else {
        countdown.innerHTML = `<span>Countdown finished !</span>`;
        clearInterval(interval);
    }
    
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isNaN(field.value)) {
        alert('Veuillez rentrer un nombre entier !')
    } else {
        totalSeconds = field.value * 60;
        field.value = "";
        clearInterval(interval);
        interval = setInterval(countDown, 1000);
    }
})


