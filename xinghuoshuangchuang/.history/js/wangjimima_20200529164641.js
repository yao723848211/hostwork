$(".formBox2 button").click(function () {
    // console.log(11)
    var btn = $(this)
    var num = 59;
    btn.html(num + "&nbsp" + "秒后重试")
    var sceonds = setInterval(function () {
        num--;
        btn.attr("disabled","true");
        btn.css({
            backgroundColor: '#cccccc',
            cursor: 'not-allowed',
        })
        if (num > 0 && num < 10) {
            btn.html("0" + num + "&nbsp" + "秒后重试")
           
        } else if (num >= 10) {
            btn.html(num + "&nbsp" + "秒后重试")
        } else if (num == 0) {
            clearInterval(sceonds);
            btn.html("获取验证码")
            btn.prop("disabled", "false");
            btn.css({
                backgroundColor: '#2d8cf0',
                cursor: 'pointer',
                color: '#fff'
            })
        }
    }, 1000)
})
// 更改面膜
$("#btn1").click(function() {
    var phonenumber = $("#phonenumber").val();
    var password = $("#password").val();
    var code = $("#code").val();
    $.ajax({
        url: "http://59.111.92.205:13002/api/findPwd",
        type: "post",
        contentType: "application/json",
        data: JSON.stringify({
            "phonenumber": phonenumber,
            "password": password,
            "code": code,
        }),
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log(error);
        }
    })
})



$("#verification2").click(function() {
    var phonenumber = $("#phonenumber").val();
    $.ajax({
        url: "http://59.111.92.205:13002/api/sendCode?mobile=" + phonenumber,
        type: "get",
        contentType: "application/json",
        success: function(data) {
            console.log(data)
        },
        error: function(error) {
            console.log(error)
        }
    })
})