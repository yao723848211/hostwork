// console.log(111)
// 身份号密码等信息需要获取（注册/登录的时候获取时的用户）
var personal_center = localStorage.getItem(personal_center);
$("#username").attr("value", personal_center.loginName);
$("#email").attr("value", personal_center.email);
$("#iphone").attr("value", personal_center.phonenumber);
$("#name").attr("value", personal_center.userName);
$("#card").attr("value", personal_center.idNumber);