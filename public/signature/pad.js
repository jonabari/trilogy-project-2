var wrapper = document.getElementById("signature-pad");
var clearButton = wrapper.querySelector("[data-action=clear]");
var sendButton = wrapper.querySelector("[data-action=send]");
var canvas = wrapper.querySelector("canvas");
var signaturePad = new SignaturePad(canvas, {
  // It's Necessary to use an opaque color when saving image as JPEG;
  // this option can be omitted if only saving as PNG or SVG
  backgroundColor: "rgb(255, 255, 255)"
});

function resizeCanvas() {
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);

  signaturePad.clear();
}

// listen to orientation change,
window.onresize = resizeCanvas;
resizeCanvas();

clearButton.addEventListener("click", function() {
  signaturePad.clear();
});

sendButton.addEventListener("click", function() {
  if (signaturePad.isEmpty()) {
    Swal({
      type: "error",
      title: "Oops...",
      text: "Please provide a signature first"
    });
  } else {
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    console.log(userInfo);
    var deliveringUserId = userInfo.userId;
    console.log(deliveringUserId);
    var deliveringUserEmail = userInfo.email;
    var receivingUserId = parseInt(localStorage.getItem("receivingUserId"), 10);
    var receivingUserEmail = localStorage.getItem("receivingUserEmail");
    var thesignature = signaturePad.toDataURL("image/jpeg", 0.7);
    var newOrder = {
      deliveringUserId: deliveringUserId,
      deliveringUserEmail: deliveringUserEmail,
      receivingUserId: receivingUserId,
      receivingUserEmail: receivingUserEmail,
      signature: thesignature
    };
    $.post("/api/orders", newOrder).then(function(data) {
      if (data.error) {
        console.log("Error ", data.error);
        swal("Error: " + data.error);
      } else {
        console.log(data.dbOrders);
        Swal({
          type: "success",
          title: "Order Registered!",
        }).then(function() {
          window.location.href = "/success";
        });
      }
    });

    localStorage.clear();
  }
});
