$(document).on("keypress", "input", function(e) {
  if (e.which === 13) {
    $.ajax({
      url: "/artists/search_artist",
      data: { artist: $(this).val() },
      dataType: "json",
    }).done(function(data){
      $(".container").empty();
      data.forEach(function(value){
        console.log(value);
        $(".container").append(`<p> ${value.name} </p>`)
      })
    })
  }
});
