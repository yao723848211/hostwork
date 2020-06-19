var userInf = JSON.parse(localStorage.userInf)
console.log(userInf)
$("#name1").val(userInf.userName);
$("#phoneNumber").val(userInf.phonenumber)
$("#idNumber").val(userInf.idNumber)
$("#email").val(userInf.email)
$(".school").val(userInf.school);
$(".grade").val(userInf.grade);
$("#btn1").click(function () {
    $.ajax({

        url: "http://59.111.92.205:13002/api/site/logout",
        type: "get",
        contentType: "application / json",
        xhrFields: {
            withCredentials: true // 要在这里设置 跨域设置cookie
        },
        crossDomain: true,

        success: function (res) {
            console.log(res)
            console.log(res);
            localStorage.removeItem("isLogin", true);
            console.log(localStorage.name);
        },
        error: function (err) {
            console.log(err)
        }
    })
})