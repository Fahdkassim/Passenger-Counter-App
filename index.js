let countEl = document.getElementById("count-el");
let summaryEl = document.getElementById("summary-el");
let count = 0;


function increment(){
count += 1;
countEl.textContent = count;
    console.log("Increment pushed")
}

function start(){
summaryEl.textContent += count + " - ";
count = 0;
countEl.textContent = 0;
}

function reset(){
    summaryEl.textContent = ""
}