$(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".card").stop().animate(
          {
            top: "-150px", // Increased to lift the card higher
          },
          "slow"
        );
      })
      .mouseleave(function () {
      $(".card").stop().animate(
          {
            top: "15px", // Reset to the original position
          },
          "slow"
        );
      });
  });
  