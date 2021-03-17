/* An iterator class that:
- Receives a non-negative integer n
- Constructs an array of integers from 1 to n
- Maps the array to roman numers with intToRoman()
- Defines a [Symbol.iterator]() method for iterating over the numerals array
*/
class RomanRange {
  constructor(n) {
    this.numerals = [...Array(n).keys()].map((i) => this.intToRoman(i + 1))
  }
  [Symbol.iterator]() {
    const numerals = this.numerals
    let currentIndex = -1
    return {
      next() {
        return {
          value: numerals[++currentIndex],
          done: currentIndex >= numerals.length,
        }
      },
    }
  }

  intToRoman = (n) => {
    let rom = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I',
    ]
    let val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let roman = ''
    for (let i = 0; n; i++)
      while (n >= val[i]) {
        ;(roman += rom[i]), (n -= val[i])
      }
    return roman
  }
}

// An instance of RomanRange can now be used as an iterator
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
