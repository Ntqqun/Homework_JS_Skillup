// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.



const findLongestWord = function(string) {
    let words = string.split(" ")
    let max = words[0]
        // let max = "" // !!!
    for (let word of words) {
        if (word.length > max.length)
            max = word
    }
    return max
}



console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'