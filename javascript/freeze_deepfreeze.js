const person = {
  name: "Ali",
  age: 25,
  address: {
    city: "Lahore",
    zip: 54000
  }
};
Object.freeze(person);

console.log("..........freeze .......... '")

person.age = 30;      
delete person.name;
console.log(person.age);

console.log(".............changes in nested obj 'change city and add area....... '")

person.address.city = "Karachi"; 
person.address.area = "shad bagh"
console.log(person.address.city); 

console.log(person);


console.log("..........deep freeze .......... '")
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (typeof value === "object" && value !== null && !Object.isFrozen(value)) {
      deepFreeze(value); 
    }
  });
  return obj;
}

deepFreeze(person);

person.age = 30;      
delete person.name;

console.log(person.age); 

person.address.city = "Islamabad"; 
person.address.zip = 53000
console.log(person.address.city)
console.log(person.address.zip)

console.log(person);

console.log("......SUM......")

function sum(obj) {
    let total = 0;
  Object.keys(obj).forEach(key => {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      total += sum(value); 
    } else if (typeof value === "number") {
      total += value;  
    }
  });
 return total;
}
const total = sum(person);
console.log("Total sum =", total);
