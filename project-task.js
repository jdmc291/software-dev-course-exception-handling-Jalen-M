/*
Scenario:
You’ve been hired to help a local pet shelter digitize its animal adoption records. The program is meant to:
  
  Allow users to enter an animal type and adoption fee.
  
  Add the animal and fee to a list.
  
  Retrieve the adoption fee for a specific animal when requested.

However, the initial developer left the program in a buggy state, with missing exception-handling logic
and some errors in the implementation. Your job is to fix it!



Instructions
Start by Understanding the Errors:
Run the program and observe the exceptions that occur. Document what the exceptions are and where they happen.

Write Exception Handling Code:
Use try/catch blocks to handle the errors so the program doesn’t crash when incorrect input or unexpected situations occur.

Test and Debug:
Test the program with valid and invalid inputs to confirm that exceptions are handled gracefully
and the program continues running as intended.
*/


// Will need to import / install readline-sync if not done so already within project dir: npm install readline-sync 
const readlineSync = require('readline-sync');

// Initial Code with Bugs (modified to use readline-sync)
let animals = [];
let fees = [];
function addAnimal(name, fee) {

    try 
    {
        if(!name)
        {
            throw new Error("Name for animal does not exist");
        }
        animals.push(name)

        if(fee < 0 || !fee)
        {
            throw new Error("Value for fee does not exist or less than 0");
        }

        animals.push(name);
        fees.push(fee);
    }
    catch
    {
        console.error("Please add name for animal and fee above 0");
    }
    // if (!name || fee < 0) {
    //     throw new Error("Invalid animal name or adoption fee!");
    // }
    // animals.push(name);
    // fees.push(fee);
}
function getAdoptionFee(animalName) {

    let index = animals.indexOf(animalName);

    try
    {
        if(index === -1)
        {
            throw new Error("Given animal name does not exist");
        }   

        return fees[index];
    }
    
    catch
    {
        console.error("Animal Not Found");
        return 0;
    }



   /* 
   let index = animals.indexOf(animalName);
    if (index === -1) {
        throw new Error("Animal not found in records!");
    }
    return fees[index]; 
   */
}
// Main program
console.log("Welcome to the Pet Shelter System");
while (true) {
    let action = readlineSync.question("Choose an action: 'add', 'fee', or 'exit': ").toLowerCase();
    if (action === "exit") {
        console.log("Goodbye!");
        break;
    }
    if (action === "add") {
        let animal = readlineSync.question("Enter the animal's name: ");
        let fee = Number(readlineSync.question("Enter the adoption fee: "));
        addAnimal(animal, fee);
        console.log(`${animal} added with a fee of $${fee}.`);
    } else if (action === "fee") {
        let animal = readlineSync.question("Enter the animal's name to find its adoption fee: ");
        console.log(`${animal}'s adoption fee is $${getAdoptionFee(animal)}.`);
    } else {
        console.log("Invalid action. Please choose 'add', 'fee', or 'exit'.");
    }
}



/*
Problems to Solve

Invalid Input Errors:
  What happens if the user provides a negative adoption fee or leaves the name blank?
  My Answer: It throws an exception and the program will stop running

  What happens if the user tries to find the fee for an animal that hasn’t been added?
  My Answer: I got an "invalid email or adoption fee error and the program ends"

Code Flow Problems:
  What happens if the program throws an exception? Does the rest of the code continue running?
  My Answer: The program stops running

Structured Exception Handling:
  Add try/catch blocks to handle the above errors gracefully.
*/
