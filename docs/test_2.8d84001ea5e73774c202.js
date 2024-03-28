/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var stages = [{
  questions: ['Какого проекта не было?'],
  answers: [{
    text: 'летающая машина',
    count: 0
  }, {
    text: 'ИИ',
    count: 0
  }, {
    text: 'турбо пес',
    count: 1
  }]
}, {
  questions: ['Какой проект не прошел испытание?'],
  answers: [{
    text: 'турбо автомобиль',
    count: 0
  }, {
    text: 'умный дом',
    count: 0
  }, {
    text: 'все прошли',
    count: 1
  }]
}, {
  questions: ['Это изобретение можно встретить сейчас?'],
  answers: [{
    text: 'водный поезд',
    count: 0
  }, {
    text: 'турбо машина',
    count: 0
  }, {
    text: 'умный дом',
    count: 1
  }]
}, {
  questions: ['Какой из&nbsp;проектов еще не&nbsp;осуществлен?'],
  answers: [{
    text: 'ИИ',
    count: 0
  }, {
    text: 'умный дом',
    count: 0
  }, {
    text: 'турбо авто',
    count: 1
  }]
}, {
  questions: ['Самый быстрый'],
  answers: [{
    text: 'искусственный интеллект',
    count: 1
  }, {
    text: 'турбо машина',
    count: 0
  }, {
    text: 'водный поезд',
    count: 0
  }]
}];
var results = [{
  text1: 'Да ты эксперт!',
  text2: 'Угостишь заливной рыбой?'
}, {
  text1: 'Неплохой результат',
  text2: 'Ты — дитя 90х?'
}, {
  text1: 'Ну блин:(',
  text2: 'Ох уж эти зумеры'
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