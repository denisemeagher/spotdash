$(document).on("keypress", "input", function(e) {
  if (e.which === 13) {
    $.ajax({
      url: "/artists/search_artist",
      data: { artist: $(this).val() },
      dataType: "json",
      type: "get"
    }).done(function(data){
      $(".container").empty();
      console.log(data) 
      data.forEach(function(value){
        console.log(value);
        $(".container")
            .append(`<div class="col-md4">
                <p> ${value.name} =>  ${value.type} </p>
                <a href="#" id="save_artist" data-artist="${value.name}"> Save Artist </a>
                <a href="#" id="show_artist"> Show Albums </a>
              </div>`)
      })
    })
  }
});

// if the user click the save Artist button
  // Make a ajax call to post the data to the create action in the artist controller

// if the user click the save Show Albums button
  // Make a get request to the service that will dispaly the albums of that artist you click
    //  Rember to $(this), is to get the value of the button you click, so make a data attribute whene generating the artist card
