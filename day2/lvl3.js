let sentence1 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(sentence1.match(/love/gi))

let sentence2 = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence2.match(/because/gi))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// Clean the text
const cleanedText = sentence.replace(/[^a-zA-Z ]/g, "").toLowerCase();

// Split the text into an array of words
const words = cleanedText.split(" ");

console.log("Cleaned text:", cleanedText);

// Count the frequency of each word
const wordFrequency = {};
words.forEach(word => {
  if (wordFrequency[word]) {
    wordFrequency[word]++;
  } else {
    wordFrequency[word] = 1;
  }
});

// Find the most frequent word
let mostFrequentWord = "";
let highestFrequency = 0;
for (const word in wordFrequency) {
  if (wordFrequency[word] > highestFrequency) {
    mostFrequentWord = word;
    highestFrequency = wordFrequency[word];
  }
}

console.log("Most frequent word:", mostFrequentWord, "(", highestFrequency, "occurrences)");
