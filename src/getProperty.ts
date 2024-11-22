function getProperty(obj: any, value: string): any {
    return obj[value];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
