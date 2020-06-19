// console.log(111)
$("#li_1").click(function () {
    $.ajax({
        url: "http://59.111.92.205:13002/api/innovation/notice/list",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
            "type": "1",
        }),
        success: function (res) {
            // console.log(res)
            console.log(res.rows)
            $("#newsRightImg1").attr("src",res.rows[0].coverUrl)
        },
        error:function(err){
            console.log(err)
        }
    })
})