let results = ["ゲーム", "アニメ", "HANA", "映画", "BTS"];
function pickOne(){
  let list =Math.floor(Math.random() * results.length);
  return results[list];
}

function showFavorite(){
  let title = document.querySelector("#message");
  title.textContent = pickOne();
}
let button  = document.querySelector("#btn");
button.addEventListener("click", showFavorite);