$(document).ready(function () {
  $(document).click(function (event) {
    var target = $(event.target);
    if (
      !target.closest(".navbar").length &&
      $(".navbar-collapse").hasClass("show")
    ) {
      $(".navbar-toggler").click();
    }
  });
});
