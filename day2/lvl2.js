let quote1 = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(quote1)

let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(quote2)

let ten = '10'
console.log(typeof(ten) == 10)
let equal = ten 
console.log(ten == equal)

let floating_number = 9.8
console.log(parseFloat(floating_number) == 10)
console.log(Math.ceil(floating_number) == 10)

let python = 'python'
let jargon = 'jargon'

console.log(python.includes('on') && jargon.includes('on'))

let sentence = 'I hope this course is not full of jargon'
console.log(sentence.includes(jargon))

console.log(Math.random() * 100)

//generate random number btw 50 and 100 
console.log(Math.random() * 50 + 50)

let javascript = 'JavaScript'
console.log(javascript.charAt(Math.floor(Math.random() * javascript.length)))

console.log('1 \t1 \t1 \t1 \t1 \n2 \t1 \t2 \t4 \t8 \n3 \t1 \t3 \t9 \t27 \n4 \t1 \t4 \t16 \t64 \n5 \t1 \t5 \t25 \t125')

let because_sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(because_sentence.substr(0, 31) + because_sentence.substr(55, because_sentence.length-1))