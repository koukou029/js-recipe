//入力した文章をメモとして保存する
const inputElement = document.getElementById("memo-input")
//追加したメモを表示する
const container = document.getElementById("memo-container")
//投稿ボタンを機能させる
const addButton = document.getElementById("add-button")

// 追加ボタンを押したら
addButton.onclick = function() {
  // 入力欄の値（テキスト）をとりだして、 text にいれる
  const text = inputElement.value

  // memo を作成
  const memo = document.createElement("div")
  memo.className = "memo"
  memo.textContent = text

  // memo を container の中に追加する
  container.append(memo)

  // 入力欄を空にする
  inputElement.value = ""
}