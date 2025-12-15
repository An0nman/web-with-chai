// Q: check if a number is greater than another number
let num1 = 10, num2 = 1
if (num1 > num2) {
    console.log(num1 + " is greater than " + num2)
}

// Q: check if a string is equal to another string
let username = "ahmed"
let username2 = "raza"
let username3 = "ahmed"
if (username == username2) {
    console.log("username is equal to username2")
}
else if (username == username3) {
    console.log("username is equal to username3")
}
else {
    console.log("username2 is equal to username3")
}

// Q: check if a variable is Number or not
let vari = "10"
vari = 10
if (typeof vari == "number") {
    console.log("A number")
}
else {
    console.log("Not a number")
}

// Q: check if a boolean value is true or false
let isReady = false
if (isReady) {
    console.log("is ready")
}
else {
    console.log("is not ready")
}

// check if an array is empty or not
let arr = []
if (arr.length) console.log("not empty");
else console.log("empty")