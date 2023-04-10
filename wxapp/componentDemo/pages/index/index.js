// index.js
// 获取应用实例
const app = getApp();
// let baseURL = app.globalData.baseURL;
Page({
  data: {
    usermList: [],
    userm:{
      id:"",
      uname:"",
      email:""
    }
  },
  onLoad: function(){
   this.getUserList();
  },
  getUserList() {
    wx.request({
      url:"http://localhost:8080/userm/list",
      success:res =>{
        this.setData({
         usermList:res.data.object
        });
      }
    })
  },
  del(e){
    wx.request({
      url: 'http://localhost:8080/' + 'userm/del?id=' + e.target.dataset.id,
      success:res =>{
        this.getUserList();
      }
    })
  },
  toSubmit(e){
    const userm = e.detail.value;
    console.log(userm);
    wx.request({
      url: 'http://localhost:8080/'+'userm/saveOrUpdate',
      data:userm,
      method:"POST",
      success:res=>{
        if(res.data.code==200){
          wx.showToast({
            title: '保存成功',
            icon:"success",
          })
        }
        this.getUserList();
        this.setData({
          userm:{}
        })
      }
    })
  },
  edit(e){
    this.getById(e.target.dataset.id);
  },
  getById(id) {
    wx.request({
      url: 'http://localhost:8080/'+'userm/getById?id='+id,
      success:res=>{
        this.setData({
          userm: res.data.object
        })
      }
    })
  }
})
