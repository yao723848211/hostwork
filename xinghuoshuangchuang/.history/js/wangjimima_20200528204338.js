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