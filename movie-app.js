$("#button").on("click", function () {
  let movieTitle = $(".movie-title").val();
  let movieRating = $(".movie-rating").val();
  //   let valid = true;

  //   $("form").each(function () {
  //     if ($(this).is(":invalid") || !$(this).val()) valid = false;
  //   });
  //   if (!valid) alert("error please fill all fields!");
  //   else alert("valid");

  //adding an li of movieTitle and movieRating AND remove button to ul
  $("ul").append(
    "<li>" +
      movieTitle +
      ": " +
      movieRating +
      " <button id='new-button'>Remove Me!</button"
  );

  //clearing input fields after clicking on button
  $(".movie-title").val("");
  $(".movie-rating").val("");

  //onclick removing li from dom

  $("body").on("click", "#new-button", function () {
    $(this).closest("li").remove();
  });
});
