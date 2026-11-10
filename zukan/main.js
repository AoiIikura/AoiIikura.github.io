let characterList = document.querySelector("#characterList");

function showType(type) {
  characterList.innerHTML = "";
  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    if (type === "すべて" || character.type === type) {
      let rarityStars = "";
      for (let j = 0; j < character.rarity; j++) {
        rarityStars += "★";
      }
      let imageTag = `<img src="${character.image}" width="80">`;
      characterList.innerHTML += `<li class="character-card">${imageTag} <h3>${character.emoji}${character.name}</h3><p>${character.type} / 攻撃力 ${character.attack}</p><p>${rarityStars}</p></li>`;
    }
  }
}

function showRarity(rarity) {
  characterList.innerHTML = "";
  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    if (character.rarity === rarity) {
      let rarityStars = "";
      for (let j = 0; j < character.rarity; j++) {
        rarityStars += "★";
      }
      let imageTag = `<img src="${character.image}" width="80">`;

      characterList.innerHTML += `<li class="character-card">${imageTag} <h3>${character.emoji}${character.name}</h3><p>${character.type} / 攻撃力 ${character.attack}</p><p>${rarityStars}</p></li>`;
    }
  }
}

let selectedType = "すべて"; // 選んでいるタブ
let selectedRarity = "すべて"; // 選んでいるレアリティ
let searchWord = ""; // 検索欄の文字
let selectedSort = "default"; 

let sortSelect = document.querySelector("#sortSelect");
sortSelect.addEventListener("change", function() {    //変更刺されたときに実行する処理
  selectedSort = sortSelect.value;
  render();
});

function render() {
  let visibleCharacters = []; // 表示するキャラを集める
  for (let i = 0; i < characters.length; i++) {
    let character = characters[i];
    let matchesType = selectedType === "すべて" || character.type === selectedType;
    let matchesRarity = selectedRarity === "すべて" || character.rarity === selectedRarity;
    let matchesWord = character.name.includes(searchWord);
     if (matchesType && matchesRarity && matchesWord) {
     visibleCharacters.push(character);
      }
   }

  if (selectedSort === "nameAsc") {
  visibleCharacters.sort(function(a, b) {
    return a.name.localeCompare(b.name); // 名前順 (昇順)
  });
} else if (selectedSort === "nameDesc") {
  visibleCharacters.sort(function(a, b) {
    return b.name.localeCompare(a.name); // 名前順 (降順)
  });
} else if (selectedSort === "attackAsc") {
  visibleCharacters.sort(function(a, b) {
    return a.attack - b.attack; // 攻撃力順 (昇順)
  });
} else if (selectedSort === "attackDesc") {
  visibleCharacters.sort(function(a, b) {
    return b.attack - a.attack; // 攻撃力順 (降順)    
  });
}


  characterList.innerHTML = "";    // いったん空にする

  let count = document.querySelector("#count");
  count.textContent = `${characters.length}件中 ${visibleCharacters.length}件を表示`; // 件数を表示
  if (visibleCharacters.length === 0) {         //0件のときの表示
    characterList.textContent = "見つかりませんでした";
  } else {
  for (let i = 0; i < visibleCharacters.length; i++) {
    let character = visibleCharacters[i];
    let rarityStars = "";
    for (let j = 0; j < character.rarity; j++) {
    rarityStars += "★";
      }
    let imageTag = `<img src="${character.image}" width="80">`;
    characterList.innerHTML += `<li class="character-card">${imageTag} <h3>${character.emoji}${character.name}</h3><p>${character.type} / 攻撃力 ${character.attack}</p><p>${rarityStars}</p></li>`;
    }
  }
}

function showType(type) {
  selectedType = type;
  selectedRarity = "すべて"; // レアリティの選択をリセット
  render();
}
function showRarity(rarity) {
  selectedRarity = rarity;
  selectedType = "すべて"; // タイプの選択をリセット
  render();
}

// 検索欄
let searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", function() {
  searchWord = searchInput.value;
  render();
});
// 最初の表示
render();

function showAll() {
  showType("すべて");
}
function showFire() {
  showType("炎");
}
function showWater() {
  showType("水");
}
function showGrass() {
  showType("草");
}
function showRarity1() {
  showRarity(1);
}
function showRarity2() {
  showRarity(2);
}
function showRarity3() {
  showRarity(3);
}
function showRarity4() {
  showRarity(4);
}
function showRarity5() {
  showRarity(5);
}


let showAllButton = document.querySelector("#showAll");
let showFireButton = document.querySelector("#showFire");
let showWaterButton = document.querySelector("#showWater");
let showGrassButton = document.querySelector("#showGrass");
let showRarity1Button = document.querySelector("#showRarity1");
let showRarity2Button = document.querySelector("#showRarity2");
let showRarity3Button = document.querySelector("#showRarity3");
let showRarity4Button = document.querySelector("#showRarity4");
let showRarity5Button = document.querySelector("#showRarity5");

showAllButton.addEventListener("click", showAll);
showFireButton.addEventListener("click", showFire);
showWaterButton.addEventListener("click", showWater);
showGrassButton.addEventListener("click", showGrass);
showRarity1Button.addEventListener("click", showRarity1);
showRarity2Button.addEventListener("click", showRarity2);
showRarity3Button.addEventListener("click", showRarity3);
showRarity4Button.addEventListener("click", showRarity4);
showRarity5Button.addEventListener("click", showRarity5);



