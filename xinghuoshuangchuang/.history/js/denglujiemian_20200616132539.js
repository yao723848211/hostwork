// console.log(11)
$("#verification").click(function () {
    // console.log(11)
    var num = 59;
    $("#verification").html(num + "&nbsp" + "秒后重试")
    var sceonds = setInterval(function () {
        num--;
        $("#verification").attr("disabled", "true");
        $("#verification").css({
            backgroundColor: '#cccccc',
            cursor: 'not-allowed',
        })
        if (num > 0 && num < 10) {
            $("#verification").html("0" + num + "&nbsp" + "秒后重试")
        } else if (num >= 10) {
            $("#verification").html(num + "&nbsp" + "秒后重试")
        } else if (num == 0) {
            clearInterval(sceonds);
            $("#verification").html("获取验证码")
            $("#verification").prop("disabled", "false");
            $("#verification").css({
                backgroundColor: '#2d8cf0',
                cursor: 'pointer',
                color: '#fff'
            })
        }
    }, 100)
})

$("#loginBtn1").click(function () {
    var userName = $("#userName").val();
    var password = $("#password").val();
    // console.log(userName, password);
    //登录接口
    $.ajax({
        url: "http://59.111.92.205:13002/api/login",
        type: "POST",
        contentType: "application/x-www-form-urlencoded",
        xhrFields: {
            withCredentials: true // 在这里设置了跨域设置cookie
        },
        data: {
            username: userName,
            password: password,
            rememberMe: true,
        },
        success:function(res){
            // console.log(userName, password);
            console.log(res)
            //个人中心接口
            // $.ajax({
            //     url: "http://59.111.92.205:13002/api/innovation/project/selectProjectBycreateBy",
            //     type: "POST",
            //     contentType: "application/json",
            //     //  需要设置允许请求跨域
            //     xhrFields: {
            //         withCredentials: true // 要在这里设置 跨域设置cookie
            //     },
            //     crossDomain: true,
            //     success: function (res) {
            //         console.log(res)
            //     },
            //     error: function (err) {
            //         console.log(err)
            //     },
            // })
        }
    })
})



