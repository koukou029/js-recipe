// button 要素と click イベント
const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしたね")
}

button.onclick = alertMessage() // アラートが表示される
