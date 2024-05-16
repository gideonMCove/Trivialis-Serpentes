let questions = [
{
    question: "Which of These Snakes Doesn't Have to Mate to Lay Eggs?",
    answers: ["Black Mamba", "Cobra", "Corn Snake","Yellow-Lipped Sea Krait"],
    correct: 2,
    trivia: 'Corn Snakes can reproduce through parthenogenesis, where females lay fertile eggs without a male snake.',
    image: 'cornSnake.jpg'
    // "https://cdn.pixabay.com/photo/2014/12/25/14/54/snake-579682_1280.jpg"
},
{
    question: "What Do Snakes Primarily Smell With?",
    answers: ["Their Nose", "Their Tongue", "Through Their Skin","They Can't Smell"],
    correct: 1,
    trivia: 'While snakes can smell through their nostrils, most of the smelling is done with their tongues, picking up chemical particles in the air.',
    image: 'snakeTongue.avif'
    // "https://images.unsplash.com/photo-1628243777426-b937dc5147e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c25ha2UlMjB0b25ndWV8ZW58MHx8MHx8fDA%3D"
},
{
    question: "Which of These Snakes is Venomous?",
    answers: ["King Cobra", "Milk Snake", "Python", "Kingsnake" ],
    correct: 0,
    trivia: `King Cobra's have a strict snake only diet.`,
    image: 'kingCobra.avif'
    // "https://plus.unsplash.com/premium_photo-1661897154120-5b27cd6a0bd5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2luZyUyMGNvYnJhfGVufDB8fDB8fHww"
},
{
    question: "Are Snakes Warm-Blooded or Cold-Blooded?",
    answers: ["Warm-Blooded", "Cold-Blooded", "Neither", "Both"],
    correct: 0,
    trivia: 'Snakes in the summer can become nocturnal, to avoid the hot summer sun',
    image: 'sunbathingSnake.avif'
    // "https://plus.unsplash.com/premium_photo-1675715924047-a9cf6c539d9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VuYmF0aGluZyUyMHNuYWtlfGVufDB8fDB8fHww"
},
{
    question: "Around How many different species of snake are in the world?",
    answers :["400", "40,000", "10,000","4,000"],
    correct: 3,
    trivia: 'To be specific, there are 4,038 snake species. This makes them the second largest group of reptiles.',
    image: 'snakeSpecies.avif'
    // "https://plus.unsplash.com/premium_photo-1667162417224-b6416612d736?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJldHRpZXN0JTIwc25ha2V8ZW58MHx8MHx8fDA%3D"
},
{
    question: "Which Snake Can Sense Light With its Tail?",
    answers: ["Olive Sea Snake", "Habu Snake", "California King Snake", "Water Moccassin"],
    correct: 0,
    trivia: "Aipysurus laevis, or the Olive Sea Snake, had photoreceptors in its tail, which allows it to detect light.",
    image: 'oliveSeaSnake.jpeg'
    // "https://wiseoceans.com/wp-content/uploads/2023/07/medium.jpeg"
},
{
    question: "Which of These Snakes is Non-Venomous?",
    answers: ["Black Mamba", "King Cobra", "Python", "Cottonmouth"],
    correct: 2,
    trivia: "Pythons kill via constriction instead of using venom",
    image: 'snakePython.avif'
    // "https://cdn.britannica.com/57/159857-050-BEDD9461/python-ball.jpg"
},
{
    question: "What Do Snakes Not Have?",
    answers: ["Teeth","Inner Ears", "Eyelids", "Eyes"],
    correct: 2,
    trivia: "Snakes do not have eyelids. They have a transparent scale called a brille or a spectacle that protects their eyes.",
    image: 'snakeEye.avif'
    // "https://images.unsplash.com/photo-1511824469431-95023c4a9f29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25ha2UlMjBleWV8ZW58MHx8MHx8fDA%3D"
},
{
    question: "Which of These Snakes Do Not Lay Eggs?",
    answers: ["Black Mamba", "Gaboon Viper", "Garter Snake", "Both the Gaboon Viper and Garter Snake"],
    correct: 3,
    trivia: "Gaboon Vipers and Garter Snakes give live birth. Up to 80 Garter Snakes can be born at a time!",
    image: 'snakeGarter.jpg'
    // "https://canadianherpetology.ca/images/animals/Snakes/Red-sided_Gartersnake/01%20Crowley%20Red-sided%20Gartersnake%201.jpg"
},
{
    question: "Which of These Snake Has the Longest Fangs?",
    answers: ["Black Mamba", "King Cobra", "Python", "Gaboon Vipers"],
    correct: 3,
    trivia: "Gaboon Vipers fangs can be up to 5 centimeters long",
    image: 'snakeGaboon.webp'
    // "https://cdn.britannica.com/34/147734-050-0A292F8B/Gaboon-viper-fangs.jpg"
},
{
    question: "About How Many Species of Venomous Snakes are found in the USA?",
    answers: ["1", "127", "30", "57"],
    correct: 2,
    trivia: 'Venom typically either attacks the circulatory system or are neurotoxic',
    image: 'snakeBlackMamba.jpg'
    // "https://miro.medium.com/v2/resize:fit:1400/0*g2Uy0Zn2Xlvrzi73.jpg"
    
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

let goNext = 0
let score = 0
let isDark = 0

//    ~~~ FUNCTIONS ~~~
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

function shuffle (){
    return questions.sort(() => Math.random()-0.5)
}

buttonPlay.addEventListener('click',() => {
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
        goNext +=1
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
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
        
    })
    button1.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        goNext+=1
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
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
    })
    button2.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        goNext+=1
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
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
    })
    button3.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        goNext+=1
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

function playNext () {
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
        goNext +=1
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
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
        
    })
    button1.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        goNext+=1
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
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
    })
    button2.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        goNext+=1
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
                document.getElementById('score').innerText = `Score:${score}`
            }
        }
    })
    button3.addEventListener('click', () => {
        triviaFacts = questions[i].trivia
        document.getElementById('trivia').innerText = triviaFacts
        snakeImage = questions[i].image
        document.getElementById('image').style.backgroundImage = `url("` + questions[i].image + `")`
        goNext+=1
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
        document.getElementById('answer0').style.color = 'white'
        document.getElementById('answer1').style.color = 'white'
        document.getElementById('answer2').style.color = 'white'
        document.getElementById('answer3').style.color = 'white'
        document.getElementById('trivia').style.color = 'white'
        document.body.style.backgroundColor = "#3b3b3b"
        
    }   
    
})