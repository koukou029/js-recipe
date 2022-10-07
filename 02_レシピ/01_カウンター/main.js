const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const resetButton = document.getElementById("reset-button")
const twiceButton = document.getElementById("twice-button")
const powerButton = document.getElementById("power-button")
let count = 0

// ボタンをクリックしたときの処理を登録
plusButton.onclick = function() {
  // ここにクリック後の処理を書く
    // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

minusButton.onclick = function() {
  // ここにクリック後の処理を書く
    // count を更新
  count -= 1 
  // count を表示
  display.textContent = count
}

resetButton.onclick = function() {
  count = 0
  display.textContent = count

}

twiceButton.onclick = function() {
  count *= 2 
  display.textContent = count
}

powerButton.onclick = function() {
  count **= 2
  display.textContent = count
}