let questions = [
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
    correct: 3,
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


function setBoard(){
    trivaQuestion = ''
        document.getElementById('triviaQuestions').innerText = trivaQuestion
        answer0 = ''
        document.getElementById('answer0').innerText = answer0
        answer1 = ''
        document.getElementById('answer1').innerText = answer1
        answer2 = ''
        document.getElementById('answer2').innerText = answer2
        answer3 = ''
        document.getElementById('answer3').innerText = answer3
        document.getElementById('answer0').style.backgroundColor = null
        document.getElementById('answer1').style.backgroundColor = null
        document.getElementById('answer2').style.backgroundColor = null
        document.getElementById('answer3').style.backgroundColor = null
        




        trivaQuestion = questions[i].question
        document.getElementById('triviaQuestions').innerText = trivaQuestion
        answer0 = questions[i].answers[0]
        document.getElementById('answer0').innerText = answer0
        answer1 = questions[i].answers[1]
        document.getElementById('answer1').innerText = answer1
        answer2 = questions[i].answers[2]
        document.getElementById('answer2').innerText = answer2
        answer3 = questions[i].answers[3]
        document.getElementById('answer3').innerText = answer3
}

let button0 = document.querySelector("#answer0")
let button1 = document.querySelector("#answer1")
let button2 = document.querySelector('#answer2')
let button3 = document.querySelector('#answer3')
let buttonReset = document.querySelector('#reset')
let buttonNext = document.querySelector('#next')
let buttonPlay = document.querySelector('#play')
let goNext = 0
let score = 0



function shuffle (){
    return questions.sort(() => Math.random()-0.5)
}

function playNext () {
    i++
    goNext = 0
    setBoard()
    button0.addEventListener('click', () => {
        goNext ++
        if (questions[i].correct != 0){
            document.getElementById('answer0').style.backgroundColor = '#FF0000'
            if (questions[i].correct == 1){
                document.getElementById('answer1').style.backgroundColor ='#00FF00'
            }else if (questions[i].correct == 2){
                document.getElementById('answer2').style.backgroundColor ='#00FF00'
            }
            else if (questions[i].correct == 3){
                document.getElementById('answer3').style.backgroundColor ='#00FF00'
            }
    
        }else if(questions[i].correct == 0){
            document.getElementById('answer0').style.backgroundColor = '#00FF00'
            if (goNext ==1){
                score++
                document.getElementById('score').innerText = `${score}`
            }
        }
        
    })
    button1.addEventListener('click', () => {
        goNext++
        if (questions[i].correct != 1){
            document.getElementById('answer1').style.backgroundColor = '#FF0000'
            if (questions[i].correct == 0){
                document.getElementById('answer0').style.backgroundColor ='#00FF00'
            }else if (questions[i].correct == 2){
                document.getElementById('answer2').style.backgroundColor ='#00FF00'
            }
            else if (questions[i].correct == 3){
                document.getElementById('answer3').style.backgroundColor ='#00FF00'
            }
    
        }else if(questions[i].correct == 1){
            document.getElementById('answer1').style.backgroundColor = '#00FF00'
            if (goNext ==1){
                score++
                document.getElementById('score').innerText = `${score}`
            }
        }
    })
    button2.addEventListener('click', () => {
        goNext++
        if (questions[i].correct != 2){
            document.getElementById('answer2').style.backgroundColor = '#FF0000'
            if (questions[i].correct == 1){
                document.getElementById('answer1').style.backgroundColor ='#00FF00'
            }else if (questions[i].correct == 0){
                document.getElementById('answer0').style.backgroundColor ='#00FF00'
            }
            else if (questions[i].correct == 3){
                document.getElementById('answer3').style.backgroundColor ='#00FF00'
            }
    
        }else if(questions[i].correct == 2){
            document.getElementById('answer2').style.backgroundColor = '#00FF00'
            if (goNext==1){
                score++
                document.getElementById('score').innerText = `${score}`
            }
        }
    })
    button3.addEventListener('click', () => {
        goNext++
        if (questions[i].correct != 3){
            document.getElementById('answer3').style.backgroundColor = '#FF0000'
            if (questions[i].correct == 1){
                document.getElementById('answer1').style.backgroundColor ='#00FF00'
            }else if (questions[i].correct == 2){
                document.getElementById('answer2').style.backgroundColor ='#00FF00'
            }
            else if (questions[i].correct == 0){
                document.getElementById('answer0').style.backgroundColor ='#00FF00'
            }
    
        }else if(questions[i].correct == 3){
            document.getElementById('answer3').style.backgroundColor = '#00FF00'
            if (goNext==1){
                score++
                document.getElementById('score').innerText = `${score}`
            }
        }
    })
    if(i == (questions.length - 1)){
        trivaQuestion = ''
        document.getElementById('triviaQuestions').innerText = trivaQuestion
        answer0 = ''
        document.getElementById('answer0').innerText = answer0
        answer1 = ''
        document.getElementById('answer1').innerText = answer1
        answer2 = ''
        document.getElementById('answer2').innerText = answer2
        answer3 = ''
        document.getElementById('answer3').innerText = answer3
        document.getElementById('answer0').style.backgroundColor = null
        document.getElementById('answer1').style.backgroundColor = null
        document.getElementById('answer2').style.backgroundColor = null
        document.getElementById('answer3').style.backgroundColor = null
        document.getElementById('score').innerText = `Game Over! You scored ${score}/${questions.length - 1}`
        
    }


}


buttonPlay.addEventListener('click',() => {
    buttonPlay.disabled = true;
    shuffle()    
    i =0                              
    goNext = 0
    score = 0
    setBoard()
    button0.addEventListener('click', () => {
        goNext ++
        if (questions[i].correct != 0){
            document.getElementById('answer0').style.backgroundColor = '#FF0000'
            if (questions[i].correct == 1){
                document.getElementById('answer1').style.backgroundColor ='#00FF00'
            }else if (questions[i].correct == 2){
                document.getElementById('answer2').style.backgroundColor ='#00FF00'
            }
            else if (questions[i].correct == 3){
                document.getElementById('answer3').style.backgroundColor ='#00FF00'
            }
    
        }else if(questions[i].correct == 0){
            document.getElementById('answer0').style.backgroundColor = '#00FF00'
            if (goNext ==1){
                score++
                document.getElementById('score').innerText = `${score}`
            }
        }
        
    })
    button1.addEventListener('click', () => {
        goNext++
        if (questions[i].correct != 1){
            document.getElementById('answer1').style.backgroundColor = '#FF0000'
            if (questions[i].correct == 0){
                document.getElementById('answer0').style.backgroundColor ='#00FF00'
            }else if (questions[i].correct == 2){
                document.getElementById('answer2').style.backgroundColor ='#00FF00'
            }
            else if (questions[i].correct == 3){
                document.getElementById('answer3').style.backgroundColor ='#00FF00'
            }
    
        }else if(questions[i].correct == 1){
            document.getElementById('answer1').style.backgroundColor = '#00FF00'
            if (goNext ==1){
                score++
                document.getElementById('score').innerText = `${score}`
            }
        }
    })
    button2.addEventListener('click', () => {
        goNext++
        if (questions[i].correct != 2){
            document.getElementById('answer2').style.backgroundColor = '#FF0000'
            if (questions[i].correct == 1){
                document.getElementById('answer1').style.backgroundColor ='#00FF00'
            }else if (questions[i].correct == 0){
                document.getElementById('answer0').style.backgroundColor ='#00FF00'
            }
            else if (questions[i].correct == 3){
                document.getElementById('answer3').style.backgroundColor ='#00FF00'
            }
    
        }else if(questions[i].correct == 2){
            document.getElementById('answer2').style.backgroundColor = '#00FF00'
            if (goNext==1){
                score++
                document.getElementById('score').innerText = `${score}`
            }
        }
    })
    button3.addEventListener('click', () => {
        goNext++
        if (questions[i].correct != 3){
            document.getElementById('answer3').style.backgroundColor = '#FF0000'
            if (questions[i].correct == 1){
                document.getElementById('answer1').style.backgroundColor ='#00FF00'
            }else if (questions[i].correct == 2){
                document.getElementById('answer2').style.backgroundColor ='#00FF00'
            }
            else if (questions[i].correct == 0){
                document.getElementById('answer0').style.backgroundColor ='#00FF00'
            }
    
        }else if(questions[i].correct == 3){
            document.getElementById('answer3').style.backgroundColor = '#00FF00'
            if (goNext==1){
                score++
                document.getElementById('score').innerText = `${score}`
            }
        }
    })
    buttonNext.addEventListener('click', () => {
    playNext()
    })
    
    

    }
)