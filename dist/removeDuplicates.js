"use strict";
function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
