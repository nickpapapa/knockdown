// pages/sequence/sequence.js
var qs = require('../../resource/res.js')
var QC = new require('../../utils/question_control.js')
var questioncontrol = QC.questionControl

Page({

  /**
   * 页面的初始数据
   */
  data: {
    questions: questioncontrol.questions,
    favorite_list: questioncontrol.favorite_list,
    wrong_list: questioncontrol.favorite_list,
    showModal:false,
    scrollTop:0,
    layerlayer: {
      isLayerShow: false,//默认弹窗
      layerAnimation: {},//弹窗动画
    },
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this
    const t = options.type
    this.setData({learning_type: t})
    // let questions = this.loadQuestions().questions
    let view_list = wx.getStorageSync(t + 'list')
    let favorite_list = wx.getStorageSync('favorite_list')
    if (favorite_list){
      favorite_list = favorite_list.split(',').map(x => parseInt(x))
      questioncontrol.setFavoriteList(favorite_list)
    }
    if (t == 'favorite') {
      questioncontrol.view_list = favorite_list
      questioncontrol.vid = -1
      self.nextQuestion()
      return
    }
    let wrong_list = wx.getStorageSync('wrong_list')
    if (wrong_list){
      wrong_list = wrong_list.split(',').map(x => parseInt(x))
      questioncontrol.setWrongList(wrong_list)
    }

    let vid = wx.getStorageSync(t+'vid')
    if (vid){
      vid = parseInt(vid)
    }else{
      vid = 0
    }
    
    if (vid>3){
      view_list = view_list.split(',').map(x => parseInt(x))
      wx.showModal({
        title: '是否继续学习',
        content: '上次你学习到' + (vid+1) + '个问题，是否继续？',
        success: function (res) {
          if (res.confirm) {
            questioncontrol.vid = vid - 1
            questioncontrol.view_list = view_list
            self.nextQuestion()
          } 
          else{
            questioncontrol.vid = -1
            questioncontrol.view_list = self.generateList(t, questioncontrol.getQuestionCount())
            self.nextQuestion()
          }
        },
        fail: function () {

        }
      })
    }else{
      questioncontrol.vid = -1
      questioncontrol.view_list = self.generateList(t, questioncontrol.getQuestionCount())
      self.nextQuestion()
    }
  },
  pageClick: function () {
    let layerAnimation = wx.createAnimation({
      transformOrigin: '50% 50%',
      duration: 500,
      timingFunction: 'ease',
      delay: 0
    })
    if (!this.data.layerlayer.isLayerShow) {
      layerAnimation.translate3d(0, 0, 0).step()
    } else {
      layerAnimation.translate3d(0, '100%', 0).step()
    }
    this.data.layerlayer.isLayerShow = !this.data.layerlayer.isLayerShow
    this.data.layerlayer.layerAnimation = layerAnimation
    this.setData(this.data)
  },
  generateList: function(t, count){
    var list = [];
    for (var i = 0; i < count; i++) {
      list.push(i);
  }
  if (t=='random'){
    list = this.shuffle(list)
  }
  return list
},

shuffle: function (a) {
  for(let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
},
nextQuestion: function(){
  if(questioncontrol.finishedYet()){
    wx.showModal({
      title: 'Congratulations!',
      content: '全部学完了',
    })
    return
  }
  let question = questioncontrol.getNextQuestion()
  let favorite = questioncontrol.isFavorite()
  this.setNewQuestion(question, favorite)
},
previousQuestion: function () {
  let question = questioncontrol.getPreviousQuestion()
  let favorite = questioncontrol.isFavorite()
  this.setNewQuestion(question, favorite)
},
specificQuestion: function (evt) {
  let vid=evt.currentTarget.dataset.option-1
  let question = questioncontrol.getSpecificQuestion(vid)
  let favorite = questioncontrol.isFavorite()
  this.setNewQuestion(question, favorite)
},
setNewQuestion: function(question, favorite){
  let selectOpt=new Array(question.choices.length)
  let explanation=question.explanation.join('\n')
  this.setData({
    question: question,
    answer: question.answer,
    favorite: favorite,
    correctid: '',
    wrongid: '',
    disable: '',
    pending: false,
    selectedOptions: selectOpt,
    explanation: explanation
  })
},
selectOption:function(evt){
  var itemId = evt.currentTarget.dataset.num
  if(this.data.selectedOptions[itemId]){
    this.data.selectedOptions[itemId]=undefined
  }else{
    this.data.selectedOptions[itemId]=1
  }
  this.setData({
    selectedOptions: this.data.selectedOptions
  })
},
selectAnswer: function(evt){
  self = this
  let selected = evt.currentTarget.dataset.id
  let act = this.data.answer
  if (selected == act){
    this.setData({
      correctid: selected,
      disable: 'disabled',
      pending: true
    })
    setTimeout(function(){
      self.nextQuestion()
    }, 1000)
  }
  else{
    this.setData({wrongid: selected})
  }
},
btnExplain:function(){
  let explanation=this.data.question.explanation.join('\n')
  this.setData({showModal:true})
},
addFavorite: function(){
  let isFavorite = questioncontrol.toggleFavorite()
  this.setData({ favorite: isFavorite})
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.translate(10).step()
    animation.translate(-10).step()
    animation.translate(0).step()

    this.setData({
      animationData: animation.export()
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    let t = this.data.learning_type
    if(questioncontrol.finishedYet()){
      wx.removeStorageSync(t + 'list')
      wx.removeStorageSync(t + 'vid')
      wx.setStorageSync('favorite_list', [...questioncontrol.favorite_list].toString())
      return
    }
    wx.setStorageSync(t + 'list', questioncontrol.view_list.toString())
    wx.setStorageSync(t+'vid',questioncontrol.vid)
    wx.setStorageSync('favorite_list', [...questioncontrol.favorite_list].toString())
    return
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})