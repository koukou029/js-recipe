const fizzBuzz = function (number) {
  //100までの数を表示

  for (let n = 1; n <= number; n++) {
    //3の倍数ならfizzと表示
    if (number % 3 === 0) {
      console.log("fizz")
    }
    //5の倍数ならbuzzと表示
    if (number % 5 === 0) {
      console.log("buzz")
    }
    //15の倍数ならfizzbuzzと表示
    if (number % 15 === 0) {
      console.log("fizzbuzz")
    }
    //それ以外ならそのまま表示
    else {
      console.log(number)
    }
  }
}
