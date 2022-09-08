//Select elements from html

const watch = document.querySelector('.watch');
const startTiner = document.querySelector('.startTimer');
const stopTimer = document.querySelector('.stopTimer');
const clearTimer = document.querySelector('.clearTimer');



// function seconds
function getTimeFromSeconds(seconds){
    let date = new Date(seconds * 1000);// está em milesimo de segundos por isso multiplica por mil
    return date.toLocaleTimeString('pt-BR',{
        hour12: false, 
        timeZone: 'GMT'
    });
}
// variavel que armazena os segundos
let seconds = 0;

//variavel que armazena o set interval
let timer;

// função que inicia o relogio
function startWatch(){
    timer = setInterval(()=>{
        seconds++;
        watch.innerHTML = getTimeFromSeconds(seconds);
    },1000);
}

// functions from listeners

startTiner.addEventListener('click',(event)=>{
    watch.classList.remove('stop')
    clearInterval(timer);
    startWatch();
});

stopTimer.addEventListener('click',(event)=>{
    clearInterval(timer);
    watch.classList.add('stop')
});

clearTimer.addEventListener('click',(event)=>{
    watch.classList.remove('stop')
    clearInterval(timer);
    watch.innerHTML = '00:00:00';
    seconds = 0;
});





