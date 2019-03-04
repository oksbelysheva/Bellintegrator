let time = 5,
    timerId,
    btnPause,
    btnNext,
    nextPage,
    prevPage,
    state = true;

function timer() {
    document.getElementById("time").innerHTML = time;
    time--;
    if (time < 0) {
        if (nextPage !== undefined){
            window.open(nextPage, '_self');
        }else{
            stopTimer();
            if (confirm("Начать отсчет заново?"))
                window.open("index.html", '_self');
            else{
                window.open("index4.html", '_self');
            }
        }
    }
}

function stopTimer() {
    clearInterval(timerId);
}

function startTimer(){
    timerId = setInterval(timer, 1000);
}

window.addEventListener('DOMContentLoaded', function() {
    btnPause = document.querySelector("#btnPause");
    btnNext = document.querySelector("#btnNext");
    btnPrev = document.querySelector("#btnPrev");

    btnPause.onclick = function(){
        if (btnPause.textContent == "Stop ||")
        {
            btnPause.textContent = "Play >";
            stopTimer();
        }
        else{
            btnPause.textContent = "Stop ||";
            startTimer();
        }
    }
    
    btnNext.onclick = function(){
        window.open(nextPage, '_self');
    }

    btnPrev.onclick = function(){
        window.open(prevPage, '_self');
    }
    timer();
    if (state){
        startTimer();
    }
});


