// Normal fibonacci.

function fibonacci(n) {
    let a = 0;
    let b = 1;
    if(n < 0) {
        console.log("The number must be bigger than 0")
    } else {

    for(let i = 1; i <= n; i++) {
      let nextTurn = a + b
        a = b;
        b = nextTurn;
    }
    return a;
}
}


// Fibonacci with recursion.

function fibonacciRec(n) {
    if( n < 0) {
        console.log("The number must be bigger than 0")
    } else if( n < 2){
        return n
    }else {
        return fibonacciRec(n - 1) + fibonacciRec(n - 2);
    }
}


// Merge-Sort, it will be written in 2 functions, one for sorting of the arrays, and one for merging them.

function merge(left, right) {
    let finalArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  // The function that will do the sorting, there is no recursion here.
while(leftIndex < left.length && rightIndex < right.length) {
  if(left[leftIndex] < right[rightIndex]) {
    finalArray.push(left[leftIndex])
    leftIndex++
  } else {
    finalArray.push(right[rightIndex])
    rightIndex++
  }
}

if(left[leftIndex]) {
    let elementsLeft = left.slice(leftIndex)
    finalArray.push(...elementsLeft)
} else {
    let elementsLeft = right.slice(rightIndex);
    finalArray.push(...elementsLeft);
}
return finalArray
}

function mergeSort(array) {
    if(array.length <= 1) {
        return array;
    }

    const midArray = Math.floor(array.length / 2);

    const leftArray = array.slice(0, midArray);
    const rightArray = array.slice(midArray);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}