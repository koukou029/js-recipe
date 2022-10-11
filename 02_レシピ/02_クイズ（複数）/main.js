//登場人物一覧
//問題文
const quizText = document.getElementById("quiz-text")
//画像
const quizImage = document.getElementById("quiz-image")
//各選択肢
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
//選択肢選択後のリアクション
const feedback = document.getElementById("feedback")
//問題番号＋次の問題への遷移
const nextQuizButton = document.getElementById("next-quiz")

// クイズの内容
let quizNumber = 0
const quizzes = [
  {
    text: "この星の名前は何でしょう？",
    image: "Ganymede.jpg",

    choices: [
      {
        text: "ゴリアテ",
        isCorrect: false,
        feedback:
          "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
      },
      {
        text: "ゼニガメ",
        isCorrect: false,
        feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
      },
      {
        text: "ガニメデ",
        isCorrect: true,
        feedback: "正解！ガニメデは、木星の第三惑星だよ！",
      },
      {
        text: "界王星",
        isCorrect: false,
        feedback: "残念！界王星は、北の銀河の界王様の住まいだよ。",
      },
    ],
  },
  {
    text: "この城の名前は？",
    image: "Maruoka.png",
    choices: [
      {
        text: "丸岡城",
        isCorrect: true,
        feedback: "正解！どこからどうみても丸岡城だね。",
      },
      {
        text: "丸亀城",
        isCorrect: false,
        feedback: "残念！どこからどうみても丸亀城ではないよ。",
      },

      {
        text: "丸子城",
        isCorrect: false,
        feedback: "残念！どこからどうみても丸子城ではないよ。",
      },
      {
        text: "弘前城",
        isCorrect: false,
        feedback: "残念！どこからどうみても弘前城ではないよ。",
      },
    ],
  },
  {
    text: "いま、何問目？",
    image: "Two.jpeg",
    choices: [
      {
        text: "１",
        isCorrect: false,
        feedback: "残念！ 二つ少ないよ。",
      },
      {
        text: "２",
        isCorrect: false,
        feedback: "残念！引っかけだよ。",
      },
      {
        text: "3",
        isCorrect: true,
        feedback: "正解！１でも2でも4でもないよ！",
      },

      {
        text: "4",
        isCorrect: false,
        feedback: "残念！ひとつ多いよ。",
      },
    ],
  },
]

//共通の処理1
// quiz を画面に表示する関数
const reloadQuiz = function (quizNumber) {
  const quiz = quizzes[quizNumber]
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text

  // フィードバックを削除
  feedback.textContent = ""

  // 次の問題ボタンを隠す
  nextQuizButton.classList.add("hidden")
}

//共通の処理2
// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  const choice = quizzes[quizNumber].choices[choiceNumber]

  feedback.textContent = choice.feedback

  // 正解ならば……
  if (choice.isCorrect) {
    if (quizNumber < quizzes.length - 1) {
      // 次の問題があれば、次の問題ボタンを表示
      nextQuizButton.classList.remove("hidden")
    } else {
      // 次の問題がなければ、結果を表示
    }
  }
}

choice1.onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}

choice4.onclick = function () {
  // 3 番目の選択肢を選択
  choose(3)
}

// 次の問題ボタンを押したら
nextQuizButton.onclick = function () {
  // 問題番号を１増やす
  quizNumber += 1
  // quizNumber番目の問題を読み込む
  reloadQuiz(quizNumber)
}

// 0番目のクイズを表示
reloadQuiz(0)
