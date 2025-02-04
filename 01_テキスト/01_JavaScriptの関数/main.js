// 練習問題 １
const plus1 = function (x) {
  return x + 1
}
// 関数名:plus1
// 引数:x
// 返り値:x + 1S

// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
const f1 = function (x) {
  return 3 * x + 1
}
// f2: 1, 10, 100, 1000, 10000, ...
const f2 = function (x) {
  return 10 ** x
}
// f3: 2, 14, 107, 1010, 10013, ...
const f3 = function (x) {
  return f1(x) + f2(x)
}

// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply を作成して正しく動くかテストしてください。
const multiply = function (x, y) {
  return x * y
}
// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound を作成して正しく動くかテストしてください。
const plusRound = function (x, y) {
  return Math.round(x + y)
}

const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log('${n}!!!!!!!')
    } else {
      console.log(n)
    }
  }
}




const figure = document.getElementById("figure")

figure.onclick = function() {
  figure.classList.toggle("rounded")
}

const display1 = document.getElementById("display")
const button = document.getElementById("button")

let count1 = 0

const countUp = function() {
  // count を更新
  count1 += 1
  // count を秒単位にして表示
  display1.textContent = count1 / 100
}

button.onclick = function() {
  // 10ms ごとに countUp を実行するように登録する
  setInterval(countUp, 10)
  button.textContent = "stop"
