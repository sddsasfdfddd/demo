// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  this.initData()
  },
initData:function(){
  //像后端发送请求
  wx.request({
    //请求地址
    url: 'http://localhost:8080/product/list',
    //请求返回的信息
    success: res=>{
       this.setData({
         array:res.data.object
       })
    }
  })
}

})
  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady() {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow() {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide() {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload() {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh() {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom() {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage() {

  // }
