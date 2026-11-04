let character = {
  name: "ホゲーチ",
  type: "炎",
  attack: 70,
  emoji: "🔥"
};
console.log(character.name);
console.log(character.attack);
console.log(`${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack}`);

character.attack = 20;
console.log(character);

function showMessage(){
  let title = document.querySelector("#message");
  title.textContent = `${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack}`;
}
let button = document.querySelector("#btn");
button.addEventListener("click", showMessage);

