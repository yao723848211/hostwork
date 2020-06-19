// console.log(111)
// $("#li_1").click(function () {
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
            $("#newsRightTitle1").html(res.rows[0].title)
            $("#p_1").html(res.rows[0].describe)
            $("#span_1").html(res.rows[0].publishTime)
            localStorage.setItem("nameId",res.rows[0].id)
            console.log(localStorage.nameId);
        },
        error:function(err){
            console.log(err)
        }
    })
// })
$("#li_2").click(function () {
    $.ajax({
        url: "http://59.111.92.205:13002/api/innovation/notice/list",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
            "type": "2",
        }),
        success: function (res) {
            // console.log(res)
            console.log(res.rows)
            $("#newsRightImg2").attr("src",res.rows[0].coverUrl)
            $("#newsRightTitle2").html(res.rows[0].title)
            $("#p_2").html(res.rows[0].describe)
            $("#span_2").html(res.rows[0].publishTime)
            localStorage.setItem("nameId",res.rows[0].id)
            console.log(localStorage.nameId);
        },
        error:function(err){
            console.log(err)
        }
    })
})
$("#li_3").click(function () {
    $.ajax({
        url: "http://59.111.92.205:13002/api/innovation/notice/list",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
            "type": "3",
        }),
        success: function (res) {
            // console.log(res)
            console.log(res.rows)
            $("#newsRightImg3").attr("src",res.rows[0].coverUrl)
            $("#newsRightTitle3").html(res.rows[0].title)
            $("#p_3").html(res.rows[0].describe)
            $("#span_3").html(res.rows[0].publishTime)
            localStorage.setItem("nameId",res.rows[0].id)
            console.log(localStorage.nameId);
        },
        error:function(err){
            console.log(err)
        }
    })
})