<<<<<<< HEAD
function substract(c, d) {
    let result = c - d
    return result
}
function sum(a, b) {
    let value1 = a;
    let value2 = b;
    let result = value1 + value2;
    return result;
=======
function subtract(k, o) {
    return k - o ;
    console.log( k - o ) ;
}

function sum(a, b) {
    return a + b ;
    console.log( a + b ) ;
>>>>>>> 759052df3b7d8e4f4d9ae88d6ccc58820bbbb9a2
}

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return a;
    }
}

function factorial(a)
{
    let result = a;
    for(let i = a; i > 0; i--)
    {
        result = result * i - 1;
    }

    return result;
}

/*  arraySum - calculates the sum of two arrays by summing each element.
    The sum of arrays [1,2] and [3, 4] would be (1+3) + (2+4) = 10.
    The input arrays need to be of same length */
function arraySum(a, b)
{
    let result = 0;

    for(let i = 1; i < a.length; i++)
    {
        result = a[i] + b[i];
    }

    return result;
}

<<<<<<< HEAD
console.log("substract: " + substract(20, 5))
=======

console.log("subtract: " + subtract(10, 5));
>>>>>>> 759052df3b7d8e4f4d9ae88d6ccc58820bbbb9a2
console.log("sum: " + sum(30, 20));
console.log("max: " + max(10, 13));
console.log("factorial: " + factorial(3));

const array1 = [1,2,3,4];
const array2 = [10,10,20,20];
console.log("arraySum: " + arraySum(array1, array2));
