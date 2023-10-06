//  Primitive DataType
//  7 dataType : String, Number, Boolean, Null, Undefined, Symbol, Bigint

// 


// Reference Ttype(Non Primitive)
// Array, Objects, Functions


//  array

const hero = ["shaktiman", "ironman", "thor"]

// objects  *object write in {}.

let myobj = {
    name:"dhruvin",
    age: 26,
    weight: "47kg",

}
// console.log(myobj);

// function

function name(params) {
    console.log();
}

// *********************************** memory

// Stack Memory (Primitive) , Heap Memory (Non-Primitive)


//  stack memory demo (stack memory ma value change karvathi original value change thati nathi.)
// (stack ma memory nu copy male che)
let myname = "dhruvin"

let secondname = myname
secondname = "bhalala"

console.log(myname);
console.log(secondname);


// heap memory demo (heap memory ma valvue change karvathi original value change thay jay che.)
// ( heap memroy ma memory no refrence male che)
let user ={
    name: "bhalala",
    last: "dhruvin",
    age: "48"
}

usertwo = user
usertwo.name = "dhruvin"

console.log(usertwo.name);
console.log(user.name);
