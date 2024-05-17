let questions = [
{
    question: "Which of These Snakes Doesn't Have to Mate to Lay Eggs?",
    answers: ["Black Mamba", "King Cobra", "Corn Snake","Yellow-Lipped Sea Krait"],
    correct: 2,
    trivia: 'Corn Snakes can reproduce through parthenogenesis, where females lay fertile eggs without a male snake.',
    image: 'cornSnake.jpg',
    alt: 'picture of a corn snake'
    
},
{
    question: "What Do Snakes Primarily Smell With?",
    answers: ["Their Nose", "Their Tongue", "Through Their Skin","They Can't Smell"],
    correct: 1,
    trivia: 'While snakes can smell through their nostrils, most of the smelling is done with their tongues, picking up chemical particles in the air.',
    image: 'snakeTongue.avif',
    alt: 'picture of a snake flicking its tongue'
    
},
{
    question: "Which of These Snakes is Venomous?",
    answers: ["King Cobra", "Milk Snake", "Python", "Kingsnake" ],
    correct: 0,
    trivia: `King Cobra's have a strict snake only diet.`,
    image: 'kingCobra.avif',
    alt: 'King Cobra sitting upright'
    
},
{
    question: "Are Snakes Warm-Blooded or Cold-Blooded?",
    answers: ["Warm-Blooded", "Cold-Blooded", "Neither", "Both"],
    correct: 0,
    trivia: 'Snakes in the summer can become nocturnal, to avoid the hot summer sun',
    image: 'sunbathingSnake.avif',
    alt: 'Snake basking in the sunlight'
    
},
{
    question: "Around How many different species of snake are in the world?",
    answers :["400", "40,000", "10,000","4,000"],
    correct: 3,
    trivia: 'To be specific, there are 4,038 snake species. This makes them the second largest group of reptiles.',
    image: 'snakeSpecies.avif',
    alt: 'Snake curled around branch'
    
},
{
    question: "Which Snake Can Sense Light With its Tail?",
    answers: ["Olive Sea Snake", "Habu Snake", "California King Snake", "Water Moccassin"],
    correct: 0,
    trivia: "Aipysurus laevis, or the Olive Sea Snake, had photoreceptors in its tail, which allows it to detect light.",
    image: 'oliveSeaSnake.jpeg',
    alt: 'Olive Sea Snake is curiously ponders camera man'
},
{
    question: "Which of These Snakes is Non-Venomous?",
    answers: ["Black Mamba", "King Cobra", "Python", "Cottonmouth"],
    correct: 2,
    trivia: "Pythons kill via constriction instead of using venom",
    image: 'snakePython.avif',
    alt: 'Image of a python'
    
},
{
    question: "What Do Snakes Not Have?",
    answers: ["Teeth","Inner Ears", "Eyelids", "Eyes"],
    correct: 2,
    trivia: "Snakes do not have eyelids. They have a transparent scale called a brille or a spectacle that protects their eyes.",
    image: 'snakeEye.avif',
    alt: `Image focused on a snake's eye`
    
},
{
    question: "Which of These Snakes Do Not Lay Eggs?",
    answers: ["Black Mamba", "Gaboon Viper", "Garter Snake", "Both the Gaboon Viper and Garter Snake"],
    correct: 3,
    trivia: "Gaboon Vipers and Garter Snakes give live birth. Up to 80 Garter Snakes can be born at a time!",
    image: 'snakeGarter.jpg',
    alt: 'Image of a garter snake'
    
},
{
    question: "Which of These Snake Has the Longest Fangs?",
    answers: ["Black Mamba", "King Cobra", "Python", "Gaboon Vipers"],
    correct: 3,
    trivia: "Gaboon Vipers fangs can be up to 5 centimeters long",
    image: 'snakeGaboon.webp',
    alt: `image of a gaboon vipers fangs`
    
},
{
    question: "About How Many Species of Venomous Snakes are found in the USA?",
    answers: ["1", "127", "30", "57"],
    correct: 2,
    trivia: 'Venom typically either attacks the circulatory system or are neurotoxic',
    image: 'snakeBlackMamba.jpg',
    alt: 'Image of a black Mamba'   
    
}
]
//     ~~~ VARIABLES ~~~
let button0 = document.querySelector("#answer0")
let button1 = document.querySelector("#answer1")
let button2 = document.querySelector('#answer2')
let button3 = document.querySelector('#answer3')

