// console.log(111)
// 跳转到改界面就马上加载数据
$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/notice/detail",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
        // 传过来的是ID
        // "id":"20"
        // 这块不能写死了，要根据首页新闻列表的点击情况传值。首先要获取到首页中的ID.就要使用浏览器的缓存了
    }),
    success: function (res) {
        console.log(res)
        $("#title_1").html(res.data.title);
        $("#publishTime_1").html(res.data.publishTime);
        $("#content_1").html(res.data.content);
    },
    error: function (err) {
        console.log(err);
    }
})