// console.log(111)
// 身份号密码等信息需要获取（注册/登录的时候获取时的用户）
console.log(localStorage.name);
var a =JSON.parse(localStorage.name);
console.log(a);
$(".name1").val(a.userName);
$(".username").val(a.loginName);
$(".phoneNumber").val(a.phonenumber);
$(".idNumber").val(a.idNumber);
$(".email").val(a.email);
$(".school").val(a.school);
$(".grade").val(a.grade);

$("#btn1").click(function() {
    $.ajax({

            url: "http://59.111.92.205:13002/api/site/logout",
            type: "get",
            contentType: "application / json",
            xhrFields: {
                withCredentials: true // 要在这里设置 跨域设置cookie
            },
            crossDomain: true,

            success: function(res) {
                console.log(res)
                console.log(res);
      localStorage.removeItem("isLogin", true);
      console.log(localStorage.name);
            },
            error:function(err){
                console.log(err)
            }
        })
})