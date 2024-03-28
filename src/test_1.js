import './index.css'

const stages = [
  {
    questions: ['В каком кино была звуковая отвёртка?'],
    answers: [
      {
        text: 'Доктор Кто',
        count: 1
      },
      {
        text: 'Звездные войны',
        count: 0
      },
      {
        text: 'Солярис',
        count: 0
      }
    ]
  },
  {
    questions: ['А где нам попадался нейрализатор?'],
    answers: [
      {
        text: 'Люди Икс',
        count: 0
      },
      {
        text: 'Люди в черном',
        count: 1
      },
      {
        text: 'Бэтмен',
        count: 0
      }
    ]
  },
  {
    questions: ['Что на счет голограммы?'],
    answers: [
      {
        text: 'Звездные войны',
        count: 1
      },
      {
        text: 'Годзилла',
        count: 0
      },
      {
        text: 'Атлантида',
        count: 0
      }
    ]
  },
  {
    questions: ['Прототип чипа Илона Маска?'],
    answers: [
      {
        text: 'Бегущий по лезвию',
        count: 0
      },
      {
        text: 'Апгрей',
        count: 1
      },
      {
        text: 'Атлантида',
        count: 0
      }
    ]
  },
  {
    questions: ['Ну а наши любимые дроны?'],
    answers: [
      {
        text: 'Звездные войны',
        count: 0
      },
      {
        text: 'Назад в будущее 2',
        count: 1
      },
      {
        text: 'Люди Икс',
        count: 0
      }
    ]
  }
  // {
  //   questions: ['меня зовут'],
  //   answers: [
  //     {
  //       text: 'даша',
  //       count: 1
  //     },
  //     {
  //       text: 'маша',
  //       count: 0
  //     },
  //     {
  //       text: 'костя',
  //       count: 0
  //     }
  //   ]
  // }
]

const results = [
  {
    text1: 'Да ты эксперт!',
    text2: 'Когда своя короткометражка?'
  },
  {
    text1: 'Неплохой результат',
    text2: 'вНе думал пересмотреть «Солярис»?'
  },
  {
    text1: 'Ну блин:(',
    text2: 'Ну-ка бегом читать наши статьи!'
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
