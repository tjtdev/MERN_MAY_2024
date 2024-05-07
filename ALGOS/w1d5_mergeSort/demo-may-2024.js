// factorial
// 4! 4*3*2*1
// 3! 3*2*1
// 2! 2*1
// 1! 1

function factorial(num) {
    // 1. base case - exit condition
    if (num === 1) {
        return 1;
    }

    // logic
    return num * factorial(num - 1);
}


console.log(

    factorial(3)
);
