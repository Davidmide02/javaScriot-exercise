// reverse a string

const text = "Hello Jolomi Snr Dev!";

function reverseText(data) {
    // split the string to get an array splitted after each space using method split()
    const dataR = data.split(" ");
    console.log(dataR);
    //  reverse the array
    const result = dataR.reverse()
    // convert to string and join the reversed array after each spaces
    console.log(result.join(" "));
}
// call function
reverseText(text);

// factorize a number
// declear a number
const num = 10;

// funtion factorialize
function factorizeNum(data) {
    //  assigning the initial value to be able to get 
    let numF = data;
    // if the number given is 0 or 1 return 1
    if (data === 0 || data === 1) {
        return 1;
    }

    // else, i.e if number is not 0 or 1
    else {
        // loop through number while the number is greater than 1
        while (data > 1) {
            // decrease the value of number by 1
            data--
            // mutiply the number at every looping
            numF = numF * data;
            // console.log(numF)
        }
    }

}
// call function
// factorizeNum(num);


// Title case a sentence

const senText = "Hello how did you get here?"

function titleCase(data) {
    let textconvert = data.toLowerCase();
    textconvert.split(" ");

    for (let i = 0; i < textconvert.length; i++) {


        textconvert[i] = textconvert[i].charAt(0).toUpperCase() + textconvert[i].slice(1);

        console.log(textconvert[i])

        // const element = array[i];

        // console.log(textconvert)




        // data.split("")
        // console.log(textconvert)


    }
}

// titleCase(senText)



// longest word

let wordList = "I will come to your house once am done"

// variable that holds the longest word
let longestWord = 0;

function findLongestWord(data) {

    // splittting the string to convert into array
    let wordArray = data.split(" ")
    // console.log(wordArray)

    // looping through the converted array
    for (let i = 0; i < wordArray.length; i++) {

        // console.log(longestWord);

        // using if statement to compare each word length

        if (longestWord < wordArray[i].length) {
            // this assign a value that is greater than 0[the set value of the longest word] at first
            // longestWord take the new value assigned and go over the loop again...so on untill the value assigned is greater than the words in the array 
            longestWord = wordArray[i].length;
            console.log(longestWord)
            console.log(wordArray[i])

        }
        // console.log(element);
        // console.log(i);


    }

}

findLongestWord(wordList);