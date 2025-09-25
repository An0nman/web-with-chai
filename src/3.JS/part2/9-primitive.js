// Number
let balance = 120
console.log(typeof (balance))
// not recommended way
let anotherbalance = new Number(300) // when you create a variable like this your are creating it as a object
console.log(typeof (anotherbalance))
console.log(anotherbalance)

// Boolean
let Boolean_ = true
console.log(typeof (Boolean_))

// Null and Undefined
let firstName
console.log(typeof (firstName))
console.log(firstName)
firstName = null
console.log(typeof (firstName))
console.log(firstName)

// String
let str = "heelo"
let str2 = 'a.s'
let name = 'ahmed'
let oldWay = str + ' ' + 'raza'
console.log(oldWay)
let newWay = `${str2} ${name}, how are you doing!, and is your age ${2025.8 - 2002.9}` // this is called string interpulation
console.log(newWay)
console.log(typeof newWay)