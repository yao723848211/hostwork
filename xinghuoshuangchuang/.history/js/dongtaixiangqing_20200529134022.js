// console.log(111)
// 跳转到改界面就马上加载数据
$.ajax({
    url: "http://59.111.92.205:13002/api/innovation/notice/detail",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
        "id": localStorage.nameID
    }),
    success: function (res) {
        console.log(res)
    },
    error: function (err) {
        console.log(err);
    }
})