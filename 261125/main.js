
const zipcodeInput = document.querySelector("#zipcode");
const searchBtn = document.querySelector("#searchBtn");
const message = document.querySelector("#message");

const prefectureInput = document.querySelector("#prefecture");
const cityInput = document.querySelector("#city");
const townInput = document.querySelector("#town");
const addressInput = document.querySelector("#address");

// 住所検索ボタンを押したとき
searchBtn.addEventListener("click", function () {
  searchAddress();
});

// 郵便番号検索
async function searchAddress() {

  // 入力された郵便番号を取得
  let zipcode = zipcodeInput.value;

  // ハイフンを削除
  zipcode = zipcode.replace(/-/g, "");

  // 空欄チェック
  if (zipcode === "") {
    showMessage("郵便番号を入力してください。", "error");
    return;
  }

  // 7桁チェック
  if (!/^\d{7}$/.test(zipcode)) {
    showMessage("郵便番号は半角数字7桁で入力してください。", "error");
    return;
  }

  // 検索中のメッセージ
  showMessage("住所を検索しています...", "loading");

  // APIのURLを作成
  const url = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + zipcode;

  try {
    // fetchでAPIにアクセス
    const response = await fetch(url);

    // JSONデータに変換
    const data = await response.json();

    // 住所が見つからなかった場合
    if (data.results === null) {
      showMessage("該当する住所が見つかりませんでした。", "error");
      clearAddress();
      return;
    }

    // 検索結果の1件目を取得
    const result = data.results[0];

    // 住所を入力欄に設定
    prefectureInput.value = result.address1;
    cityInput.value = result.address2;
    townInput.value = result.address3;

    // 成功メッセージ
    showMessage("住所を入力しました！", "success");

  } catch (error) {
    // 通信エラーの場合
    showMessage("通信に失敗しました。時間をおいて再度お試しください。", "error");
    clearAddress();
  }
}

// メッセージを表示する関数
function showMessage(text, type) {
  message.textContent = text;
  message.className = "mt-3 " + type + "-message";
}

// 住所をクリアする関数
function clearAddress() {
  prefectureInput.value = "";
  cityInput.value = "";
  townInput.value = "";
}
