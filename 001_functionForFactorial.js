function firstFactorial(num) {
    var factorial = 1
    for (var i = 1; i <= num; i++) {
    factorial *= i
    }

    return factorial
}

// keep the function "readline()" call here in coderbyte to see the output
// firstFactorial(readline())
console.log(firstFactorial(4))