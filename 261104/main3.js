let characters = [
  {name: "ホゲーチ", type: "炎", attack: 70, emoji: "🔥", rarity: 1},
  {name: "みずみず", type: "水", attack: 45, emoji: "💧", rarity: 2},
  {name: "らいらい", type: "雷", attack: 110, emoji: "⚡", rarity: 3},
  {name: "みずくさ", type: "水", attack: 30, emoji: "💧", rarity: 1},
  {name: "ダイア―", type: "雷", attack: 90, emoji: "⚡", rarity: 2},
  {name: "フライアー", type: "炎", attack: 120, emoji: "🔥", rarity: 3},
  {name: "あちち", type: "炎", attack: 55, emoji: "🔥", rarity: 2},
];


let characterList = document.querySelector("#characterList");

function showType(type) {
  characterList.innerHTML = "";
  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    if (type === "すべて" || character.type === type) {
      let rarityStars = "";
      for ( let j = 0; j < character.rarity; j++) {
      rarityStars += "★";
      }
      characterList.innerHTML += `<li>${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack} ${rarityStars}</li>`;
    }
  }
}

function showByAttackGreaterEqual(attack){
  characterList.innerHTML = "";
  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    if (character.attack >= attack) {
      characterList.innerHTML += `<li>${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack}</li>`;
    }
  }
}

function showAll() {
  showType("すべて");
}
function showFire() {
  showType("炎");
}
function showWater() {
  showType("水");
}
function showLightning() {
  showType("雷");
}
function showAttackGreaterEqual() {
  showByAttackGreaterEqual(60);
}
let showAllButton = document.querySelector("#showAll");
let showFireButton = document.querySelector("#showFire");
let showWaterButton = document.querySelector("#showWater");
let showLightningButton = document.querySelector("#showLightning");
let showAttackGreaterEqualButton = document.querySelector("#showAttackGreaterEqual");

showAllButton.addEventListener("click", showAll);
showFireButton.addEventListener("click", showFire);
showWaterButton.addEventListener("click", showWater);
showLightningButton.addEventListener("click", showLightning);
showAttackGreaterEqualButton.addEventListener("click", showAttackGreaterEqual);
