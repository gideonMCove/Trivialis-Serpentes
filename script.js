const questions = [
{
    question: "Which Snake Doesn't Have to Mate to Lay Eggs?",
    answers: ["Copperhead", "Cobra", "Corn Snake","Kingsnake"],
    correct: 2
},
{
    question: "What Do Snakes Smell With?",
    answers: ["Their Nose", "Their Tongue", "Through Their Skin","They Can't Smell"],
    correct: 1
},
{
    question: "Which of These Snakes is Venomous?",
    answers: ["King Cobra", "Milk Snake", "Python", "Kingsnake" ],
    correct: 0
},
{
    question: "Are Snakes Warm-Blooded or Cold-Blooded?",
    answers: ["Warm-Blooded", "Cold-Blooded", "Neither", "Both"],
    correct: 0
},
{
    question: "Around How many different species of snake are in the world?",
    answers :["300", "30,000", "10,000","3,000"],
    correct: 3
},
{
    question: "Which Snake Can Sense Light With its Tail?",
    answers: ["Olive Sea Snake", "Habu Snake", "California King Snake", "Water Moccassin"],
    correct: 0,
    trivia: "Aipysurus laevis, or the Olive Sea Snake, had photoreceptors in its tail, which allows it to detect light."
},
{
    question: "Which of These Snakes is Non-Venomous?",
    answers: ["Black Mamba", "King Cobra", "Python", "Cottonmouth"],
    correct: 2,
    trivia: "Pythons kill via constriction instead of using venom"
},
{
    question: "What Do Snakes Not Have?",
    answers: ["Teeth","Inner Ears", "Eyelids", "Eyes"],
    correct: 2,
    trivia: "Snakes do not have eyelids. They have a transparent scale called a brille or a spectacle that protects their eyes."
},
{
    question: "Which of These Snakes Do Not Lay Eggs?",
    answers: ["Black Mamba", "Gaboon Viper", "Garter Snake", "Both the Gaboon Viper and Garter Snake"],
    correct: 1,
    trivia: "Gaboon Vipers and Garter Snakes give live birth. Up to 80 Garter Snakes can be born at a time!"
},
{
    question: "Which of These Snake Has the Longest Fangs?",
    answers: ["Black Mamba", "King Cobra", "Python", "Gaboon Vipers"],
    correct: 3,
    trivia: "Gaboon Vipers fangs can be up to 5 centimeters long"
},
{
    question: "About How Many Species of Venomous Snakes are found in the USA?",
    answers: ["1", "127", "30", "57"],
    correct: 2,
    
}


]
//For (i=0; i<questions.length; i++) {
//      getRandomInt(0,amountQuestions)
//      getAlreadyAsked()
//      getElementById("question").innerHTML = questions[randomInt].question
//      getElementById("answers").innerHTML = questions[randomInt].answers
//      if (inputValue == questions.[randomInt].correct){
//          score +=1
//      if (i == (questions.length) - 1)
//          then do game over.   
//}

let randomInt = 0 
let amountQuestions = questions.length
function getRandomInt(min, max ) {   //Random number. min and max is range of questions indices.
    const minCeiled = Math.ceil(min) //Math.Ceil() always rounds up and returns the smallest integer greater than or equal to a given number, we dont want a number less than min
    const maxFloored = Math.floor(max)//Math.floor always rounds down, we dont want a number greater than the max.
   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
        

  }
randomInt = getRandomInt(0,amountQuestions)
let alreadyAsked = []
function getAlreadyAsked(){//Determines if question has already been asked, if Y then get new question, if N then questions index value gets pushed to array.

        for (i = 0; i<alreadyAsked.length; i++) {
        if (alreadyAsked[i] == randomInt){
            randomInt = getRandomInt(0,2)
            getAlreadyAsked()
            
        }else if( alreadyAsked[i] != randomInt){
            alreadyAsked.push(randomInt)

        }

        }
        
    
    
    }


getAlreadyAsked()
trivaQuestion = questions[randomInt].question
document.getElementById('triviaQuestions').innerText = trivaQuestion
answer0 = questions[randomInt].answers[0]
document.getElementById('answer0').innerText = answer0
answer1 = questions[randomInt].answers[1]
document.getElementById('answer1').innerText = answer1
answer2 = questions[randomInt].answers[2]
document.getElementById('answer2').innerText = answer2
answer3 = questions[randomInt].answers[3]
document.getElementById('answer3').innerText = answer3

let button0 = document.querySelector("#answer0")
let button1 = document.querySelector("#answer1")
let button2 = document.querySelector('#answer2')
let button3 = document.querySelector('#answer3')

button0.addEventListener('click', () => {
    if (questions[randomInt].correct != 0){
        document.getElementById('answer0').style.backgroundColor = '#FF0000'
        if (questions[randomInt].correct == 1){
            document.getElementById('answer1').style.backgroundColor ='#00FF00'
        }else if (questions[randomInt].correct == 2){
            document.getElementById('answer2').style.backgroundColor ='#00FF00'
        }
        else if (questions[randomInt.correct == 3]){
            document.getElementById('answer3').style.backgroundColor ='#00FF00'
        }

    }else if(questions[randomInt.correct == 0]){
        document.getElementById('answer0').style.backgroundColor = '#00FF00'
    }
    
})
button1.addEventListener('click', () => {
    if (questions[randomInt].correct != 1){
        document.getElementById('answer1').style.backgroundColor = '#FF0000'
        if (questions[randomInt].correct == 0){
            document.getElementById('answer0').style.backgroundColor ='#00FF00'
        }else if (questions[randomInt].correct == 2){
            document.getElementById('answer2').style.backgroundColor ='#00FF00'
        }
        else if (questions[randomInt.correct == 3]){
            document.getElementById('answer3').style.backgroundColor ='#00FF00'
        }

    }else if(questions[randomInt.correct == 1]){
        document.getElementById('answer1').style.backgroundColor = '#00FF00'
    }
})
button2.addEventListener('click', () => {
    if (questions[randomInt].correct != 2){
        document.getElementById('answer2').style.backgroundColor = '#FF0000'
        if (questions[randomInt].correct == 1){
            document.getElementById('answer1').style.backgroundColor ='#00FF00'
        }else if (questions[randomInt].correct == 0){
            document.getElementById('answer0').style.backgroundColor ='#00FF00'
        }
        else if (questions[randomInt.correct == 3]){
            document.getElementById('answer3').style.backgroundColor ='#00FF00'
        }

    }else if(questions[randomInt.correct == 2]){
        document.getElementById('answer2').style.backgroundColor = '#00FF00'
    }
})
button3.addEventListener('click', () => {
    if (questions[randomInt].correct != 3){
        document.getElementById('answer3').style.backgroundColor = '#FF0000'
        if (questions[randomInt].correct == 1){
            document.getElementById('answer1').style.backgroundColor ='#00FF00'
        }else if (questions[randomInt].correct == 2){
            document.getElementById('answer2').style.backgroundColor ='#00FF00'
        }
        else if (questions[randomInt.correct == 0]){
            document.getElementById('answer0').style.backgroundColor ='#00FF00'
        }

    }else if(questions[randomInt.correct == 3]){
        document.getElementById('answer3').style.backgroundColor = '#00FF00'
    }
})