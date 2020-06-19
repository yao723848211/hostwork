// console.log(111)
// 跳转到改界面就马上加载数据
$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/notice/detail",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
        // 传过来的是ID
        "id":"19"
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