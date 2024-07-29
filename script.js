//chapter1 alerts
//Q1:
// alert("enter your first name:");
// alert("enter your last name:");
// alert("enter your phone number:");
// alert("enter your email:")
// alert("enter your password:");

//Q2.
//alert("you are learning javascrip!");
//Q3.
//alert("hello world! you're awesome!");

//chapter2 variables for string
//Q1.
//var myName="Muneer Ahmed";
//Q2
//var learNing="javascript"; 
//Q3.
//var teamName="Dream Team";
//alert(teamName);
//Q4.
//var bestMan="Salam ";

//chapter 3 (variable for numbers)
//Q1.
//var quanTity=5;
//Q2.
//var quanTity=144;
//Q3.
//var num =9;
//Q4.
//var a=5;
//var b=6;
//var c=a+b;
//document.write(c);
//Q5.
// var merchTotal=100;
// var shippingCharge=10;
// var orderTotal=merchTotal+shippingCharge;
// document.write(orderTotal);
//Q6.
// var a=4;
//  a+=6;
// document.write(a);
//chapter 4 (variable names legal and illegal)
// Q.1 
//var productCost=3.45;
//Q.2
//var nameOfband;
//Q.3
//legalName=23;
//Q4.
//var firstName;
//var lastName;
//Q5.
//legal name: myVariable,helloWorld,underScore,$dollarSign,numaricValue1,isBoolean,arrayList,
//illegal name:1stVariable,my variable, class,for-loop,while,123abc,@symbol,hello-world;

//chapter 5 (math expression 1)
//Q.1
//modulus "%";
//Q.2
//var num=20%6; //remainder is 2
//document.write(num);
//Q3.
//var largeNum = 1000 * 2000;
//document.write(largeNum) //2000000
//Q.4
//var difference=45 - 34;
//console.log(difference);
//Q5
//var remainder = 16% 3;  //remainder is 1
//document.write(remainder);
//Q.6
// var a = 5;
// var b = 3;
// alert(a * b);

//chapter 6 (math expression 11)
//Q1
// var x=5;
// x += 1;
// document.write(x);
//Q2.
// var y=100;
// var x=--y;
// document.write(x);  99
//Q3
// var x=50;
// var y=x++;
// document.write(y); 50
//Q4
// var y=50;
// var z=--y;
// document.write(z); //value of z is:49
//Q5
//var newNum = num--;
//Q6
//var a = b++;
//Q7
//var num = 5; // Assign a number value to the variable
//num++; // Increment the variable
//alert(num); // Display the new value in an alert

//chapter 7 (math expression111)
//Q1.
//var calculatedNum=2+(2*6);
//document.write(calculatedNum); //14
//Q2
//var calculatedNum=(2+2)*6;
//document.write(calculatedNum); //24
//Q3
//var calculatedNum=(2+2)*(4+2); //24
//document.write(calculatedNum);
//Q4
//var calculatedNum=((2+2)*4)+2; //18
//document.write(calculatedNum);
//Q5
//var cost = (2+2)*(4+10); //56
// document.write(cost);
//Q6
//var units = 2+(2*4)+10; //20
//document.write(units);
//Q7
//var pressure = (4 / 2) * 2.5;
//document.write(pressure); //5

//chapter 8 (concatenating text strings)
//Q1
//var num="2"+"2";
//document.write(num);  //22
//Q2
//var message = ("Hello, " + "Dolly");
//alert("Hello,"+"Dolly");
//document.write(message);  Hello, Dolly
//Q3
//alert("33"+33); //3333
//Q4
//alert("Pakistan"+"Zindabad");
//Q5
// var result ="The answer is"+42;
// document.write(result);
//Q6
// var firstName="Muneer";
// var lastName="Ahmed";
// var fullName=firstName+lastName;
// document.write(fullName);

//chapter 9 (prompt)
//Q1
// var  firstName = prompt("Enter first name:");
// document.write("The entered first name is: " + firstName);
//Q2
// var country=prompt("country?","china");
// document.write("The entered country is:",country);
//Q3
//var yourName = prompt("Enter Your Name");
//document.write("The entered name is: ",yourName);
//Q4
// let userInput = prompt("Please enter some text:", "Default text");
// document.write("The entered text is: " + userInput);
//Q5
// var message="enter your city";
// var DefaultCity="pakistan";
// var userCity=prompt(message,DefaultCity);
// document.write("The entered city is:"+ userCity);
//Q6
// var promptMessage = "what is your favourite color?";
// var defaultColor = "Red";
// var userColor =prompt(promptMessage,defaultColor);
// document.write("your favourite color is:" + userColor);

