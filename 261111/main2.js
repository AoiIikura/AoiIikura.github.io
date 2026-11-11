console.log("===攻撃力が高い順===");
characters.sort ((a, b) =>  b.attack - a.attack);
characters.forEach(character => console.log(`${character.name}の攻撃力は${character.attack}`));

console.log("===攻撃力が低い順===");
characters.sort ((a, b) =>  a.attack - b.attack);
characters.forEach(character => console.log(`${character.name}の攻撃力は${character.attack}`));

console.log("===レア度が高い順===");
characters.sort ((a, b) => b.rarity - b.rarity);
characters.forEach(character => console.log(`${character.name}のレア度は${character.attack}`));




//「すべて」「炎」「水」「草」のタブを class="type-tab" で作り、querySelectorAll と forEach でまとめてつなぐ
// 押したタブのタイプだけが一覧に出るようにする（ showByType を使う）

// showByTypeは引数に文字列一致したcharacterだけを表示する。
// 「すべて」を渡した場合には全てのcharacterを表示する。
let showByType = (type) => {
  let characterList = document.querySelector("#character-list");
  characterList.innerHTML = "";
  characters.forEach(character => {
    if (type === "すべて" || character.type === type) {
      characterList.innerHTML += `<li>${character.name}（${character.type}）</li>`;
    }
  });
};

// ボタンに対応したタイプのキャラクターだけを表示するようにする
let typeTabs = document.querySelectorAll(".type-tab");
typeTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    let type = tab.textContent;
    showByType(type);
  })
});
// 検索欄を付け、入力するたびに名前に含むキャラだけを一覧に出す
let searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", () => {
  let characterList = document.querySelector("#character-list");
  let searchTerm = searchInput.value;

  characterList.innerHTML = "";
  characters.forEach(character => {
    if (character.name.includes(searchTerm)) {
      characterList.innerHTML += `<li>${character.name}（${character.type}）</li>`;
    }
  });
});
