// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
   return`This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
  return function(word='special') {
    return `You are ${flair}${word}${flair}!`
  }
}

let encouragingPromptFunction = wrapAdjective('!!!')

let Calculator = {
  add: function(a, b) {
    return a + b
  },
  subtract: function(a, b) {
    return a - b
  },
  multiply: function(a, b) {
    return a * b
  },
  divide: function(a, b) {
    return a/b
  }
}

function actionApplyer(int, array) {
  if (array === undefined || array.length == 0) {
    return int
  } else {
    for (let each of array) {
      int = each(int)
    }
    return int
  }
}