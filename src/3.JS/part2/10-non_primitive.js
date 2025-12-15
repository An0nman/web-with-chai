// Object
let obj = { // creating a object{} (note: you can also create a variable name with "")
    firstName: "Ahmed",
    lastName: "Raza",
}

console.log(obj); // prints the whole object
console.log(obj.firstName); // prints the variable value in the obj
console.log(typeof (obj));  // prints the type

obj.firstName="Anon"; //changing the value of a variable in a object
console.log(obj);

obj["is logged in"]=true; //if a variable isn't available then this creates one and assign the value, else it just changes the value
console.log(obj);

// Array
let user=["Ahemd",22,"Sahiwal"]; //in JS you can create an array with multiply type of values
console.log(user[0]);
let users=[["Ahemd",22,"Sahiwal"],["Ahmed",22,"Swl"]];
console.log(user[0]);

// Explicit conversion
console.log(Number(true));

// implicit conversion happen when js itself try to change the type