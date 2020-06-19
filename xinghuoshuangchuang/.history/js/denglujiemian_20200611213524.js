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
    // var userName = localStorage.userName;
    var userName = $("#userName").val();
    var password = $("#password").val();
    if (userName == "" || passWord == "") {
        console.log("用户名密码不能为空")
    } else {
        // 登录接口
        $.ajax({
            url: "http://59.111.92.205:13002/api/login",
            type: "POST",
            contentType: "application/x-www-form-urlencoded",
            data: JSON.stringify({
                "userName": userName,
                "passWord": passWord,
                "rememberMe": true,
            }),
            success: function (res) {
                console.log(res);
                if (res.code == 0) {
                    alert("登陆成功");
                    window.open("file:///D:/web05/%E5%A4%A9%E4%BA%AE%E5%88%9B%E6%96%B0%E5%AE%8C%E6%95%B4%E9%A1%B9%E7%9B%AE%E6%90%AD%E5%BB%BA/%E9%A6%96%E9%A1%B5.html")

                    localStorage.setItem("isLogin", true);
                    localStorage.setItem("name", JSON.stringify(res.userInf))
                    /* console.log(a) */
                    // var name = JSON.stringify(localStorage.getItem(name))
                    // console.log(name);
                } else {
                    alert("登陆失败");
                }

                //个人中心接口
                $.ajax({
                    url: "http://59.111.92.205:13002/api/innovation/project/selectProjectBycreateBy",
                    type: "POST",
                    contentType: "application/json",
                    //  需要设置允许请求跨域
                    xhrFields: {
                        withCredentials: true // 要在这里设置 跨域设置cookie
                    },
                    crossDomain: true,
                    success: function (res) {
                        console.log(res)
                        localStorage.setItem("personal_center", data.userInf)
                        localStorage.setItem("denglu", true)
                    },
                    error: function (err) {
                        console.log(err)
                    },
                })
            },
            error: function (err) {
                console.log(err)
            },

        })
    }

})
