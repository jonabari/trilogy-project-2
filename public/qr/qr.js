var userInfo = JSON.parse(localStorage.getItem("userInfo"));
var userQR = userInfo.qr;

$("#qrElement").attr("src", userQR);
