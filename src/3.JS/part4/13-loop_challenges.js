// There are loops called:
// while
// do while
// for
// ...continue

// Q: Write a 'while' loop that calculated the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'.


let sum = 0;
let i = 1;
while (i <= 5)
    sum += i++;
console.log(sum)

// Q: write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
let j = 5
let countdown = []
while (j > 0)
    countdown.push(j--)
console.log(countdown)

// Q: write a 'do while' loop that prompts a user to enter their favorite tea type until they enter "stop". Store each tea type in an array named 'teaCollection'

// let teaCollection = []
// let teaInput;
// do {
//     teaInput = prompt(`Enter tea type (type "stop" to finish):`).toLowerCase();
//     if (teaInput !== "stop")
//         teaCollection.push(teaInput)
// } while (teaInput !== "stop");
// console.log(teaCollection)

// Q: write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'

let total =0
let k=1
do{
    total+=k++
}while(k<=3)
console.log(total)

// Q: write a 'for' loop that muliplies each element in the array '[2,4,6]' by 2 and stores the results in a new array named 'muliplieNumbers'

let muliplieNumbers=[]
let number=[2,4,6]
for(let i=0;i<number.length;i++)
    muliplieNumbers.push(number[i]*2)
console.log(muliplieNumbers)

// Q: write a 'for' loop that lists all the cities in the array '["Paris","New York", "Tokyo", "London"]' and stores each city in a new array named 'cityList'
let cities=["Paris","New York", "Tokyo", "London"]
let cityList=[]
for (let i = 0; i < cities.length; i++) {
    cityList.push(cities[i])
}
console.log(cityList)