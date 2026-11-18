let characters = [];
let dataUrl = "https://morimorihoge.github.io/teu2026f/characters.json";
async function loadCharacters() {
let response = await fetch(dataUrl);
characters = await response.json(); // JSON を配列に直す
render()
}

loadCharacters();

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
      characterList.innerHTML += `<li class="character-card">${imageTag} <h3>${character.name}</h3><p>${character.type} / 攻撃力 ${character.attack}</p><p>${rarityStars}</p></li>`;
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

      characterList.innerHTML += `<li class="character-card">${imageTag} <h3>${character.name}</h3><p>${character.type} / 攻撃力 ${character.attack}</p><p>${rarityStars}</p></li>`;
    }
  }
}

let selectedType = "すべて"; 
let selectedRarity = "すべて"; 
let searchWord = ""; 
let selectedSort = "default"; 

//選択したタイプ、レアと名前をもとにキャラを絞る
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




//並び替え
if (selectedSort === "attackAsc") {
  visibleCharacters.sort((a, b) => a.attack - b.attack);
} else if (selectedSort === "attackDesc") {
  visibleCharacters.sort((a, b) => b.attack - a.attack);
}else if(selectedSort === "rarityDesc") {
  visibleCharacters.sort((a, b) => b.rarity - a.rarity);
}

  characterList.innerHTML = "";    // いったん空にする

//並び替えの選択肢が変更されたとき
let sortSelect = document.querySelector("#sortSelect");
sortSelect.addEventListener("change", function() {   
  selectedSort = sortSelect.value;
  render();
});

// 検索欄
let searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", function() {
  searchWord = searchInput.value;
  render();
});


//件数表示し、検索結果に応じてキャラを表示する
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
    characterList.innerHTML += `<li class="character-card">${imageTag} <h3>${character.name}</h3><p>${character.type} / 攻撃力 ${character.attack}</p><p>${rarityStars}</p></li>`;
    }
  }
}




//ボタンをつなげてる
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

let typeTabs = document.querySelectorAll(".type-tab");
typeTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    let type = tab.textContent;
    showType(type);
  });
});
let rarityTabs = document.querySelectorAll(".rarity-tab");
rarityTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    let rarity = tab.textContent.length;
    showRarity(rarity);
  });
});


//選択したボタンに色を付ける
let buttons = document.querySelectorAll(".type-tab,.rarity-tab");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {      //ボタンがクリックされたときに処理を実行
    buttons.forEach(function(btn) {
    btn.classList.remove("btn-info");     //ボタンについていたativeが消去される
    btn.classList.add("btn-default");
  });
    button.classList.remove("btn-default");   //色を変える役割。実際にクリックされたボタンを指すからbutton
    button.classList.add("btn-info");
  });
});

render();

