let characters = [
  {name: "ホゲーチ", type: "炎", attack: 70, emoji: "🔥", rarity: 1},
  {name: "みずみず", type: "水", attack: 45, emoji: "💧", rarity: 2},
  {name: "らいらい", type: "雷", attack: 110, emoji: "⚡", rarity: 3}
];
for (let i = 0; i < characters.length; i++) {
  let character = characters[i];
  console.log(`${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack}`);
}

let characterList = document.querySelector("#characterList");
for (let i = 0; i < characters.length; i++) {
  let character = characters[i];

  let rarityStars = "";
for ( let j = 0; j < character.rarity; j++) {
  rarityStars += "★";
  }
 characterList.innerHTML += `<li>${character.emoji}${character.name}(${character.type}) 攻撃力 ${character.attack} レアリティ${rarityStars}</li>`;
}




let sum = 0;
for (let i = 0; i < characters.length; i++) {
  let character = characters[i];
  sum += character.attack;
}
  let avarage = sum / characters.length;
console.log(`攻撃力の合計: ${sum}`);
console.log(`攻撃力の平均: ${avarage}`);


 
