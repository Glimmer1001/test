Page({
  data: {
    weeklymovielist:[
      {
        name:"肖申克的救赎",
        comment:"策划了19年的私奔……",
        imagepath:"https://img3.doubanio.com/view/photo/m/public/p480747492.jpg",
        id:1291841
      },{
        name:"阿甘正传",
        comment:"羡慕珍妮，不管她多么叛逆、落魄、堕落，永远有阿甘在等她回来",
        imagepath:"https://img1.doubanio.com/view/photo/s_ratio_poster/public/p510876377.jpg",
        id:88
      },{
        name:"死亡诗社",
        comment:"这个时候他该怎么办我想，只能去死了。没想到他真去死了。",
        imagepath:"https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1910824340.jpg",
        id:99
      }
    ],
    currentIndex:0
  },
  onLoad: function(options) {
    //Do some initialize when page load.
    this.setData({
      currentIndex: this.data.weeklymovielist.length - 1
    })
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
  f0:function(){
    this.setData({
      currentIndex: this.data.weeklymovielist.length - 1
    }) 
  },
  f1:function(event){
    var movieId = event.currentTarget.dataset.movieId;
    console.log(movieId);
    wx.navigateTo({
      url: '/pages/details/details?id='+movieId,
      success: ()=>{
        console.log('success')
      },
      fail: ()=>{
        console.log('fail') 
      },
      complete: ()=>{}
    });
  }
})