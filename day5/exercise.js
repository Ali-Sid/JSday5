// Exercise: Level 1

// 1. Declare an empty array;
const arr = [] // or const arr = Array() or new Array()
console.log(arr) // Output: []

// 2. Declare an array with more than 5 number of elements

let elmArray = [1, 2, 3, 4, 5, 6, 7]
console.log(elmArray) // Output: [1, 2, 3, 4, 5, 6, 7]

// 3. Find the length of your array
console.log(elmArray.length) // Output: 7

// 4. Get the first item, the middle item and the last item of the array

console.log(`The first item in the array is ${elmArray[0]}, the middle item is ${elmArray[Math.ceil(elmArray.length/2) - 1]} and the last item of the array is ${elmArray[elmArray.length - 1]}`)
// Output: The first item in the array is 1, the middle item is 4 and the last item of the array is 7

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [
    'Ali',
    'Siddiqui',
    21, 
    true, 
    {country: 'India', city: 'Hyderabad'},
    {skills: ['HTML', 'CSS', 'JavaScript']},
    {}
]
console.log(mixedDataTypes.length) // Output: 7

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using console.log()
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log(itCompanies.length) // Output: 7

// 9. Print the first company, middle and last company
console.log(`First Company: ${itCompanies[0]}, Middle Company: ${itCompanies[Math.ceil(itCompanies.length/2) - 1]}, Last Company: ${itCompanies[itCompanies.length - 1]}`)
// Output: First Company: Facebook, Middle Company: Apple, Last Company: Amazon

// 10. print out each company
for(let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}


/*
Facebook
Google
Microsoft
Apple
IBM
Oracle
Amazon
*/

// 11. Change each company name to uppercase one by one and print them out
for(let i = 0; i < itCompanies.length; i++) {
console.log(itCompanies[i].toUpperCase())
}

/*
FACEBOOK
GOOGLE
MICROSOFT
APPLE
IBM
ORACLE
AMAZON
*/

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(itCompanies.join(', ') + ' are big IT companies.') // Output: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon are big IT companies.

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let chkCompany = 'SalesForce'

itCompanies.includes('SalesForce')
? console.log(`The company ${chkCompany} does exist in the array.`)
: console.log(`The company ${chkCompany} is not found.`) // Output: The company SalesForce is not found.

// 14. Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = []

for(let i=0; i<itCompanies.length; i++) {
    const company = itCompanies[i]
    let count = 0
    for(let j=0; j<company.length; j++) {
        if(company[j] === 'o'){
            count++;
            if(count > 1) {
                break;
            }
        }
    }
    if(count <= 1){
        filteredCompanies.push(company)
    }
}

console.log(filteredCompanies) // Output: [ 'Apple', 'IBM', 'Oracle', 'Amazon' ]

// 15. Sort the array using sort() method

console.log(itCompanies.sort())
/* Output:
 [
  'Amazon',
  'Apple',
  'Facebook',
  'Google',
  'IBM',
  'Microsoft',
  'Oracle'
 ]
*/

// 16. Reverse the array using reverse() method

console.log(itCompanies.reverse())

/* 
  Output:
  [
  'Oracle',
  'Microsoft',
  'IBM',
  'Google',
  'Facebook',
  'Apple',
  'Amazon'
  ]
*/

// 17. Slice out the first 3 companies from the array

console.log(itCompanies.slice(0,3)) // Output: [ 'Oracle', 'Microsoft', 'IBM' ]

// 18. Slice out the last 3 companies from the array

console.log(itCompanies.slice(-3)) // Output: [ 'Facebook', 'Apple', 'Amazon' ]

// 19. Slice out the middle IT company or companies from the array

console.log(itCompanies[(Math.floor(itCompanies.length/2))]) // Output: Google

// 20. Remove the first IT company from the array

console.log(itCompanies.slice(1)) // Output: [ 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon' ]
// or use shift() to remove the first element from array.
itCompanies.shift()

