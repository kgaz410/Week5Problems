// PROBLEM 1 5/23
// In "the Hunger Games", there are 12 districts, each of which send a tribute to fight in the games. 
// As the capital's resident web developer, you've been given the job of writing a program that can automatically read out the names of all hunger games contestants.

// Write a function called declareTributes that accepts one parameter called listOfTributes, 
// which will be an array of objects. That parameter could receive an argument value like this: 

// let listOfTributes = [
//     {
//         name: "Katniss Everdeen",
//         district: 12
//     },
//     {
//         name: "Cato",
//         district: 2
//     }
// ]


// function declareTributes(list) {
//     return list.name + " from District " + list.district
// }

// let newArray = listOfTributes.map(declareTributes)

// console.log(newArray)

// Your function should output a new array, where each element is a string written in this format:

// [
//   "Katniss Everdeen from District 12",
//   "Cato from District 2"
// ]

// Use one of the array looping methods to solve this puzzle. 




// PROBLEM 2  5/23
// You've finally secured a great programming job at a major toy company. 
// Things have been going pretty smoothly, but this year there's been a big problem. 
// It appears that due to a factory accident, there are some dangerous chemicals in some of the toys. 

// Write a function called removeFaultyToys that accepts one parameter called toyInventory, 
// which you can expect will be an array of objects, where each object is a toy's individual details. 
// That parameter could receive an argument value like this:

let toyInventory2023 = [
    {
        name: "Puzzle Game",
        containsChemicals: true
    },
    {
        name: "Fidget Spinner",
        containsChemicals: true
    },
    {
        name: "Teddy Bear",
        containsChemicals: false
    }
]

function removeFaultyToys (toyInventory){
    if(toyInventory.containsChemicals === false){
        return toyInventory
    }

}

let goodToys = toyInventory2023.filter(removeFaultyToys)
console.log(goodToys)

// Your function should return a new array with only the toys that do NOT contain any dangerous chemicals. 

// Use one of the array looping methods to solve this puzzle.