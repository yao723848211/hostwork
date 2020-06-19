// console.log(111)
// 身份号密码等信息需要获取（注册/登录的时候获取时的用户）
var personal_center = localStorage.getItem(personal_center);
$("#username").attr("value", personal_center.loginName);
$("#email").attr("value", personal_center.email);
$("#phoneNumber").attr("value", personal_center.phonenumber);
$("#name1").attr("value", personal_center.userName);
$("#idNumber").attr("value", personal_center.idNumber);

$("#btn1").click(function() {
    $.ajax({

            url: "http://59.111.92.205:13002/api/site/logout",
            type: "get",
            contentType: "application / json",
            xhrFields: {
                withCredentials: true // 要在这里设置 跨域设置cookie
            },
            crossDomain: true,

            success: function(data) {
                // console.log(aaa);
            }
        })
        // window.location.href = "file:///E:/%E9%99%88%E5%86%A0%E6%96%87-%E6%98%9F%E7%81%AB%E5%88%9B%E6%96%B0/html/%E7%99%BB%E5%BD%95.html";

})