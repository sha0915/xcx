// pages/books/book-list.js
var app = getApp();
var util = require("../../untils/untils.js")
Page({

   /**
    * 页面的初始数据
    */
   data: {
      value:'简爱',
      books:[]
   },
   details(){
      //console.log(this.data.value)
      wx.showLoading({
         title: '正在加载...',
      })
      var url = app.globalData.doubanBase + "/v2/book/search?apikey=0df993c66c0c636e29ecbb5344252a4a&q=" + this.data.value
      //console.log(url)
      wx.request({
         url: url,
         data: {},
         header: {
            "Content-Type": "json"
         },
         method: 'GET',
         success: (res) => {
            //console.log(res)
            var rows = this.data.books.concat(res.data.books);
            this.setData({
               books: rows
            })
            //console.log(this.data.books)
            wx.hideLoading();
         },
         fail: function () {
            console.log("失败")
         }
      })
   },
   goDetails(e){
      var id = e.target.id;
      wx.navigateTo({
         url: '/pages/books/book-details?id='+id,
      })
      console.log(id);
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      this.setData({
         value: options.value
      })
      this.details();
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