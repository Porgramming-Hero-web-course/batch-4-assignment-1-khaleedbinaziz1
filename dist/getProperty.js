"use strict";
function getProperty(obj, value) {
    return obj[value];
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
