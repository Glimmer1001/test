Page({
  data: {
    mid:0
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    console.log(options.id);
    this.setData({
      mid:options.id
    });
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/' + options.id,
      data: {},
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result)=>{
        console.log(result);
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  onReady: function() {
    //Do some when page ready.
    
  },
  onShow: function() {
    //Do some when page show.
    
  },
  onHide: function() {
    //Do some when page hide.
    
  },
  onUnload: function() {
    //Do some when page unload.
    
  },
  onPullDownRefresh: function() {
    //Do some when page pull down.
    
  },
  
})