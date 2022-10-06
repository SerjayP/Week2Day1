// HomeWork W2D1

// .1 (Done)

    function maxOfTwoNumbers(x, y) {return x >= y ? x : y}
// ? is similar to if statement
// console.log(maxOfTwoNumbers(23, 10))

// .2 (Done)

    let maxOfThree = (x, y, z) => {
        let moreThan = 0
            if (x > y) {
              moreThan = x;
            } else {
              moreThan = y;
            }
    return moreThan > z ? moreThan : z;
    }

// console.log(maxOfThree(500, 700, 344))

// .3 (Done)

    let vowels = "aeiou"

    function isCharAVowel(char) { 
        for (let i = 0; i < vowels.length; i++){
            if (char.toLowerCase() === vowels[i]){
                return true
            }          
        }
        return false
    }
  console.log(isCharAVowel("P"))

// .4 (Done)

    let sum = 0

    const sumArray = (args) => {
    // console.log(args)
    // console.log(args[0])
        args.forEach((num) => { sum += num})
        return sum
}


// console.log(sumArray([5, 30, 10, 50]))


 // .5 (Done)

    function multiplyArray(numArr){
         let newSum = 1
         numArr.forEach(function(times){
            newSum *= times
        })
    return newSum
    }
  
//   console.log(multiplyArray([5,5,10]))
    // .6 (Done)
        
        let numArgs = (...args) => {
            console.log(args.length)
        }
        // numArgs(1,3,6)
        
    // .7 (Done)

    function reverseString(str) {
       let newStr = "";
    //    console.log(str.length)
    //    console.log(str.length-1)
        for (let i = str.length-1; i >= 0; i--){
           newStr += str[i]
        }
         return newStr
    }
// console.log(reverseString("serjay"))

// .8 (Done)
    
    let longestStringInArray = (arr1) => {
        let first = arr1[0].length
        // console.log(first)
        let longest = arr1[0]
        // console.log(longest)

        for (i = 1; i < arr1.length; i++){
            let checkWord = arr1[i].length
                if (checkWord > first){
                    first = checkWord
                    longest = arr1[i]
                     }
        }
        return longest
    }
    // console.log(longestStringInArray(["Lol", "Serjay", "longword", "no"]))

// .9 (Done)

    function stringsLongerThan(arr, num){
        let empty = []
    // console.log(arr)
         arr.forEach((check) => {
            if (check.length > num){
                empty.push(check)
            }
        })
    console.log(empty)
    }
// stringsLongerThan(["hello", "serjay", "no", "store"], 2)
