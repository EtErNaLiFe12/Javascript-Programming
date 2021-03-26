// 카운터 

const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

// console.log(number.innerText);
// console.log(increase.offsetTop);
// console.log(decrease.id);

increase.onclick = () => {
   const current = parseInt(number.innerText, 10);
   number.innerText = current + 1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
} 

// 모달

const open = document.getElementById('open')
const close = document.getElementById('close')
const modal = document.querySelector('.modal-wrapper');


open.onclick = () => {
    modal.style.display = "flex";
}

close.onclick = () => {
    modal.style.display = "none";
}