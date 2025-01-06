import { HashMap } from './hash.mjs';


const test = new HashMap(0.75);

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');


console.log("Current Length: ", test.length());
console.log("Current Capacity: ", test.capacity);

test.set('apple', 'green');

console.log("After Overwriting:");
console.log("Length (should be same): ", test.length());
console.log("Capacity (should be same): ", test.capacity);

test.set('moon', 'silver');

console.log("After Resizing:");
console.log("Length: ", test.length());
console.log("New Capacity: ", test.capacity);

console.log("Entries: ", test.entries());
console.log(test.entries())