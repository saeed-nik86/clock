let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let adio = new Audio("./Document files/alarm.mp3");
let setTime;
let mode = 0;
let btn = document.querySelector(".btn");

for ( let i = 0; i < 24 ; i++){
    let option = document.createElement("option");
    i < 10 ? i = "0" + i : i;
    option.innerText = `${i}`;
    hours.appendChild(option);
}
for ( let i = 0; i < 60 ; i++){
    let option = document.createElement("option");
    i < 10 ? i = "0" + i : i;
    option.innerText = `${i}`;
    minutes.appendChild(option);
}


setInterval(() =>{
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    h < 10 ? h = "0" + h : h;
    m < 10 ? m = "0" + m : m;
    s < 10 ? s = "0" + s : s;
    document.querySelector("h1").innerText = `${h}: ${m}: ${s}`;
    if (setTime == `${h}:${m}`){
        adio.play();
        document.querySelector(".clock-img").style.animation = "alarm 0.2s infinite";

    }
}, 1000)



btn.addEventListener("click", (e) => {
    mode ++;
    if (mode % 2 == 0){
        btn.innerText = "Time recording";
        adio.pause();
        setTime = "";
        document.querySelector(".clock-img").style.animation = "";
    }
    else{
        if (hours.value == "hours" || minutes.value == "minutes"){
            alert("شما زمان را به درستی انتخاب نکردید ");
            }
        else{
            btn.innerText = "stop";
        setTime = `${hours.value}:${minutes.value}`;
        }
            
    }
})