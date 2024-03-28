import './index.css'

const stages = [
  {
    questions: ['Как же звали изобретателя?'],
    answers: [
      {
        text: 'Льюис Кэррол',
        count: 0
      },
      {
        text: 'Клайв Синклер',
        count: 1
      },
      {
        text: 'Никола Тесла',
        count: 0
      }
    ]
  },
  {
    questions: ['Его самая известная работа'],
    answers: [
      {
        text: 'Наномашина',
        count: 0
      },
      {
        text: 'Sinclair C5',
        count: 1
      },
      {
        text: 'Super vision',
        count: 0
      }
    ]
  },
  {
    questions: ['Что больше всего любил наш герой?'],
    answers: [
      {
        text: 'все миниатюрное',
        count: 1
      },
      {
        text: 'хорошо поесть',
        count: 0
      },
      {
        text: 'природу',
        count: 0
      }
    ]
  },
  {
    questions: ['Кто вдохновлялся его работами потом?'],
    answers: [
      {
        text: 'Бил Гейтс',
        count: 0
      },
      {
        text: 'Марк Цукерберг',
        count: 0
      },
      {
        text: 'Илон Маск',
        count: 1
      }
    ]
  },
  {
    questions: ['Почему проект не стал популярным?'],
    answers: [
      {
        text: 'слишком нестандартный',
        count: 1
      },
      {
        text: 'неудобный',
        count: 0
      },
      {
        text: 'люди не покупали',
        count: 0
      }
    ]
  }
]

const results = [
  {
    text1: 'Да ты эксперт!',
    text2: 'Молниеносные ответы'
  },
  {
    text1: 'Неплохой результат',
    text2: 'Почти Молния Маквин'
  },
  {
    text1: 'Ну блин:(',
    text2: 'Бывало и лучше'
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