console.log(itCompanies)

// 21. Remove the middle IT company or companies from the array

const midIndex = Math.floor(itCompanies.length / 2)

if(itCompanies.length % 2 === 0) {
    itCompanies.splice(midIndex - 1, 2)
} else{
    itCompanies.splice(midIndex, 1)
}
console.log(itCompanies) // Output: [ 'Microsoft', 'IBM', 'Apple', 'Amazon' ]

// 22. Remove the last IT company from the array
console.log(itCompanies.slice(0, itCompanies.length - 1)) // Output: [ 'Microsoft', 'IBM', 'Apple' ]

// 23. Remove all IT companies

console.log(itCompanies.splice(0, 0)) // []

// or

itCompanies.length = 0
console.log(itCompanies) // Output: []

// Exercise: Level 2

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// refer web_techs.js, countries.js, main.js, package.json

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
/*
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)

Output: ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13

*/

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.', words;
const removePunc = text.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
const arrText = removePunc.split(" ")
console.log(arrText)
console.log(arrText.length)

/*
 [
  'I',          'love',
  'teaching',   'and',
  'empowering', 'people',
  'I',          'teach',
  'HTML',       'CSS',
  'JS',         'React',
  'Python'
 ]
 13
*/

// 3. In the following shopping cart add, remove, edit items
/*
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'

*/

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart.splice(4,1)
shoppingCart[3] = 'Green Tea'
console.log(shoppingCart)
// Output: [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// refer main.js file

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// refer main.js file

// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)
/* [
  'HTML',    'CSS',
  'JS',      'React',
  'Redux',   'Node',
  'Express', 'MongoDB'
  ]
*/
// Exercise: Level 3

/* 1. The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
*/

//a
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//b
ages.sort()
console.log(`The minimum age is ${ages[0]} and the maximum age is ${ages[ages.length - 1]}`)
// Output: The minimum age is 19 and the maximum age is 26

//c
const middleIndex = Math.floor(ages.length/2)

const medianAge = ages.length % 2 === 0
? (ages[middleIndex - 1] + ages[middleIndex] / 2)
: ages[middleIndex]

console.log(`Median age: ${medianAge}`) // Median age: 36

//d
let totalAge = 0;

for(let i=0; i<ages.length; i++) {
    totalAge += ages[i]
}

let avgAge = totalAge/ages.length
console.log(avgAge) // 22.8

//e

let maxAge = ages[0], minAge = ages[0];
for(let i=1; i<ages.length; i++) {
    if(ages[i] > maxAge) {
        maxAge = ages[i]
    }
    if(ages[i] < minAge) {
        minAge = ages[i]
    }
}

const ageRange = maxAge - minAge
console.log(ageRange) //7

/*
(another method)
let maxAge = Math.max(...ages), minAge = Math.min(...ages) //use spread operator "..." before ages, or else Math.max() and Math.min() will expect the arguments to be an individual value not array
let ageRange = maxAge - minAge
console.log(ageRange) //7
*/

// f
let compareVal = (minAge - avgAge) < (maxAge - avgAge)
? console.log(true)
: console.log(false) // true


let sum = ages[0];
for (let i = 1; i < ages.length; i++) {
  if (ages[i] < minAge) {
    minAge = ages[i];
  }
  if (ages[i] > maxAge) {
    maxAge = ages[i];
  }
  sum += ages[i];
}
const average = sum / ages.length;
const diff1 = Math.abs(minAge - average);
const diff2 = Math.abs(maxAge - average);
if (diff1 > diff2) {
  console.log("The difference (min - average) is greater than (max - average).");
} else if (diff1 < diff2) {
  console.log("The difference (max - average) is greater than (min - average).");
} else {
  console.log("The differences are equal.");
}

// for countries: refer main.js

// 2. Find the middle country(ies) in the countries array
// refer main.js

// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

// refer main.js