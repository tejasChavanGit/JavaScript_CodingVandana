// function reverseWordsAndSortDescending(sentence) {
    
//     const reversedSentence = sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');

    
//     const numbers = [5, 2, 9, 1, 5, 6];
//     const sortedDescending = numbers.sort((a, b) => b - a);

    
//     console.log("Reversed Sentence: " + reversedSentence);
//     console.log("Sorted Descending Array: " + sortedDescending);
// }

// const inputSentence = "This is a sunny day";
// reverseWordsAndSortDescending(inputSentence);

function reverseWordsAndSortDescending(sentence) {
    function reverseWord(word) {
        let reversed = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversed += word[i];
        }
        return reversed;
    }

    const words = sentence.split(' ');

    let reversedSentence = '';
    for (let i = 0; i < words.length; i++) {
        reversedSentence += reverseWord(words[i]);
        if (i < words.length - 1) {
            reversedSentence += ' ';
        }
    }

    function customSortDescending(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] < arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }

    const numbers = [5, 2, 9, 1, 5, 6];
    customSortDescending(numbers);

    console.log("Reversed Sentence: " + reversedSentence);
    console.log("Sorted Descending Array: " + numbers);
}

const inputSentence = "This is a sunny day";
reverseWordsAndSortDescending(inputSentence);
