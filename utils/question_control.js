var questions = require('../resource/res.js')
var util = new require('../utils/util.js')

var questionControl = {
  questions: questions,
  favorite_list: new Set(),
  wrong_list: new Set(),
  answered_list: new Set(),
  right_list: new Set(),
  wronged_list: new Set(),
  view_list: [],
  selectops_list: [],
  vid: 0,
  getNextQuestion: function (step = 1) {
    this.vid += step
    this.vid = Math.min(this.vid, this.view_list.length - 1)
    let qid = this.view_list[this.vid]
    return this.questions[qid]
  },
  getCurrentQuestion: function () {
    let qid = this.view_list[this.vid]
    return this.questions[qid]
  },
  getPreviousQuestion: function (step = 1) {
    this.vid -= step
    this.vid = Math.max(this.vid, 0)
    let qid = this.view_list[this.vid]
    return this.questions[qid]
  },
  getSpecificQuestion: function (vid) {
    this.vid = Math.min(vid, this.view_list.length - 1)
    let qid = this.view_list[this.vid]
    return this.questions[qid]
  },
  answeredQuestion: function (checked_answer, selectedOptions) {
    if (checked_answer.length == 0)
      return
    this.answered_list.add(this.vid)
    this.selectops_list[this.vid] = selectedOptions
  },
  judgeCorrect: function (selectedOptions) {
    let checked_answer = util.convertToAnswer(selectedOptions)
    let answer = this.getCurrentQuestion().answer
    //交集等于并集,则认为集合相等
    let union = answer.concat(checked_answer.filter(v => !answer.includes(v)))
    let except = answer.filter(v => checked_answer.includes(v))
    return union.length != 0 && union.length == except.length
  },
  updateCWList: function (selectedOptions) {
    if (this.judgeCorrect(selectedOptions)) {
      this.right_list.add(this.vid)
      this.wronged_list.delete(this.vid)
    } else {
      this.right_list.delete(this.vid)
      this.wronged_list.add(this.vid)
    }
  },
  updateAnsweredList: function (isanswered) {
    if (isanswered)
      this.answered_list.add(this.vid)
  },
  isAnswered: function () {
    return this.answered_list.has(this.vid)
  },
  isFavorite: function () {
    let qid = this.view_list[this.vid]
    return this.favorite_list.has(qid)
  },
  toggleFavorite: function () {
    let qid = this.view_list[this.vid]
    if (this.favorite_list.has(qid)) {
      this.favorite_list.delete(qid)
      return false
    } else {
      this.favorite_list.add(qid)
      return true
    }
  },
  getSelectedOptions: function () {
    return this.selectops_list[this.vid]
  },
  getQuestionCount: function () {
    return this.questions.length
  },
  setFavoriteList: function (list) {
    this.favorite_list = new Set(list)
  },
  isCorrect: function () {
    return this.right_list.has(this.vid)
  },
  isWrong: function (qid) {
    return this.wrong_list.has(qid)
  },
  setCWrongList: function (list) {
    this.wrong_list = new Set(list)
  },
  toggleWrong: function () {
    let qid = this.view_list[this.vid]
    if (this.favorite.has(qid)) {
      this.wrong_list.delete(qid)
      return false
    } else {
      this.wrong_list.add(qid)
      return true
    }
  },
  finishedYet: function () {
    return this.vid >= this.view_list.length - 1
  }

};

module.exports = {
  questionControl: questionControl
}