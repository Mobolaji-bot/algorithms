const sentence = "Hello everybody and this is my algorithm"
const numSentence = sentence.length
console.log(numSentence);

const sen = "Hello everybody and this is my algorithm";
function numSen(sen){
   const words = sen.split(" ")
   return words.length
}
console.log(numSen(sen))


const sens = "Hello everybody and this is my algorithm";
function numVowels(sens){
    const vowels = sens.match(/[aeiou]/gi);
    return vowels ? vowels.length:0
}
console.log(numVowels(sens))