import './index.css'

const stages = [
  {
    questions: ['Кто придумал чиндогу?'],
    answers: [
      {
        text: 'Илон Маск',
        count: 0
      },
      {
        text: 'Кенджи Каваками',
        count: 1
      },
      {
        text: 'Никола Тесла',
        count: 0
      }
    ]
  },
  {
    questions: ['Самое известное чиндогу'],
    answers: [
      {
        text: 'селфи-палка',
        count: 1
      },
      {
        text: 'носочес',
        count: 0
      },
      {
        text: 'помомен',
        count: 0
      }
    ]
  },
  {
    questions: ['А&nbsp;какое было в&nbsp;статье?'],
    answers: [
      {
        text: 'Щетка для лапок',
        count: 1
      },
      {
        text: 'Маска для льда',
        count: 0
      },
      {
        text: 'Скейторолик',
        count: 0
      }
    ]
  },
  {
    questions: ['В какой стране зародилось?'],
    answers: [
      {
        text: 'Ямайка',
        count: 0
      },
      {
        text: 'Аргентина',
        count: 0
      },
      {
        text: 'Япония',
        count: 1
      }
    ]
  },
  {
    questions: ['Где работал создатель?'],
    answers: [
      {
        text: 'кафе',
        count: 0
      },
      {
        text: 'больница',
        count: 0
      },
      {
        text: 'магазин на диване',
        count: 1
      }
    ]
  }
]

const results = [
  {
    text1: 'Да ты эксперт!',
    text2: 'Вселяешь уважение'
  },
  {
    text1: 'Неплохой результат',
    text2: 'Мы оценили'
  },
  {
    text1: 'Ну блин:(',
    text2: 'Старайся лучше!'
  }
]

document.addEventListener('DOMContentLoaded', () => {
  initTest()
  clickButton()
})

let stageCounter = 0
let resultCounter = 0

function initTest() {
  const questionNumber = document.querySelector('#pages')
  const question = document.querySelector('#head')
  const answers = document.querySelectorAll('.A_test-button')

  questionNumber.innerHTML = `${stageCounter + 1}/${stages.length}`
  question.innerHTML = stages[stageCounter].questions

  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[stageCounter].answers[i].text
    answers[i].dataset.count = stages[stageCounter].answers[i].count
  }
}

function clickButton() {
  const answers = document.querySelectorAll('.A_test-button')

  answers.forEach((button) => {
    button.addEventListener('click', () => {
      resultCounter += Number(button.dataset.count)
      console.log(resultCounter)
      setTimeout(() => {
        newStage()
      }, 500)
    })
  })
}

function newStage() {
  if (stageCounter + 1 < stages.length) {
    stageCounter++
    initTest()
  } else {
    showResult()
  }
}

function showResult() {
  const test = document.querySelector('.O_test-progress-container')
  const score = document.querySelector('.A_test-score')
  const text = document.querySelector('.A_test-text')
  const comment = document.querySelector('.A_test-comment')

  test.style.display = 'none'
  score.innerHTML = resultCounter

  switch (resultCounter) {
    case 5:
      text.innerHTML = results[0].text1
      comment.innerHTML = results[0].text2
      break
    case 4:
    case 3:
      text.innerHTML = results[1].text1
      comment.innerHTML = results[1].text2
      break
    case 2:
    case 1:
    case 0:
      text.innerHTML = results[2].text1
      comment.innerHTML = results[2].text2
      break
  }
}
