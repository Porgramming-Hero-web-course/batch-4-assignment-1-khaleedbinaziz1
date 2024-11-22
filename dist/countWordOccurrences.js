"use strict";
function countWordOccurrences(text, word) {
    let count = 0;
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            count++;
        }
    }
    return count;
}
console.log(countWordOccurrences("I love typescript", "typescript"));
