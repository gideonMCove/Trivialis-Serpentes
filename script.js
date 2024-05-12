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
}
]

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min) //Math.Ceil() always rounds up and returns the smallest integer greater than or equal to a given number, we dont want a number less than min
    const maxFloored = Math.floor(max)//Math.floor always rounds down, we dont want a number greater than the max.
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
  }
  getRandomInt()

  console.log(getRandomInt(0,2))