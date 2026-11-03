let results = ["大吉", "中吉", "吉", "小吉", "凶"];
function pickOne(){
  let list =Math.floor(Math.random() * results.length);
  return results[list];
}

let count = 0;

function showOmikuji(){
  let title = document.querySelector("#message");
  let result = pickOne();
  title.textContent = result;


  let counter = document.querySelector("#counter");
  count++;
  counter.textContent = count + "回";         


  if(result === "大吉"){
    title.style.color = "blue";
  } else{
    title.style.color = "black";
  }
}

let button  = document.querySelector("#btn");
button.addEventListener("click", showOmikuji);
