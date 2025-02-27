$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");

    // Wait 5 seconds (5000ms) and redirect to index1.html
    setTimeout(function () {
      window.location.href = "indexOne.html";
    }, 4000);
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});
