
const areaSelect = document.querySelector("#areaSelect");
const message = document.querySelector("#message");
const coldestDay = document.querySelector("#coldestDay");

let temperatureChart = null;

// 地域コードと気温データの地域名
const regions = {
  "130000": { name: "東京都", tempArea: "東京" },
  "140000": { name: "神奈川県", tempArea: "横浜" },
  "270000": { name: "大阪府", tempArea: "大阪" },
  "016000": { name: "北海道", tempArea: "札幌" },
  "400000": { name: "福岡県", tempArea: "福岡" },
  "471000": { name: "沖縄県", tempArea: "那覇" }
};

// 最初に東京のデータを表示
loadWeather(areaSelect.value);

// 地域が変更されたら再取得
areaSelect.addEventListener("change", function () {
  loadWeather(areaSelect.value);
});

// 気温データ取得
async function loadWeather(code) {
  const region = regions[code];

  message.textContent = "気温データを読み込んでいます...";
  coldestDay.textContent = "";

  const url =
    "https://www.jma.go.jp/bosai/forecast/data/forecast/" +
    code + ".json";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("データ取得に失敗しました");
    }

    const data = await response.json();

    // 週間予報の気温データ
    const weeklyData = data[1].timeSeries[1];

    // 選択した地域のデータを探す
    const areaData = weeklyData.areas.find(function (area) {
      return area.area.name === region.tempArea;
    });

    if (!areaData) {
      throw new Error("地域の気温データがありません");
    }

    // 日付を取得
    const dates = weeklyData.timeDefines;

    // 日付を「11/26」の形式に変換
    const labels = dates.map(function (date) {
      const d = new Date(date);
      return (d.getMonth() + 1) + "/" + d.getDate();
    });

    // 最高気温
    const maxTemps = areaData.tempsMax.map(function (temp) {
      return temp === "" ? null : Number(temp);
    });

    // 最低気温
    const minTemps = areaData.tempsMin.map(function (temp) {
      return temp === "" ? null : Number(temp);
    });

    // グラフ描画
    drawChart(labels, maxTemps, minTemps);

    // 一番寒い日を表示
    showColdestDay(labels, minTemps);

    message.textContent = region.name + "の週間気温";

  } catch (error) {
    console.error(error);

    message.textContent =
      "気温データを取得できませんでした。";

    coldestDay.textContent = "";

    if (temperatureChart !== null) {
      temperatureChart.destroy();
      temperatureChart = null;
    }
  }
}

// グラフ描画
function drawChart(labels, maxTemps, minTemps) {
  const ctx = document.querySelector("#temperatureChart");

  // 前のグラフを削除
  if (temperatureChart !== null) {
    temperatureChart.destroy();
  }

  // 新しいグラフ
  temperatureChart = new Chart(ctx, {
    type: "line",

    data: {
      labels: labels,
      datasets: [
        {
          label: "最高気温",
          data: maxTemps,
          borderColor: "#f28b9b",
          backgroundColor: "#f28b9b",
          pointBackgroundColor: "#f28b9b",
          pointRadius: 5,
          borderWidth: 3,
          tension: 0.3,
          spanGaps: false
        },
        {
          label: "最低気温",
          data: minTemps,
          borderColor: "#6d92e8",
          backgroundColor: "#6d92e8",
          pointBackgroundColor: "#6d92e8",
          pointRadius: 5,
          borderWidth: 3,
          tension: 0.3,
          spanGaps: false
        }
      ]
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,

      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            usePointStyle: true,
            padding: 20
          }
        }
      },

      scales: {
        y: {
          title: {
            display: true,
            text: "気温（℃）"
          }
        },
        x: {
          title: {
            display: true,
            text: "日付"
          }
        }
      }
    }
  });
}

// 一番寒い日を表示
function showColdestDay(labels, minTemps) {
  let coldestTemp = Infinity;
  let coldestIndex = -1;

  // 最低気温を比較する
  for (let i = 0; i < minTemps.length; i++) {
    if (
      minTemps[i] !== null &&
      minTemps[i] < coldestTemp
    ) {
      coldestTemp = minTemps[i];
      coldestIndex = i;
    }
  }

  // 気温データがない場合
  if (coldestIndex === -1) {
    coldestDay.textContent = "最低気温のデータがありません。";
    return;
  }

  // 一番寒い日を表示
  coldestDay.textContent =
    "❄️ いちばん寒い日：" +
    labels[coldestIndex] +
    "（最低気温 " +
    coldestTemp +
    "℃）";
}
