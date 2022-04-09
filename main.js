// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.


const numberToString = () => {

  let num1 = Math.floor(Math.random() * 10)
  let str = num1.toString()
  console.log(typeof str,":", str)
  document.getElementById("displaynumber2string").innerHTML = typeof str + " : " + str
}


// Write a JavaScript program to convert a string to the number.


const stringToNumber = (str) =>{


  let num = Number(str)

  document.getElementById("displaystring2number").innerHTML = typeof num + " : " + num



}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

const checkType = (Data) => {

  let element = document.createElement("div")
  element.innerHTML = typeof Data
  let section = document.getElementById("checkdatatype")
  section.appendChild(element)

}

checkType(8)
checkType(true)
checkType("Hello")



  
// Write a JavaScript program that adds 2 numbers together.


const add = (num) => {

  let num1 
  let num2 


  if(num1 === undefined)
  {
    console.log(typeof num1)
    num1 = num
    console.log(typeof num1)
    document.getElementById("text").innerHTML = "Enter second number"
    
  }
  else
  {

    console.log("hello")
    num2 = num

    
    let sum = num1 + num2

    document.getElementById("displayadd").innerHTML = "The sum of " + num1 + "+" + num2 + " = " + sum

  }




}



// Write a JavaScript program that runs only when 2 things are true.

const twoTrue = () => {
  let num1 = Math.floor(Math.random() * 6)
  let num2 = Math.floor(Math.random() * 6)

  if(num1 <= 5 && num2 > 5){
    console.log(num1)
    console.log(num2)
    console.log("twoTrue function ran successfully")
  }

}

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = () => {
  let num1 = Math.floor(Math.random() * 6)
  let num2 = Math.floor(Math.random() * 6)

  if(num1 <= 5 || num2 > 5){
    console.log(num1)
    console.log(num2)
    console.log("oneTrue program ran successfully")
  }

}



const noneTrue = () => {
  let num1 = Math.floor(Math.random() * 6)
  let num2 = Math.floor(Math.random() * 6)

  if((num1 <= 5) === false && (num2 > 5) === false){
    console.log(num1)
    console.log(num2)
    console.log("noneTrue program ran successfully")
  }

}




// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
