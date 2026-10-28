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

//演習2
for (let i = 0; i <= 10; i++) {
  console.log(i); 
}

let sum = 0;
for(let i = 1; i <=100; i++){
  sum = sum + i;
}
console.log(sum)    

for (let i = 0; i <= 50; i += 5) {
  console.log(i); 
}

for(let i = 1; i <=30; i++)
  if( i % 3 ===0 && i % 5 ===0){
  console.log("FezzBuzz");
  }else if(i % 3 ===0){
  console.log("Fizz");
  }else if(i % 5 ===0){
    console.log("Buzz");
  }else{
    console.log(i);
  }


//演習3
let favorite = ["りんご","バナナ","ゼル伝","エーペックス","おしゃぶり昆布"];
for (let i = 0; i < favorite.length; i++){
  console.log(favorite[i]);
}

let scores = [71,85,64,90,58];
let scoreSum = 0;
for(let i = 0; i <scores.length; i++){
  scoreSum += scores[i];
}
let average = scoreSum /scores.length;
console.log("合計:" + scoreSum);
console.log("平均:" + average);

let results