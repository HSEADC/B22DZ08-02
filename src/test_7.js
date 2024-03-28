import './index.css'

const stages = [
  {
    questions: ['За что цепляется зонтик?'],
    answers: [
      {
        text: 'ухо',
        count: 0
      },
      {
        text: 'поводок',
        count: 1
      },
      {
        text: 'хвост',
        count: 0
      }
    ]
  },
  {
    questions: ['Это изобретение является'],
    answers: [
      {
        text: 'чиндогу',
        count: 1
      },
      {
        text: 'советской разработкой',
        count: 0
      },
      {
        text: 'государственной тайной',
        count: 0
      }
    ]
  },
  {
    questions: ['Оказалось&nbsp;ли оно полезным?'],
    answers: [
      {
        text: 'еще как!',
        count: 0
      },
      {
        text: 'вполне',
        count: 0
      },
      {
        text: 'совсем нет',
        count: 1
      }
    ]
  },
  {
    questions: ['Но&nbsp;было&nbsp;ли оно смешным?'],
    answers: [
      {
        text: 'безмерно!! ',
        count: 1
      },
      {
        text: 'не слишком',
        count: 0
      },
      {
        text: 'было забавно',
        count: 0
      }
    ]
  },
  {
    questions: ['На каких собачек расчитан зонтик?'],
    answers: [
      {
        text: 'больших',
        count: 0
      },
      {
        text: 'средних',
        count: 0
      },
      {
        text: 'маленьких',
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
    text2: 'Собачки оценили'
  },
  {
    text1: 'Ну блин:(',
    text2: 'Собачкам на смех'
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
