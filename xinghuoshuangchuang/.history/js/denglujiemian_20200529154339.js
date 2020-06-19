// console.log(11)
$("#verification").click(function () {
    // console.log(11)
    var num = 59;
    $("#verification").html(num + "&nbsp" + "秒后重试")
    var sceonds = setInterval(function () {
        num--;
        $("#verification").attr("disabled","true");
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
$("#loginBtn1").click(function(){
    // var userName = localStorage.userName;
    var userName = $("#userName").val();
    var password = $("#password").val();
    if (userName == "" || passWord == "") {
        console.log("用户名密码不能为空")
    }else {
        // 登录接口
        $.ajax({
            url:"http://59.111.92.205:13002/api/login",
            type:""
        })
    }
  
})
