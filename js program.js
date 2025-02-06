//Queation no.1 of JS Assingment 2
/*let num1 = prompt("enter a no. to check it is divisible by 10 or not")
if(num1%10==0){
    console.log("Good")
}
else{
    console.log("Bad")
}

//Queation no.2 of JS Assingment 2
let name = prompt("Enter Your Name")
let age = prompt("Enter Your Age")
alert(`${name}is${age}yearsold.`)

//Queation no.3 of JS Assingment 2
let a = 2
switch (a){
    case 1:
        console.log("Month In Quater 1 : January, February, March")
        break;
    case 2:
        console.log("Month In Quater 2 : Aprail, May, June")
        break;
    case 3:
        console.log("Month In Quater 3 : July, August, September")
        break;
    case 4:
        console.log("Month In Quater 4 : October, November, December")
        break;
    default:
        console.log("Since there is only 4 quaters in a year therefore, please write no. between 1 to 4")
}


//Queation no.4 of JS Assingment 2
let string = prompt("Enter a string to know either is it golden or not")
if((string.length>5) && (string[0]=="A" || string[0]=="a")){
    console.log("Golden String!")
}
else{
    console.log("not a golden string!")
}


//Queation no.5 of JS Assingment 2
let num = prompt("Write three diff no. to check highest among them")
if (num[0]>num[1] && num[0]>num[2])
{
    console.log("First no. from the left is highest")
}
if (num[1]>num[0] && num[1]>num[2])
{
    console.log("Second no. from the left is highest")
}
if (num[2]>num[1] && num[2]>num[0])
{
    console.log("Third no. from the left is highest")
}



//Queation no.6 of JS Assingment 2
let n = prompt("Enter First no.");
let m = prompt("Enter Second no.");
lastn = n % 10;
lastm = m % 10;
if(lastn == lastm){
    console.log("both numbers have the same last digit.")
}
else{
    console.log("both numbers have different last digit.")
}


//Queation no.1 of JS Assingment 3
let input1 = prompt("Enter numbers you want to add in array:");
let arr1 = input1.split("");
let nm1 = prompt("enter a no 'n' to get the first n elements of the array")
console.log(arr1.slice(0,nm1))


//Queation no.2 of JS Assingment 3
let input = prompt("Enter numbers you want to add in array:");
let arr = input.split("");
let nm = prompt("enter a no 'n' to get the first n elements of the array")
console.log(arr.slice(-nm))


//Queation no.3 of JS Assingment 3
let str = "";
let str1 = prompt()
let str2 = str1.trim()
console.log(str == str2)


//Queation no.4 of JS Assingment 3
let char = prompt("please enter a word")
let no = prompt("Enter the index")
let letter_stored = char[no-1]
let store_islower = letter_stored.toLowerCase()
console.log(store_islower == letter_stored)

//Queation no.5 of JS Assingment 3
let str53 = prompt()
console.log(str53.trim())

//Queation no.6 of JS Assingment 3
let Array63 = prompt("Enter an array separated with comma")
let array63 = Array63.split(",")
let word63 = prompt("Enter an element to know is it present in array or not")
console.log(array63.includes(word63,0))

//js part 4 guessing favaourite movie
let fav = "avatar"
let guess = prompt("Guess My Favouraite Movie")
while((guess != fav) && (guess != "quit")){
    guess = prompt("Wrong Guess, Try Again!")
}
if (guess == fav){
    console.log("Hurray you have guessed it right")
}
else{
    console.log("You Quit")
}


//Queation no.1 of JS Assingment 4
let arr14 = [1, 2, 3, 4, 5, 6, 2, 3];
let num14 = 2;
for(let i = 0; i<arr14.length; i++){
    if(arr14[i] == num14){
        arr14.splice(i, 1);
    }
}
console.log(arr14);

//Queation no.2 and 3 of JS Assingment 4
let number=287152;
let numstr = number.toString();
let i =0;
let store = 0;
let sum = 0;
for(num of numstr){
    store = numstr[i]
    let sum1 = parseInt(store, 10);
    sum = sum + sum1
    i++
}
console.log(i)
console.log(sum)

//Queation no. 4 of JS Assingment 4
let num = prompt("Enter the no. to find the factorial of it");
let fact = 1;
for(let i = 1; i<=num; i++){
    fact = fact * i
}
console.log(fact)

//Queation no. 5 of JS Assingment 4
let arr54 = [1,2,3,4,5,6,2,3];
let great = 0;
for(let i = 0; i<arr54.length; i++){
    if(arr54[i]>great){
        great = arr54[i]
    }
}
console.log(great);

//Queation no. 1 of JS Assingment 5
let random = Math.floor(Math.random()*6)+1
console.log(random)

//Queation no. 2 of JS Assingment 5
const car = {
    name : "Tata",
    model : "Safari",
    Color : "Black"
}

//Queation no. 1 of JS Assingment 6
function arwilano(arr15, num15){
    arr15 = arr15.split(",");
    num15 = Number(num15);
    let narr15 = [];
    for(let i = 0; i<arr15.length; i++){
        if(arr15[i]>num15){
            narr15.push(arr15[i])
        }
    }
    return(narr15)
}
console.log(arwilano(prompt("Enter nums separated with comma"),prompt("Enter no.")))

//Queation no.2 of JS Assingment 6
function unichar(str25){
    let ans25 ="";
    for(let i = 0; i<str25.length; i++){
        let currentchar = str25[i];
        if(ans25.indexOf(currentchar) == -1){
            ans25 += currentchar;
        }
    }
    return ans25;
}
console.log(unichar(prompt("Enter the string")))

//Queation no.3 of JS Assingment 6
function logcon(country){
    store = "";
    for(count of country){
        i = 1
        if(store.length < count.length){
            store = count;
        }
        i++
    }
    console.log(store);
}
logcon(["abcd","qwertyhjjhju","azwx","azsxdc","shivnadan"])

//Queation no.4 of JS Assingment 6
function countVowels(str) {
    // Define the vowels
    const vowels = "aeiouAEIOU";
  
    // Initialize a counter
    let count = 0;
  
    // Loop through each character in the string
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example usage:
  console.log(countVowels("Hello, World!")); // Output: 3
  console.log(countVowels("JavaScript is awesome")); // Output: 8
  console.log(countVowels("BCDFG")); // Output: 0
    

//Queation no.5 of JS Assingment 6
function randno(start, end){
    no = Math.floor(Math.random()*(end - start))+start;
    return no;
}
console.log(randno(60,65))

//Queation no.1 of JS Assingment 7
const arrayAverage = (arr) =>{
    let sum = 0;
    for(let i of arr){
        sum = sum + i;
    }
    return sum/arr.length
}
let arr = [11,2,3,45,6]
console.log(arrayAverage(arr));

//Queation no.2 of JS Assingment 7
const isEven = (a) => {
    let result = "";
    if(a%2 == 0){
        result = "Even"
    }else{
        result = "Not Even(Odd)"
    }
    return result;
}//const isEven = (num) => num % 2 == 0;
console.log(isEven(478563210485621458620));

function sum(...arg){
    return arg.reduce((sum, el) => sum + el);
}

//Queation no.1 of JS Assingment 8
const square = (arg) => {
    arg = String(arg);
    arg = arg.split(",");
    const squaredArray = arg.map(x => x ** 2);
    console.log(squaredArray);
    let sum = squaredArray.reduce((res, el) => (res + el));
    let avg = sum/arg.length;
    return avg;
}
arg = [1,2,3,4,5]
console.log(square(arg));

//Queation no.2 of JS Assingment 8
let num = [600,42,5,4,20,5,41];
let plusfive = num.map(function(el){
    return el + 5;
});
console.log(plusfive)

//Queation no.3 of JS Assingment 8
let newarray = ["rdfg","sdffg","erfde","werfd","qwerty"]
console.log(newarray.map((newarray) => newarray.toUpperCase()));
*/
//Queation no.4 of JS Assingment 8
function doubleAndReturnArgs(arr){
    function add(...args){

    }
}
console.log(doubleAndReturnArgs([1, 2, 3]));

// function abcd(){
//     no = Math.floor(Math.random()*1000)+1;
//     uno = prompt("guess the no.");
//     while(uno!="quit"){
//         if(no != uno){
//             if(no>uno){
//                 uno = prompt("your no. is smaller than actual no.! try again or write quit to stop");
//             }else{
//                 uno = prompt("your no. is greater than actual no.! try again or write quit to stop");
//             }   
//         }else{
//             console.log("hurray! you guessed it right. the no. is", no);
//             break;        
//         }
            
//     }
// }
// abcd()