//chapter 10 (if statemets)
//Q1
// var city = "karachi";
// if (city === "karachi"){
//     document.write("The city of lights:",city);
// }
//Q2
// if (5 === 7) {
//     let z = prompt("Enter the value of z:");
//     document.write("The value of z is: " + z);
//   }
//Q3
// let ZipCode = prompt("Enter ZipCode:");
// if (ZipCode === "10010") {
//   alert("Karachi");
// } else {
//   alert("Please write correct city");
// }
//Q4
// let x = 5;
// if (x === 5) {
//   x = 1;
// }
// document.write("The value of x is: " + x); // This will display: The value of x is: 1


//chapter 11 (comparison operators)
//Q1
//if (a !== b) {
  // Code to execute if a is not equal to b
//}
//Q2
//if (x >= y) {
    // Code to execute if x is greater than or equal to y
 // }
  //Q3
//   let num = 10;
// if (num !== 20) {
//   num = 30;
// }
// document.write("The value of num is: " + num); // This will display: The value of num is: 30
//Q4
// let number1 = 5;
// let number2 = 10;
// if (number1 !== number2) {
//   alert("Congratulations!");
// }
//Q5
// let firstName = prompt("Enter your first name:");
// if (firstName !== "John") {
//   alert("No match");
// }


//chapter 12 (if....else and else if statements)
//Q1
// let x = 1;
// let y = 10;

// if (x >= y) {
//   alert("x is greater than or equal to y");
// } else {
//   alert("x is less than y");
// }
//Q2
// let totalMarks = prompt("Enter total marks:");
// let obtainedMarks = prompt("Enter obtained marks:");

// totalMarks = parseFloat(totalMarks);
// obtainedMarks = parseFloat(obtainedMarks);

// let percentage = (obtainedMarks / totalMarks) * 100;
// let grade;

// if (percentage >= 90) {
//   grade = "A+";
// } else if (percentage >= 80) {
//   grade = "A";
// } else if (percentage >= 70) {
//   grade = "B";
// } else if (percentage >= 60) {
//   grade = "C";
// } else if (percentage >= 50) {
//   grade = "D";
// } else {
//   grade = "F";
// }

// alert("Your percentage is: " + percentage.toFixed(2) + "%\nYour grade is: " + grade);
//Q3
// let a = prompt("Enter the value of a:");

// a = parseInt(a);

// if (a === 10) {
//   alert("a is 10");
// } else {
//   alert("The correct value of a is " + a);
// }
//Q4
// let city = prompt("Enter a city:");

// if (city === "Karachi") {
//   alert("This is Karachi");
// } else if (city === "Lahore") {
//   alert("This is Lahore");
// } else {
//   alert("This is some other city");
// }


//chapter 13 (testing sets of condition)
//Q1
//if (a === b && c === d) {
  // Code to execute if both conditions are true
//}
//Q2
//if (a === b || c !== d) {
  // Code to execute if either or both conditions are true
//}
//Q3
//if (( myName === "Arsalan") && age < 60) {
  // Code to execute if both conditions are true
//}
//Q4
// let num1 = 5;
// let num2 = 10;

// if (num1 < num2 || num1 > num2) {
//   alert("num1 is either less than or greater than num2");
// }
//Q5
// var firstName = "Muneer";
// var lastName = "Ahmed";

// var enteredFirstName = prompt("Enter your first name:");
// var enteredLastName = prompt("Enter your last name:");

// if (enteredFirstName === firstName && enteredLastName === lastName) {
//   alert("Your names match!");
// }

//chapter 14 (if statements nested)
//Q1
// let password = prompt("Enter your password:");

// if (password !== "") {
//   if (password.length <= 5) {
//     alert("Password must be greater than 5");
//   } else {
//     alert("OK");
//   }
// } else {
//   alert("Password cannot be empty");
// }
//Q2
// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }
//Q3
//if (a === 1 && c === "Max") {
 // alert("OK");
