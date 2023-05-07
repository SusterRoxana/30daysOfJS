let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3, 21)) 
console.log(challenge.substring(0, 3))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(companies.split(','))

console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log(sentence.lastIndexOf('because'))
console.log(sentence.search('because'))

let challenge1 = ' 30 Days Of Javascript '
console.log(challenge1.trim())

console.log(challenge.startsWith('30 Days Of JavaScript'))
console.log(challenge.endsWith('30 Days Of JavaScript'))
console.log(challenge.match(/a/gi))

let s1 = '30 Days of'
let s2 = ' JavaScript'
console.log(s1.concat(s2))

console.log(challenge.repeat(2))