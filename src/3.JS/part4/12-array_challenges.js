// Array is a box that can store values in continous manner, and each value is marked with a number and the number starts from 0

// Q: Declare an array named 'teaFlavors' that contains the string "green tea", "black tea", and "oolang tea". Access the first element of the array and store it in a variable named 'firstTea'

let teaFlavors = ["green tea", "black tea", "oolang tea"]
const firstTea = teaFlavors[0]

// Q: Declare an array named 'cities' containing "London","Tokyo","Paris", and "Newyork". Access the third element in the array and store it in a variable named 'favoriteCity'

let cities = ["London", "Tokyo", "Paris", "Newyork"]
const favoriteCity = cities[2]

// Q: You have an array named 'teaTypes' containing "herbal tea", "white tea",and "masala tea". Change the second element of the array to "jasmine tea"

let teaTypes = ["herbal tea", "white tea", "masala tea"]
teaTypes[1] = "jasmine tea"

// Q: Declare an array named 'citiesVisited' containing "Mumbai" and "Sydney". Add "Berlin" to array using the 'push' method

let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("Berlin")

// Q: You have an array named 'teaOrder' with "chai","iced tea", "matcha", and "earl grey". Remove the last element of array using 'pop' method and store it in a variable named 'lastOrder'

let teaOrder = ["chai", "iced tea", "matcha", "earl grey"]
const lastOrder = teaOrder.pop()

// Q: You have an array named 'popularTeas' containing "green tea", "oolaong tea".and "chai". Create a soft copy of this array named ' softCopyTeas

let popularTeas = ["green tea", "oolaong tea", "chai"]
let softCopyTeas = popularTeas
console.log(softCopyTeas)
popularTeas.push("another tea")
console.log(popularTeas)
console.log(softCopyTeas)
softCopyTeas.pop()
console.log(popularTeas)
console.log(softCopyTeas)

// Q: You have an array named 'topCities' containing "Berlin", "Singapore", and "New York". Create a hard copy of this array named 'hardCopyCities'

let topCities = ["Berlin", "Singapore", "New York"]
let hardCopyCities = [...topCities]
topCities.pop()
console.log(topCities)
console.log(hardCopyCities)

// Q: You hav an array: 'europeanCities' containing "Paris" and "Rome",and 'asianCities' containing "Tokyo" and "Bangkok". Merge these array into a new array named 'worldCities'

console.log("-----")
let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
console.log(asianCities)
console.log(typeof (asianCities))
let worldCities = europeanCities + asianCities
console.log(worldCities)
console.log(typeof (worldCities))
worldCities = [...europeanCities, ...asianCities]
console.log(typeof (worldCities))
worldCities = europeanCities.concat(asianCities)
console.log(typeof (worldCities))
console.log("-----")

// Q: You have an array named 'teaMenu' containing "masala chai","oloong tea","green tea" , and "earl grey". Find the length of the array and store it in a variable named 'menuLength'