//}
//Q4
// let num1 = 10;
// let num2 = 10;

// if (num1 === num2) {
//   if (num1 <= num2) {
//     alert("Both conditions are true: num1 equals num2 and num1 is less than or equal to num2.");
//   }
// }


//chapter 15 (array 1)
//Q1
//let emptyArray = [];
//Q2
//let oneElementArray = ["Hello"];
//Q3
//var alphabet = ["h", "i", "j", "k"];
//alert(alphabet[2]); // Index 2 corresponds to "j"
//Q4
// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// var arrayLength = alphabet.length;
// document.write("The total length of the array is: " + arrayLength);
//Q5
// var singleElementArray = ["boy"];
// singleElementArray[1]="girl";
// alert(singleElementArray[1]); //this will display second element
//


//chapter 16 (array 11)
//Q1
// var singleElement=["Elephant"];
// singleElement.push("Zarafa");
// alert(singleElement[singleElement.length-1]);
//Q2
// var Alphabet = ["h", "i", "j", "k"];
// Alphabet.pop();
// document.write(Alphabet); // This will display: ["h", "i", "j"]
//Q3
// var Alphabet=["h","i","j","k"];
// Alphabet.push(5);
// document.write(Alphabet);
//


//chapter 16 (array111)
//Q1
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.shift();
// document.write(sizes); // This will display: ["M", "XL", "XXL", "XXXL"]
//Q2
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.unshift(1, 2, 3);
// console.log(sizes); // This will display: [1, 2, 3, "S", "M", "XL", "XXL", "XXXL"]
//Q3
// let myArray = ["SecondElement"];
// myArray.unshift("FirstElement");
// alert(myArray[0]); // This will display: FirstElement
//Q4
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// sizes.splice(2, 0, "L");
// console.log(sizes); // This will display: ["S", "M", "L", "XL", "XXL", "XXXL"]
//Q5
// var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// var regSizes = sizes.slice(0, 3);
// console.log(regSizes); // This will display: ["S", "M", "XL"]
//Q6
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 3, "hamster", "rabbit");
// console.log(pets); // This will display: ["dog", "hamster", "rabbit", "frog"]
//Q7
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// pets.splice(1, 2);
// console.log(pets); // This will display: ["dog", "duck", "frog"]
//Q8
// var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// var reducedPets = pets.slice(3, 5);
// console.log(reducedPets); // This will display: ["duck", "frog"]


//chapter (17-20)
//Q1
//for (let i = 0; i < 10; i++){
//}
//Q2
//for (let i = 0; i <=11; i++) {

//}
//Q3
//for (i=0;i<=4;i++)
//Q4
//for (let count = 0; count < 100; count++) {
  // Code to execute in each iteration
//}
//Q5
//for (let count = 0; count < 100; count++) {
  // Code to execute in each iteration
//}
//Q6
//let array = [1, 2, 3, 4, 5];
//let length = array.length;
//console.log(length); // This will display: 5
//Q7
//let flag = true; // or false, depending on your choice
//Q8
//let pets = ["dog", "cat", "ox", "duck", "frog"];
//for (let i = 0; i < pets.length; i++) {
  // Code to execute in each iteration
//}
//console.log(pets);
//Q9
//for (let i = 0; i < 10; i++) {
 // if (i === 1) {
   // alert(i); // This will display: 1
  //  break;
  //}
//}
//Q10
// let userNames = ["Alice", "Bob", "Charlie"];
// let firstName = prompt("Enter first name");

// let nameExists = false;
// for (let i = 0; i < userNames.length; i++) {
//   if (userNames[i] === firstName) {
//     nameExists = true;
//     break;
//   }
// }

// if (nameExists) {
//   alert("Enter");
// } else {
//   alert("Please write correct user name");
// }
//Q11
// var matchFound = false;
// for (var i = 0; i < list.length; i++) {
//   if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = true;
//     break;
//   }
// }
// if (!matchFound) {
//   alert("No match found");
// }
//Q12
// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < firstArr.length; i++) {
//   for (let j = 0; j < secondArr.length; j++) {
//     console.log(firstArr[i] + secondArr[j]);
//   }
// }
//Q13






  