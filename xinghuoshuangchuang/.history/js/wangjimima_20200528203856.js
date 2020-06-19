$("#verification2").click(function () {
    // console.log(11)
    var num = 59;
    $("#verification2").html(num + "&nbsp" + "秒后重试")
    var sceonds = setInterval(function () {
        num--;
        $("#verification2").attr("disabled","true");
        $("#verification2").css({
            backgroundColor: '#cccccc',
            cursor: 'not-allowed',
        })
        if (num > 0 && num < 10) {
            $("#verification2").html("0" + num + "&nbsp" + "秒后重试")
           
        } else if (num >= 10) {
            $("#verification2").html(num + "&nbsp" + "秒后重试")
        } else if (num == 0) {
            clearInterval(sceonds);
            $("#verification2").html("获取验证码")
            $("#verification2").prop("disabled", "false");
            $("#verification2").css({
                backgroundColor: '#2d8cf0',
                cursor: 'pointer',
                color: '#fff'
            })
        }
    }, 100)
})