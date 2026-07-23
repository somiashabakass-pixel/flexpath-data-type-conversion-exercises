import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` code below to match the EXACT name
     of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_19();
  // Modify the line of code ABOVE to run a different exercise
}

function exercise_01() {
  /* 
   
    Exercise 1
    
    Data Types: 
		
		1. Create 4 variables to hold a value for each of these four data types:
				- String
				- Number
				- Boolean
				- Object
		2. Then, create a variable and DON'T assign it any value, just declare it. 
		3. Then, using the `typeof` keyword, log the type of each variable (including the unassigned one) to the console
  
  */

  // CODE IN THE OPEN LINES BELOW

  let myString = "Hello, World!";
  let myNumber = 28;
  let myBoolean = true;
  let myObject = { name: "Somaia", age: 28 };
  let myUndefined;

  console.log(typeof myString); // string
  console.log(typeof myNumber); // number
  console.log(typeof myBoolean); // boolean
  console.log(typeof myObject); // object
  console.log(typeof myUndefined); // undefined

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_02() {
  /* 
   
    Exercise 2
    
    Type Conversion: 
		
		1. Create a variable and assign it a Number value
    2. Using the previous variable, convert it to a String and assign it to a new variable
		3. Then, log this new variable to the console along with its type, using typeof

  */

  // CODE IN THE OPEN LINES BELOW

  let myNumber = 28;
  let myString = myNumber.toString();

  console.log(myString); // "28"
  console.log(typeof myString); // "string"

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_03() {
  /* 
   
    Exercise 3
    
    Boolean Conversion: 
		
		1. Create 2 variables: 
      * one that stores a Boolean conversion of the number 0 
      * one that stores a Boolean conversion of the number 1
    2. Then, log both of these variables to the console to see what 
        Booleans these numbers are converted to

  */

  // CODE IN THE OPEN LINES BELOW
  let booLeanZero = boolean(0);
  let booleanOne = boolean(1);
  console.log(booLeanZero); // false
  console.log(booleanOne); // true

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_04() {
  /* 
   
    Exercise 4
    
    Handling NaN: 
		
		1. Create a variable that attempts to convert a non-numeric string to a number
    2. Then, using the method isNan(), check if this variable is Not a Number (NaN)

  */

  // CODE IN THE OPEN LINES BELOW

  let myString = "Not a number";
  let myNumber = Number(myString);
  console.log(isNaN(myNumber)); // true

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_05() {
  /* 
   
    Exercise 5
    
    Template Literals: 
		
		1. Create a variable that stores your age as a Number.
    2. Create a template literal string that embeds this variable in the message:
        "I am [age] years old."
		2. Then, log this string to the console

  */

  // CODE IN THE OPEN LINES BELOW

  let myAge = 28;
  let message = `I am ${myAge} years old.`;
  console.log(message); // "I am 28 years old."

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_06() {
  // DONT edit the code below
  const name = "Alice";
  const number = 5;
  // DONT edit the code above

  /* 
   
    Exercise 6
    
    Concatenate Strings: 
		
		1. Using the `name` and `number` variables above and the `+` operator, 
       create a new string that says "Alice has 5 apples". Then log this string to the console.
       
    2. Then, using the `name` and `number` variables above and a template literal, create a new 
       string that says "Alice has 5 apples". Then log this string to the console.
  */

  // CODE IN THE OPEN LINES BELOW

  let message1 = `${name} has ${number} apples`;
  console.log(message1); // "Alice has 5 apples"
  let message2 = `${name} has ${number} apples`;
  console.log(message2); // "Alice has 5 apples"

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_07() {
  /* 
   
    Exercise 7
    
    JSON Conversion: 
		
		1. Create a JavaScript object, convert it to a JSON string, and log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW

  const myObject = { name: "Alice", age: 28 };
  const jsonString = JSON.stringify(myObject);
  console.log(jsonString); // '{"name":"Alice","age":28}'

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_08() {
  // DONT edit the code below
  const jsonStringToParse = '{"name": "Charlie", "age": 35}';
  // DONT edit the code above

  /* 
   
    Exercise 8
    
    JSON Parsing: 
		
		1. Using the JSON string stored in `jsonStringToParse`, parse this string into an object
       and then print one of its properties.

  */

  // CODE IN THE OPEN LINES BELOW

  const parsedObject = JSON.parse(jsonStringToParse);
  console.log(parsedObject.name); // "Charlie"
  console.log(parsedObject.age); // 35

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_09() {
  /* 
   
    Exercise 9
    
    Math Object: 
		
		1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use Math.round(), Math.ceil(), and Math.floor() on that number, logging 
       the result to the console each time

  */

  // CODE IN THE OPEN LINES BELOW
  let myDecimal = 3.14159;
  console.log(Math.round(myDecimal)); // 3
  console.log(Math.ceil(myDecimal)); // 4
  console.log(Math.floor(myDecimal)); // 3

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_10() {
  /* 
   
    Exercise 10
    
    Decimal Precision: 
		
		1. Create a decimal number variable that has at least 5 numbers after the "."
    2. Then, use toFixed() on the variable and round it to 2 decimal places.
       Log the result to the console.

  */

  // CODE IN THE OPEN LINES BELOW

  const myDecimal = 3.14159;
  console.log(myDecimal.toFixed(2)); // "3.14"

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_11() {
  /* 
   
    Exercise 11
    
    Locale Number Formatting: 
		
		1. Create a variable to hold a large number with 2 decimal points at the end of it
    2. Create a new Intl.NumberFormat object for the US locale
    3. Then, use this new objects `format` function to format the variable from step 1.
       Store the result in a new variable
    4. Log the new variable from step 3 to the console.

  */

  // CODE IN THE OPEN LINES BELOW

  const largeNumber = 12345.67;
  const usFormatter = new Intl.NumberFormat("en-US");
  const formattedNumber = usFormatter.format(largeNumber);
  console.log(formattedNumber); // "12,345.67"

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_12() {
  /* 
   
    Exercise 12
    
    Locale-Based Currency: 
		
		1. Create a variable named `salary` that holds a 5 digit integer
    2. Create a new Intl.NumberFormat object for the US locale, and provide
       an object as the second argument with these property/value pairs:

       {style: "currency", currency: "USD"}

    3. Use this formatter to format the variable from step 1.
       Then log the result to the console

  */

  // CODE IN THE OPEN LINES BELOW

  const salary = 50000;
  const usCurrencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const formattedSalary = usCurrencyFormatter.format(salary);
  console.log(formattedSalary); // "$50,000.00"

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_13() {
  /* 
   
    Exercise 13
    
    Other Locale Currency: 
		
		1. Create a variable named `salary` that holds a 6 digit integer
    2. Create a new Intl.NumberFormat object using "ja-JP" for the first argument, 
       and provide an object as the second argument with these property/value pairs:

      {style: "currency", currency: "JPY"}

    3. Use this formatter to format the variable from step 1.
       Then log the result to the console

  */

  // CODE IN THE OPEN LINES BELOW

  const salary = 50000;
  const jpCurrencyFormatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
  const formattedSalary = jpCurrencyFormatter.format(salary);
  console.log(formattedSalary); // "¥50,000"

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_14() {
  /* 
   
    Exercise 14
    
    Date String Conversion: 

    1. Create a new Date object and assign it to a variable
    2. Then, call toDateString on the variable and print the result to the console
    3. Then, call toTimeString on the variable and print the result to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

  const now = new Date();
  console.log(now.toDateString()); // Current date in string format
  console.log(now.toTimeString()); // Current time in string format

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_15() {
  /* 
   
    Exercise 15
    
    Locale Date Formatting

    1. Create a new Date object and assign it to a variable
    2. Call the toLocaleDateString method on it and convert it to an en-US format date.
       Log it to the console.
    3. Call the toLocaleDateString method on it again and convert it to an en-GB format date.
       Log it to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

  const now = new Date();
  console.log(now.toLocaleDateString("en-US")); // Current date in US format
  console.log(now.toLocaleDateString("en-GB")); // Current date in GB format

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_16() {
  /* 
   
    Exercise 16
    
    Error Handling: 
		
		1. Write code that tries to parse invalid JSON and uses a try-catch block to handle the error.

  */

  // CODE IN THE OPEN LINES BELOW

  try {
    const invalidJSON = '{"name": "John", "age": 30}';
    const parsedJSON = JSON.parse(invalidJSON);
    console.log(parsedJSON);
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
  }

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_17() {
  /* 
   
    Exercise 17

    1. Convert the Boolean value 'true' to a string.
       Log it to he console
    
  */

  // CODE IN THE OPEN LINES BELOW

  const booleanValue = true;
  const stringValue = String(booleanValue);
  console.log(stringValue); // "true"

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_18() {
  /* 
   
    Exercise 18

    1. Create a variable that holds a 9-digit number with 2 decimal places.
    2. Then, use Intl.NumberFormat to create a number formatter for the US, Russia, and Japan.
       For each formatter, provide an object as the second argument with these property/value pairs:

      {style: "currency", currency: "[proper currency string]"}

       Hint: You probably don't know the string arguments to use to do this for Russia.
             Go to Google.com and search "Intl.NumberFormat argument for Russian format"
             Then also look up "Intl.NumberFormat option for Russian currency"
             
             You will forget things all the time in this job, even as an expert.
             There's a lot of information to keep in your head. 

             That's why learning to put together good search prompts in Google and other
             search engines is CRUCIAL in this job.

             Don't worry, you'll get better at this over time as you pick up the terminology
             and understand how programs are written/executed.

    3. Then use each formatter to format the variable from step 1, and log it to the console
       each time.

  */

  // CODE IN THE OPEN LINES BELOW

  const nineDigitNumber = 12345.67;

  const usFormatter = new Intl.NumberFormat("en-US");
  const russiaFormatter = new Intl.NumberFormat("ru-RU");
  const japanFormatter = new Intl.NumberFormat("ja-JP");

  console.log(usFormatter.format(nineDigitNumber));
  console.log(russiaFormatter.format(nineDigitNumber));
  console.log(japanFormatter.format(nineDigitNumber));

  // CODE IN THE OPEN LINES ABOVE
}

function exercise_19() {
  /* 
   
    Exercise 19
    
    Date Arithmetic: 

    1. Create a variable to hold a new Date object for today's date.
    2. Create a variable to hold a new Date object for a future date sometime next year
    3. Find the time difference between the future date and the current date
    4. Convert this time difference to days
    5. Log the day difference to the console
		
  */

  // CODE IN THE OPEN LINES BELOW

  const now = new Date();
  const futureDate = new Date(
    now.getFullYear() + 1,
    now.getMonth(),
    now.getDate(),
  );
  const timeDifference = futureDate - now;
  const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  console.log(dayDifference);

  // CODE IN THE OPEN LINES ABOVE
}
