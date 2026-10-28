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
function showMessage3(){
  let title = document.querySelector("#message");
  count = count + 1;
  title.textContent = count;
}
let button3 = document.querySelector("#btn3");
button3.addEventListener("click", showMessage3);