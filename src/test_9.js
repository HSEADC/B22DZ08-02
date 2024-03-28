import './index.css'

const stages = [
  {
    questions: ['Для кого изначально был прибор?'],
    answers: [
      {
        text: 'для больных',
        count: 1
      },
      {
        text: 'для слабовидящих',
        count: 0
      },
      {
        text: 'для всех',
        count: 0
      }
    ]
  },
  {
    questions: ['Как звали ученого разработчика?'],
    answers: [
      {
        text: 'Мария Кюри',
        count: 0
      },
      {
        text: 'Эндрю МакКай',
        count: 1
      },
      {
        text: 'Эмма Рич',
        count: 0
      }
    ]
  },
  {
    questions: ['Какой угол достигался?'],
    answers: [
      {
        text: '180 градусов',
        count: 0
      },
      {
        text: '90 градусов',
        count: 1
      },
      {
        text: '45 градусов',
        count: 0
      }
    ]
  },
  {
    questions: ['Какая технология применялась?'],
    answers: [
      {
        text: 'преломление ',
        count: 1
      },
      {
        text: 'увеличение',
        count: 0
      },
      {
        text: 'искажение',
        count: 0
      }
    ]
  },
  {
    questions: ['Кому сейчас нужны очки?'],
    answers: [
      {
        text: 'всем на свете',
        count: 0
      },
      {
        text: 'больным',
        count: 0
      },
      {
        text: 'особо ленивым',
        count: 0
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
