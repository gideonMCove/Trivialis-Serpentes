const questions = [
{
    question: "Which Snake Doesn't Have to Mate to Lay Eggs?",
    answers: ["Copperhead", "Cobra", "Corn Snake"],
    correct: 2
},
{
    question: "What Do Snakes Smell With?",
    answers: ["Their Nose", "Their Tongue", "Through Their Skin"],
    correct: 1
},
{
    question: "Which of These Snakes is Venomous?",
    answers: ["King Cobra", "Garter Snake", "Python" ],
    correct: 0
}
]
let randomInt = 0 
function getRandomInt(min, max ) {   //Random number. min and max is range of questions indices.
    const minCeiled = Math.ceil(min) //Math.Ceil() always rounds up and returns the smallest integer greater than or equal to a given number, we dont want a number less than min
    const maxFloored = Math.floor(max)//Math.floor always rounds down, we dont want a number greater than the max.
   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)     

  }
randomInt = getRandomInt(0,2)
let alreadyAsked = []
function getAlreadyAsked(){//Determines if question has already been asked, if Y then get new question, if N then questions index value gets pushed to array.
    for (i = 0; i<alreadyAsked.length; i++) {
        if (alreadyAsked[i] == randomInt){
            randomInt = getRandomInt(0,2)
            getAlreadyAsked()
            break
        }else if( alreadyAsked[i] != randomInt){
            alreadyAsked.push(randomInt)

        }

        }
        
    
    
    }



console.log(randomInt)
 
