const name = "dhruvin"
const repocount = 45

console.log(name + repocount + "value");

// morden way to write strings.

console.log(`hello my name is ${name} and my repocount is ${repocount}`);  


const gameName = new String("Dhruvin")
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('u'));

const newstring = gameName.substring(0, 4)
console.log(newstring);

const anotherstring = gameName.slice(0, 3)
console.log(anotherstring);


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));
console.log(url.includes('dhruvin'));

console.log(gameName.split('-'));
