/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var stages = [{
  questions: ['В каком кино была звуковая отвёртка?'],
  answers: [{
    text: 'Доктор Кто',
    count: 1
  }, {
    text: 'Звездные войны',
    count: 0
  }, {
    text: 'Солярис',
    count: 0
  }]
}, {
  questions: ['А где нам попадался нейрализатор?'],
  answers: [{
    text: 'Люди Икс',
    count: 0
  }, {
    text: 'Люди в черном',
    count: 1
  }, {
    text: 'Бэтмен',
    count: 0
  }]
}, {
  questions: ['Что на счет голограммы?'],
  answers: [{
    text: 'Звездные войны',
    count: 1
  }, {
    text: 'Годзилла',
    count: 0
  }, {
    text: 'Атлантида',
    count: 0
  }]
}, {
  questions: ['Прототип чипа Илона Маска?'],
  answers: [{
    text: 'Бегущий по лезвию',
    count: 0
  }, {
    text: 'Апгрей',
    count: 1
  }, {
    text: 'Атлантида',
    count: 0
  }]
}, {
  questions: ['Ну а наши любимые дроны?'],
  answers: [{
    text: 'Звездные войны',
    count: 0
  }, {
    text: 'Назад в будущее 2',
    count: 1
  }, {
    text: 'Люди Икс',
    count: 0
  }]
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
];

var results = [{
  text1: 'Да ты эксперт!',
  text2: 'Когда своя короткометражка?'
}, {
  text1: 'Неплохой результат',
  text2: 'вНе думал пересмотреть «Солярис»?'
}, {
  text1: 'Ну блин:(',
  text2: 'Ну-ка бегом читать наши статьи!'
}];
document.addEventListener('DOMContentLoaded', function () {
  initTest();
  clickButton();
});
var stageCounter = 0;
var resultCounter = 0;
function initTest() {
  var questionNumber = document.querySelector('#pages');
  var question = document.querySelector('#head');
  var answers = document.querySelectorAll('.A_test-button');
  questionNumber.innerHTML = "".concat(stageCounter + 1, "/").concat(stages.length);
  question.innerHTML = stages[stageCounter].questions;
  for (var i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[stageCounter].answers[i].text;
    answers[i].dataset.count = stages[stageCounter].answers[i].count;
  }
}
function clickButton() {
  var answers = document.querySelectorAll('.A_test-button');
  answers.forEach(function (button) {
    button.addEventListener('click', function () {
      resultCounter += Number(button.dataset.count);
      console.log(resultCounter);
      setTimeout(function () {
        newStage();
      }, 500);
    });
  });
}
function newStage() {
  if (stageCounter + 1 < stages.length) {
    stageCounter++;
    initTest();
  } else {
    showResult();
  }
}
function showResult() {
  var test = document.querySelector('.O_test-progress-container');
  var score = document.querySelector('.A_test-score');
  var text = document.querySelector('.A_test-text');
  var comment = document.querySelector('.A_test-comment');
  test.style.display = 'none';
  score.innerHTML = resultCounter;
  switch (resultCounter) {
    case 5:
      text.innerHTML = results[0].text1;
      comment.innerHTML = results[0].text2;
      break;
    case 4:
    case 3:
      text.innerHTML = results[1].text1;
      comment.innerHTML = results[1].text2;
      break;
    case 2:
    case 1:
    case 0:
      text.innerHTML = results[2].text1;
      comment.innerHTML = results[2].text2;
      break;
  }
}
/******/ })()
;