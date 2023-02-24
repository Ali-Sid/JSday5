import {countries} from './countries.js'
import {webTechs} from './web_techs.js'

console.log(countries);

/*[
  'Albania',  'Bolivia',
  'Canada',   'Denmark',
  'Ethiopia', 'Finland',
  'Germany',  'Hungary',
  'Ireland',  'Japan',
  'Kenya'
 ]
*/

console.log(webTechs); // Output: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB' ]


// Q5. refer exercise.js file for question
countries.includes('Ethiopia') === true
? console.log('ETHIOPIA')
: console.log(countries.unshift('Ethiopia') && countries.sort())
// Output: ETHIOPIA

// Q6. refer exercise.js file for question
webTechs.includes('Sass') === true
? console.log('Sass is a CSS preprocess')
: console.log(webTechs.unshift('Sass') && webTechs.sort())
/* 
 Output:
 [
  'CSS',        'HTML',
  'JavaScript', 'MongoDB',
  'Node',       'React',
  'Redux',      'Sass'
 ]
*/

// Exercise: Level 3
// 1 (f)

let firstTenCountries = countries.slice(0, 10)
console.log(firstTenCountries)
/*
[
  'Albania',  'Bolivia',
  'Canada',   'Denmark',
  'Ethiopia', 'Finland',
  'Germany',  'Hungary',
  'Ireland',  'Japan'
]
*/
// 2.
console.log(countries[Math.floor(countries.length / 2)]) // Finland

// 3.

// let count1 = countries.slice(0, countries[Math.floor(countries.length / 2)])
// let count2 = countries.slice(countries[Math.floor(countries.length / 2)])

// console.log(`Array 1: ${count1}\nArray 2: ${count2}`)
// countries.length % 2 === 0
/* ? (console.log(`First half: ${countries.slice(0, countries.length/2)}`), console.log(`Second Half: ${countries.slice(countries.length/2)}`))
: (console.log(`First half: ${countries.slice(0, Math.floor(countries.length/2) + 1)}`) && console.log(`Second half: ${countries.slice(Math.floor(countries.length/2) + 1)}`))*/

if (countries.length % 2 === 0) {
  const firstHalf = countries.slice(0, countries.length/2);
  const secondHalf = countries.slice(countries.length/2);
  console.log(`First half: ${firstHalf}`);
  console.log(`Second half: ${secondHalf}`);
} else {
  const firstHalf = countries.slice(0, Math.floor(countries.length/2) + 1);
  const secondHalf = countries.slice(Math.floor(countries.length/2) + 1);
  console.log(`First half: ${firstHalf}`);
  console.log(`Second half: ${secondHalf}`);
}

/*
First half: Albania,Bolivia,Canada,Denmark,Ethiopia,Finland
Second half: Germany,Hungary,Ireland,Japan,Kenya
*/