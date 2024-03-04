
## Water Jug Challenge

 Logical challenge made to test problem solving skills. (Chicks Gold test.)

## Table of Contents  - [Project Overview](#project-overview) - [Features](#features) - [Installation](#installation) - [Usage](#usage) 

## Project Overview 
The project uses Javascript as the only programming language. 
It has a functional programming approach and abuses `for ()` loops to find a result.
It lacks of a proper UI for common users and for that matter the only way to test the code is to run it in your computer.

## Installation 
It doesn't require an actual process of installation because it is not using any dependencies, due to lack of UI. 
## Usage 
Clone the repository following this steps:

- First on the repository page, click on the green "Code" button. This will reveal a dropdown with a URL. Ensure it's set to HTTPS or SSH, depending on your authentication method.

- Open the terminal or Git bash and apply the following `cd path/to/your/directory`.

- Then on the desired directory `git clone <repository_URL>`'.

- Once you cloned the project, you'll only need manipulate the variables X, Y and Z to expect different outcomes on the `console.log(canMeasureWater(X, Y, Z));`

## Test Cases 
Here are a few examples of test cases made to reach the conclusion for this code snippet:

- Test Case 02 
`const X2 = 2;` // Capacity of jug X
`const Y2 = 8;` // Capacity of jug Y
`const Z2 = 10;` // Desired amount of water

// Expected Result: "Solution Found" since we can measure 10 gallons of water by filling jug Y and pouring it into jug X once.

    console.log(canMeasureWater(X2, Y2, Z2));

- Test Case 05
`const X5 = 2;` // Capacity of jug X
`const Y5 = 4;` // Capacity of jug Y
`const Z5 = -3;` // Desired amount of water (negative number)

// Expected Result: "No Solution" since negative numbers are not allowed for the desired amount of water

    console.log(canMeasureWater(X5, Y5, Z5));

- Test Case 06 
`const X6 = 3;` // Capacity of jug X
`const Y6 = 6;` // Capacity of jug Y
`const Z6 = 'abc';` // Desired amount of water (letters instead of a number)

// Expected Result: "No Solution" since letters are not allowed for the desired amount of water

    console.log(canMeasureWater(X6, Y6, Z6));


> Written with [StackEdit](https://stackedit.io/).


