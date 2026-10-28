function showMessage(){
  let title = document.querySelector("#message");
  title.textContent = "押されました！";
}
let button = document.querySelector("#btn");
button.addEventListener("click", showMessage);

function showMessage2(){
  let title = document.querySelector("#message");
  title.textContent = "押してるよ！";
}
let button2 = document.querySelector("#btn2");
button2.addEventListener("click", showMessage2);

let count = 0;
function plusCount(){
  let counter = document.querySelector("#counter");
  currentCount++;
  counter.textContent = currentCount;
}
let currentCount = 0;
let plus = document.querySelector("#plus");
plus.addEventListener("click", plusCount);