let buttonReset = document.querySelector('#reset')
let buttonNext = document.querySelector('#next')
let buttonPlay = document.querySelector('#play')
let buttonDarkMode = document.querySelector('#darkMode')

let triviaFacts = document.querySelector('#trivia')
let snakeImage = document.querySelector('#image')
let imageAlt = document.querySelector('#image').alt

let goNext = 0
let score = 0
let isDark = 0

//    ~~~ FUNCTIONS ~~~
function setBoard(){//Removes effects from play and playNext functions

    trivaQuestion = ''
        document.getElementById('triviaQuestions').innerText = trivaQuestion
        answer0 = ''
        document.getElementById('answer0').innerText = answer0
        answer1 = ''
        document.getElementById('answer1').innerText = answer1
        answer2 = ''
        document.getElementById('answer2').innerText = answer2
        answer3 = ''
        document.getElementById('trivia').innerText = triviaFacts
        triviaFacts = ''        
        document.getElementById('answer3').innerText = answer3
        answer3 = ''
        if (isDark %2 == 0){
            document.getElementById('answer0').style.backgroundColor = `whitesmoke`
            document.getElementById('answer1').style.backgroundColor = `whitesmoke`
            document.getElementById('answer2').style.backgroundColor = `whitesmoke`
            document.getElementById('answer3').style.backgroundColor = `whitesmoke`
        }else if(isDark %2 != 0){
            document.getElementById('answer0').style.backgroundColor = `#636363`
            document.getElementById('answer1').style.backgroundColor = `#636363`
            document.getElementById('answer2').style.backgroundColor = `#636363`
            document.getElementById('answer3').style.backgroundColor = `#636363`
        }      

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

function shuffle (){//Credit to Free Code Camp
    return questions.sort(() => Math.random()-0.5)
}

buttonPlay.addEventListener('click',() => {//Turn one of the trivia
    buttonPlay.disabled = true;
    shuffle()    
    i =0                              
    goNext = 0
    score = 0    
    setBoard()
    document.getElementById('trivia').innerHTML = ``
    button0.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        imageAlt = questions[i].alt
        document.getElementById('image').alt = imageAlt
        console.log(imageAlt)
        goNext +=1
        if (questions[i].correct != 0){
            document.getElementById('answer0').style.backgroundColor = '#FF0000'
            goNext +=2
            if (questions[i].correct == 1){
                document.getElementById('answer1').style.backgroundColor ='#00FF00'
                goNext +=2
            }else if (questions[i].correct == 2){
                document.getElementById('answer2').style.backgroundColor ='#00FF00'
                goNext +=2
            }
            else if (questions[i].correct == 3){
                document.getElementById('answer3').style.backgroundColor ='#00FF00'
                goNext +=2
            }
    
        }else if(questions[i].correct == 0){
            document.getElementById('answer0').style.backgroundColor = '#00FF00'
            goNext +=1
            if (goNext ==2){
                score++
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
        
    })
    button1.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        imageAlt = questions[i].alt
        document.getElementById('image').alt = imageAlt
        goNext+=1
        if (questions[i].correct != 1){
            document.getElementById('answer1').style.backgroundColor = '#FF0000'
            goNext +=2
            if (questions[i].correct == 0){
                document.getElementById('answer0').style.backgroundColor ='#00FF00'
                goNext +=2
            }else if (questions[i].correct == 2){
                document.getElementById('answer2').style.backgroundColor ='#00FF00'
                goNext +=2
            }
            else if (questions[i].correct == 3){
                document.getElementById('answer3').style.backgroundColor ='#00FF00'
                goNext +=2
            }
    
        }else if(questions[i].correct == 1){
            document.getElementById('answer1').style.backgroundColor = '#00FF00'
            goNext +=1
            if (goNext ==2){
                score++
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
    })
    button2.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        imageAlt = questions[i].alt
        document.getElementById('image').alt = imageAlt
        goNext+=1
        if (questions[i].correct != 2){
            document.getElementById('answer2').style.backgroundColor = '#FF0000'
            goNext +=2
            if (questions[i].correct == 1){
                document.getElementById('answer1').style.backgroundColor ='#00FF00'
                goNext +=2
            }else if (questions[i].correct == 0){
                document.getElementById('answer0').style.backgroundColor ='#00FF00'
                goNext +=2
            }
            else if (questions[i].correct == 3){
                document.getElementById('answer3').style.backgroundColor ='#00FF00'
                goNext +=2
            }
    
        }else if(questions[i].correct == 2){
            document.getElementById('answer2').style.backgroundColor = '#00FF00'
            goNext +=1
            if (goNext==2){
                score++
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
    })
    button3.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        imageAlt = questions[i].alt
        document.getElementById('image').alt = imageAlt
        goNext+=1
        if (questions[i].correct != 3){
            document.getElementById('answer3').style.backgroundColor = '#FF0000'
            goNext +=2
            if (questions[i].correct == 1){
                document.getElementById('answer1').style.backgroundColor ='#00FF00'
                goNext +=2
            }else if (questions[i].correct == 2){
                document.getElementById('answer2').style.backgroundColor ='#00FF00'
                goNext +=2
            }
            else if (questions[i].correct == 0){
                document.getElementById('answer0').style.backgroundColor ='#00FF00'
                goNext +=2
            }
    
        }else if(questions[i].correct == 3){
            document.getElementById('answer3').style.backgroundColor = '#00FF00'
            goNext +=1
            if (goNext==2){
                score++
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
    })
    buttonNext.addEventListener('click', () => {
    playNext()
    })
    buttonReset.addEventListener('click', () => {
        location.reload()
    })   
    }
)

function playNext () {//Every subsequent turn
    i++
    goNext = 0
    setBoard()
    document.getElementById('trivia').innerText = ''
    document.getElementById('image').style.backgroundImage = null
    button0.addEventListener('click', () => {
        triviaFacts = questions[i].trivia        
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`        
        imageAlt = questions[i].alt
        document.getElementById('image').alt = imageAlt
        goNext +=1
        if (questions[i].correct != 0){
            document.getElementById('answer0').style.backgroundColor = '#FF0000'
            goNext +=2
            if (questions[i].correct == 1){
                document.getElementById('answer1').style.backgroundColor ='#00FF00'
                goNext +=2
            }else if (questions[i].correct == 2){
                document.getElementById('answer2').style.backgroundColor ='#00FF00'
                goNext +=2
            }
            else if (questions[i].correct == 3){
                document.getElementById('answer3').style.backgroundColor ='#00FF00'
                goNext +=2
            }
    
        }else if(questions[i].correct == 0){
            document.getElementById('answer0').style.backgroundColor = '#00FF00'
            goNext +=1
            if (goNext ==2){
                score++
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
        
    })
    button1.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        imageAlt = questions[i].alt
        document.getElementById('image').alt = imageAlt
        goNext+=1
        if (questions[i].correct != 1){
            document.getElementById('answer1').style.backgroundColor = '#FF0000'
            goNext +=2
            if (questions[i].correct == 0){
                document.getElementById('answer0').style.backgroundColor ='#00FF00'
                goNext +=2
            }else if (questions[i].correct == 2){
                document.getElementById('answer2').style.backgroundColor ='#00FF00'
                goNext +=2
            }
            else if (questions[i].correct == 3){
                document.getElementById('answer3').style.backgroundColor ='#00FF00'
                goNext +=2
            }
    
        }else if(questions[i].correct == 1){
            document.getElementById('answer1').style.backgroundColor = '#00FF00'
            goNext +=1
            if (goNext ==2){
                score++
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
    })
    button2.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        imageAlt = questions[i].alt
        document.getElementById('image').alt = imageAlt
        goNext+=1
        if (questions[i].correct != 2){
            document.getElementById('answer2').style.backgroundColor = '#FF0000'
            goNext +=2
            if (questions[i].correct == 1){
                document.getElementById('answer1').style.backgroundColor ='#00FF00'
                goNext +=2
            }else if (questions[i].correct == 0){
                document.getElementById('answer0').style.backgroundColor ='#00FF00'
                goNext +=2
            }
            else if (questions[i].correct == 3){
                document.getElementById('answer3').style.backgroundColor ='#00FF00'
                goNext +=2
            }
    
        }else if(questions[i].correct == 2){
            document.getElementById('answer2').style.backgroundColor = '#00FF00'
            goNext +=1
            if (goNext==2){
                score++
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
    })
    button3.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        imageAlt = questions[i].alt
        document.getElementById('image').alt = imageAlt
        goNext+=1
        if (questions[i].correct != 3){
            document.getElementById('answer3').style.backgroundColor = '#FF0000'
            goNext +=2
            if (questions[i].correct == 1){
                document.getElementById('answer1').style.backgroundColor ='#00FF00'
                goNext +=2
            }else if (questions[i].correct == 2){
                document.getElementById('answer2').style.backgroundColor ='#00FF00'
                goNext +=2
            }
            else if (questions[i].correct == 0){
                document.getElementById('answer0').style.backgroundColor ='#00FF00'
                goNext +=2
            }
    
        }else if(questions[i].correct == 3){
            document.getElementById('answer3').style.backgroundColor = '#00FF00'
            goNext +=1
            if (goNext==2){
                score++
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
    })
    buttonReset.addEventListener('click', () => {
        location.reload()
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

buttonReset.addEventListener('click', () => {
    location.reload()
})

buttonDarkMode.addEventListener('click',() =>{
    isDark += 1
    if (isDark %2 == 0){
        document.getElementById('darkMode').style.backgroundColor = "#3b3b3b"
        document.getElementById('grid').style.backgroundColor = 'aliceblue'
        document.getElementById('triviaQuestions').style.color = "black"
        document.getElementById('triviaQuestions').style.backgroundColor = "whitesmoke"
        document.getElementById('score').style.color = "black"
        document.getElementById('score').style.backgroundColor = "whitesmoke"
        document.getElementById('answer0').style.backgroundColor = "whitesmoke"
        document.getElementById('answer1').style.backgroundColor = "whitesmoke"
        document.getElementById('answer2').style.backgroundColor = "whitesmoke"
        document.getElementById('answer3').style.backgroundColor = "whitesmoke"
        document.getElementById('answer0').style.color = 'black'
        document.getElementById('answer1').style.color = 'black'
        document.getElementById('answer2').style.color = 'black'
        document.getElementById('answer3').style.color = 'black'
        document.getElementById('trivia').style.color = 'black'
        document.body.style.backgroundColor = "aliceblue"
        
    }else{
        document.getElementById('darkMode').style.backgroundColor = "#636363"
        document.getElementById('grid').style.backgroundColor = "#3b3b3b"
        document.getElementById('score').style.color = 'white'
        document.getElementById('score').style.backgroundColor = "#636363"
        document.getElementById('triviaQuestions').style.color = 'white'
        document.getElementById('triviaQuestions').style.backgroundColor ="#636363"
        document.getElementById('answer0').style.backgroundColor = "#636363"
        document.getElementById('answer1').style.backgroundColor = "#636363"
        document.getElementById('answer2').style.backgroundColor = "#636363"
        document.getElementById('answer3').style.backgroundColor = "#636363"
        document.getElementById('answer0').style.color = 'white'
        document.getElementById('answer1').style.color = 'white'
        document.getElementById('answer2').style.color = 'white'
        document.getElementById('answer3').style.color = 'white'
        document.getElementById('trivia').style.color = 'white'
        document.body.style.backgroundColor = "#3b3b3b"
        
    }   
    
})