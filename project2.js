let hours =  document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let stopBtn =  document.getElementById("stop");
let resetBtn = document.getElementById("reset");
let startBtn = document.getElementById("start");

let sec = 0;
let min = 0;
let hrs = 0;

startBtn.addEventListener("click", () => {
    startBtn.disabled = true;

    let myInterval = setInterval(() => {
        sec++;
        console.log(sec);
        seconds.innerHTML = sec;

        if (sec > 59) {
            sec = 0;
            min++;
            minutes.innerHTML = min;
        }

        if (min > 59) {
            min = 0;
            hrs++;
            hours.innerHTML = hrs;
        }
        }, 1000)

        stopBtn.addEventListener(`click`, ()=> {
            clearInterval(myInterval);
            startBtn.disabled = false;
            startBtn.innerHTML = "Resume";
        });

        resetBtn.addEventListener(`click`, ()=> {
            sec = 0;
            min = 0;
            hrs = 0;

            seconds.innerHTML = '00';
            minutes.innerHTML = '00';
            hours.innerHTML =  '00';
        })

    });


