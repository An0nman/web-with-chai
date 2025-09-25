/*
&& : (AND operator) it's used between comparion operator, it gives true if all comparion are true
    example:
            (10 == 10 && 1 < 2) => (true && true) => true
            (10 == 20 && 1 < 2) => (false && true) => false

|| : (OR operator) it's used between comparion operator, it gives true fi one comparion is true
    example:
            (10 == 10 || 1 < 2) => (true && true) => true
            (10 == 20 || 1 < 2) => (false && true) => true
            (10 == 20 || 1 > 2) => (false && false) => false

! : (NOT or REVERSE operator) it's used to convert false into true and vise versa
    example:
            !(1 < 2) => true => false
*/

let isLoggedIN = true
let isPaid = false
console.log(isLoggedIN && isPaid);
let isEmailUser = true
let isGoogleUser = false
console.log(isEmailUser || isGoogleUser);
!isPaid
console.log(isLoggedIN && isPaid);
