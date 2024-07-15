/*First program */
let n;
for(let n=0;n<=100;n++){
    if(n%3==0 && n%5==0){
        console.log("FizzBuzz");
    }  
    else if(n%3==0){
        console.log("Fizz");
    }    
    else if(n%5==0){
        console.log("Buzz");
    }  
    else{
        console.log(n); 
    }
}

/* Second program*/
let str="malayalam";
let str1=str.split("").reverse().join("");
if(str==str1){
    console.log("Palindrome");
}
else{
    console.log("Not a Palindrome");
}

/* Third program*/
let arr=[10,32,24,15,8]
let max=0;
for(let i=0;i<arr.length;i++){
    if(max<arr[i])
        max=arr[i];
}
console.log("Largest number in the array :",max);

/* Fourth program*/
function occur(str){
    const count={};
        for(let i=0;i<str.length;i++){
            const char=str[i];
            if(count[char]){
                count[char]++;
            }
            else{
                count[char]=1;
            }
        }
        return count;
}
const str="hello";
console.log(occur(str));

/* Fifth progrma*/
function longest(str){
    let max=0;
    let longestword="";
    let words=str.split(" ");
    for(let i=0;i<words.length;i++){
        if(words[i].)
    }
}

/* Sixth program*/
let fact=1;
function factorial(num){
    for(i=1;i<=num;i++){
        fact=fact*i;
    }
    return fact;
}
factorial(7);
console.log("Factorial of this number is : ",fact);

/* Seventh Program*/
 let c=32;
     f=((c*9)/5+32);
 console.log("Fahrenheit is : "+f);

/* Eighth program*/
 let m=[0,1,2,3,4,5,6,7,8,9];
 console.log(m);
 for(let i=0;i<m.length;i++){
     if(m[i+1]!=m[i]+1)
         console.log("The missing number in the array : ",m[i]+1);
 }