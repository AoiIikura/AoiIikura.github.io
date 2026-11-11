console.log("===攻撃力が高い順===");
characters.sort(function (a, b) {
  return b.attack - a.attack;
});
for (let i =0; i < characters.length; i++){
  let character = characters[i];
  console.log(`${character.name}$の攻撃力は${character.attack}$`);
  }

console.log("===攻撃力が低い順===");
  characters.sort(function (a, b){
    return a.attack - b.attack;
  });
  for (let i =0; i < characters.length; i++){
  let character = characters[i];
  console.log(`${character.name}$の攻撃力は${character.attack}$`);
  }

  console.log("===レア度が高い順===");
  characters.sort(function (a, b){
    return b.rarity - b.rarity;
  });
  for (let i =0; i < characters.length; i++){
  let character = characters[i];
  console.log(`${character.name}$のレア度は${character.rarity}$`);
  }


console.log("===コピーしてcharactersの順を変更===");
let sortedCharacters = characters.slice(); 
sortedCharacters.sort(function(a, b){
  return a.attack - b.attack;
});
console.log("==characters==");
for(let i = 0; i < characters.length; i++){
  console.log(characters[i].name + "の攻撃力は" + characters[i].attack);
}
console.log("==sortedCharacters==");
for(let i = 0; i < sortedCharacters.length; i++){
  console.log(sortedCharacters[i].name + "の攻撃力は" + sortedCharacters[i].attack);
}

let characterList = document.querySelector("#character-list");
let sortByAttackDescButton = document.querySelector("#sort-by-attack-desc-button");
let sortByAttackAscButton = document.querySelector("#sort-by-attack-asc-button");

sortByAttackDescButton.addEventListener("click", function() {
  characterList.innerHTML = "";
  let sortedCharacters = characters.slice();
  sortedCharacters.sort(function(a, b) {
    return b.attack - a.attack;
  });
  for (let i = 0; i < sortedCharacters.length; i++) {
    characterList.innerHTML += `<li>${sortedCharacters[i].name}の攻撃力は${sortedCharacters[i].attack}</li>`;
  }
});

sortByAttackAscButton.addEventListener("click", function() {
  characterList.innerHTML = "";
  let sortedCharacters = characters.slice();
  sortedCharacters.sort(function(a, b) {
    return a.attack - b.attack;
  });
  for (let i = 0; i < sortedCharacters.length; i++) {
    characterList.innerHTML += `<li>${sortedCharacters[i].name}の攻撃力は${sortedCharacters[i].attack}</li>`;
  }
});