$(document).ready(function () {
  $(".btn").on("click", function () {
    // By clicking the button it will show the text in the random div.
    const randomNumber = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const rndInt = randomNumber(1, 9);

    if (rndInt == 1) {
      $(".div1").hide();
      $(".target1").show();
      $(".target1").text("Hello World!");
    } else if (rndInt === 2) {
      $(".div1").hide();
      $(".target2").show();
      $(".target2").text("Hello World!");
    } else if (rndInt === 3) {
      $(".div1").hide();
      $(".target3").show();
      $(".target3").text("Hello World!");
    } else if (rndInt === 4) {
      $(".div1").hide();
      $(".target4").show();
      $(".target4").text("Hello World!");
    } else if (rndInt === 5) {
      $(".div1").hide();
      $(".target5").show();
      $(".target5").text("Hello World!");
    } else if (rndInt === 6) {
      $(".div1").hide();
      $(".target6").show();
      $(".target6").text("Hello World!");
    } else if (rndInt === 7) {
      $(".div1").hide();
      $(".target7").show();
      $(".target7").text("Hello World!");
    } else if (rndInt === 8) {
      $(".div1").hide();
      $(".target8").show();
      $(".target8").text("Hello World!");
    } else if (rndInt === 9) {
      $(".div1").hide();
      $(".target9").show();
      $(".target9").text("Hello World!");
    }
  });

  // Here by clicking the div the text will appear

  // $("#single1").click(function () {
  //   $(".div1").hide();
  //   $(".target1").show();
  //   $(".target1").text("Hello World!");
  // });
  // $("#single2").click(function () {
  //   $(".div1").hide();
  //   $(".target2").show();
  //   $(".target2").text("Hello World!");
  // });
  // $("#single3").click(function (obj) {
  //   $(".div1").hide();
  //   $(".target3").show();
  //   $(".target3").text("Hello World!");
  // });
  // $("#single4").click(function () {
  //   $(".div1").hide();
  //   $(".target4").show();
  //   $(".target4").text("Hello World!");
  // });
  // $("#single5").click(function () {
  //   $(".div1").hide();
  //   $(".target5").show();
  //   $(".target5").text("Hello World!");
  // });
  // $("#single6").click(function () {
  //   $(".div1").hide();
  //   $(".target6").show();
  //   $(".target6").text("Hello World!");
  // });
  // $("#single7").click(function () {
  //   $(".div1").hide();
  //   $(".target7").show();
  //   $(".target7").text("Hello World!");
  // });
  // $("#single8").click(function () {
  //   $(".div1").hide();
  //   $(".target8").show();
  //   $(".target8").text("Hello World!");
  // });
  // $("#single9").click(function () {
  //   $(".div1").hide();
  //   $(".target9").show();
  //   $(".target9").text("Hello World!");
  // });
});
