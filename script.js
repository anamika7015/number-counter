const countlable = document.getElementById('countlable');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');
let count =0;
decreaseBtn.onclick = function(){
    count--;
    countlable.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countlable.textContent = count;
}

increaseBtn.onclick = function(){
    count++;
    countlable.textContent = count;
}