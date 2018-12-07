var localUser = localStorage.getItem("loggedUser");
var parseLocalUser = JSON.parse(localUser);
var userQr = parseLocalUser.qr;

$("#qrElement").attr("src", userQr);