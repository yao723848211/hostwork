// console.log(111)
// 验证码倒计时
/* $("#verification1").click(function () {
    // console.log(11)
    var num = 59;
    $("#verification1").css({
        backgroundColor: '#cccccc',
        cursor: 'not-allowed',
    })
    $("#verification1").html(num + "&nbsp" + "秒后重试")
    var sceonds = setInterval(function () {
        num--;
        if (num > 0 && num < 10) {
            $("#verification1").html("0" + num + "&nbsp" + "秒后重试")

        } else if (num >= 10) {
            $("#verification1").html(num + "&nbsp" + "秒后重试")
        } else if (num == 0) {
            clearInterval(sceonds);
            $("#verification1").html("获取验证码")
            $("#verification1").prop("disabled", "false");
            $("#verification1").css({
                backgroundColor: '#2d8cf0',
                cursor: 'pointer',
                color: '#fff'
            })
        }
    }, 100)
}) */
$(".formBox2 button").click(function () {
    var p1 = $(this);
    var time = 59;
    p1.html('(&nbsp;' + time + '&nbsp;)&nbsp;&nbsp;后重试');
    p1.css({
        backgroundColor: '#f8f8f9',
        cursor: 'not-allowed',
        color: '#C0C0C0'
    });
    var timeFunc = setInterval(function () {
        time--;
        if (time < 10 && time > 0) {
            p1.html('(&nbsp;0' + time + '&nbsp;)&nbsp;&nbsp;后重试');
            p1.prop('disabled', 'true');
        } else if (time >= 10) {
            p1.html('(&nbsp;' + time + '&nbsp;)&nbsp;&nbsp;后重试');
            p1.prop('disabled', 'true');
        } else if (time == 0) {
            clearInterval(timeFunc);
            p1.html('获取验证码');
            p1.prop('disabled', 'false');
            p1.css({
                backgroundColor: '#2d8cf0',
                cursor: 'pointer',
                color: '#fff'
            })
        }
    }, 1000);
})
// 注册流程：点击注册进行判断如果除验证码以外的内容有空的话提示完善信息，让后在进行验证码的校验
 $("#btnRegister").click(function(){
   /*  var text1 = $(".text1").val();
    console.log(32222)
    if(text1 == "" || text1 == null){
        alert("请完善信息后在注册")
    }else if (){

    } */

    // 手机注册


 })
// 获取验证码
$("#btnVerification").click(function(){
    
})