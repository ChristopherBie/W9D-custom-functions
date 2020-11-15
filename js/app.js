// Function 1 - This function will take 2 arguments expected to be integers. 
// The function will add the two arguments together and then multiple the result by five. 
// The function will finally return this newly computed value.

// Function 2 - This function will take in 1 argument expected to be a string. 
// The function will return true if the string length is > 10 characters and false otherwise.

// Function 3 - This function will take in 1 argument expected to be an array of strings. 
// The function will return the first element in the array that starts with "ph"
// Hint: There is a very helpful built in method for doing the starts with part.

// Test the functions by calling each one 3 times with 
//different arguments and console logging the returned values


console.log("function 1:");

function quintuple_the_sum(integer1, integer2) {
    return (integer1 + integer2) * 5;
}

var integer_array1 = [4, 18, 3];
var integer_array2 = [-6, 5, 10];

for(i = 0; i < integer_array1.length; i++) {
    console.log(quintuple_the_sum(integer_array1[i], integer_array2[i]));
}



console.log("\nfunction 2:");

function longer_than_10(word) {
   if (word.length > 10) {
       return true;
   } else {
       return false;
   }
}

var word_array = ['elephant', 'interested', 'concatenation'];

for(i = 0; i < word_array.length; i++) {
    console.log(longer_than_10(word_array[i]));
}



console.log("\nfunction 3:");

function starts_with_ph(some_word) {
    if(some_word.startsWith('ph')) {
        console.log(some_word)
        i = some_word.length;
    }
}

var list1 = ['learning', 'hp', 'pedagogy', 'philosophy', 'metaphysics', 'philanthropy', 'theology'];

for(i = 0; i < list1.length; i++) {
    starts_with_ph(list1[i]);
}


// console.log(starts_with_ph(list[i]));
// i++;
// console.log(starts_with_ph(list[i]));
// i++;
// console.log(starts_with_ph(list[i]));

// console.log(list[0] + list[1]);
// var list2 = ['Spain', 'Madagascar', 'Philippines', 'Tibet', 'Jordan'];
// var list3 = ['excellence', 'dedication', 'sacrifice', 'perseverance', 'philanthropy', 'benevolence', 'blessings', 'gratitude']
// var word_list = [list1, list2, list3];

// for(i = 0; i < list1.length; i++) {
//     console.log(starts_with_ph(list1[i]));
// }



