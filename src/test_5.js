import './index.css'

const stages = [
  {
    questions: ['В какой стране придумали этого коня?'],
    answers: [
      {
        text: 'Германия',
        count: 0
      },
      {
        text: 'Нидерланды',
        count: 0
      },
      {
        text: 'Италия',
        count: 1
      }
    ]
  },
  {
    questions: ['Для чего он&nbsp;был предназначен'],
    answers: [
      {
        text: 'обучение',
        count: 1
      },
      {
        text: 'игра',
        count: 0
      },
      {
        text: 'развлечение',
        count: 0
      }
    ]
  },
  {
    questions: ['Кто создал прибор?'],
    answers: [
      {
        text: 'отец для сына',
        count: 1
      },
      {
        text: 'бабушка для внучки',
        count: 0
      },
      {
        text: 'мастер',
        count: 0
      }
    ]
  },
  {
    questions: ['Какого века изобретение?'],
    answers: [
      {
        text: 'начало 20-го ',
        count: 1
      },
      {
        text: '19',
        count: 0
      },
      {
        text: '21',
        count: 0
      }
    ]
  },
  {
    questions: ['Для чего сейчас его используют?'],
    answers: [
      {
        text: 'обучение',
        count: 1
      },
      {
        text: 'езда',
        count: 0
      },
      {
        text: 'туризм',
        count: 1
      }
    ]
  }
]

const results = [
  {
    text1: 'Да ты эксперт!',
    text2: 'Ловишь темп'
  },
  {
    text1: 'Неплохой результат',
    text2: 'Мастерские копыта'
  },
  {
    text1: 'Ну блин:(',
    text2: 'Хватит ржать!'
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
