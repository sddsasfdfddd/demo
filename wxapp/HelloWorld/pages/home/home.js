// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"露西",
    age:99,
    flag:true,
    student:{
      sname:"翠花",
      sno:"2020111",
      sclass:"软件工程四班"
    },
    list:[
     {id:1,dname:"boss部"}, //对象默认下标index，默认变量名item
     {id:2,dname:"秘书部"},
     {id:3,dname:"研发部"},
     {id:4,dname:"测试部"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})