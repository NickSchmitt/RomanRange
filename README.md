# Roman Range

### JS Iterator Experimentation
Roman Range is an iterator that:
- Receives a non-negative integer n
- Constructs an array of integers from 1 to n
- Maps the array to roman numers with intToRoman()
- Defines a [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) method for iterating over the numerals array

Learn more about my implementation [here](RomanRange.js).

Credit goes to [dcode's youtube video](https://www.youtube.com/watch?v=2oU-DfdWM0c) for a great explanation on iterators.

### Usage
```
for (numeral of new RomanRange(10)) {
  console.log(numeral)
}

/* 
Prints:
I
II
III
IV
V
VI
VII
VIII
IX
X 
*/
```
