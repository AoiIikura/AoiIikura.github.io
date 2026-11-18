let zipcodeInput = document.querySelector("#zipcode");
let addressInput = document.querySelector("#address");
let messageArea = document.querySelector("#message");

async function fillAddress() {
let zipcode = zipcodeInput.value; // ハイフンなし7桁
let url = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`;
let response = await fetch(url);
let data = await response.json();
if (data.results === null) {
messageArea.textContent = "住所が見つかりませんでした";
} else {
let place = data.results[0];
addressInput.value = `${place.address1}${place.address2}${place.address3}`;
messageArea.textContent = "";
}
}
let searchButton = document.querySelector("#search");
searchButton.addEventListener("click", fillAddress);

