var app = getApp();
var util = require("../../untils/untils.js")
// pages/books/books.js
Page({

  /**
   * 页面的初始数据
   */
   data: {
      value:'',
      searchBooks:{},
      booksNub:'',
      bookShow:false,
   },
   onSearch:function(e){
      let value = e.detail;
      wx.navigateTo({
         url: '/pages/books/book-list?value=' + value,// -传递comment组件
      });
   },
   onBookFocus:function(){
         this.setData({
            bookShow : true,
         })
   },
   onBookBlur:function(){
      this.setData({
         bookShow: false,
      })
   },
   /**
      * 生命周期函数--监听页面加载
      */
   onLoad: function (options) {

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