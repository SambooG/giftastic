// const topics = ("Rick and Morty", "Modern Family", "family Guy", "The Sopranos", "Sex and the City", "Insecure", "skiing", "pets");
// var url = "https://api.giphy.com/v1/gifs/search?limit=10&q=" + "family guy" + "&api_key=1JgZ7zJzRQyi6ykHxyuaaRypiysOaUQm";
// console.log("AM I INCLUDED");
// $.ajax({
//     url: url,
//     method: "GET",
//     success: function(response){
  //       console.log("RESPONSE: ", response);
  //       for (let i = 0; i < response.data.length; i++) {
    //         var a = $("<img>");
    //         a.addClass("giphy");
    //         // Added a data-attribute
    //         a.attr("data-name", response.data[i].title);
    //         a.attr("src", response.data[i].images.original.url);
    //         $(".container").append(a)
    //       }
    //     }
    // });
    
// $(".topic").click(giphyInfo);
    

const topics = ["Rick and Morty", "Modern Family", "family Guy", "The Sopranos", "Sex and the City", "Insecure", "The real housewives of Atlanta", "Ferris Buellers day off"];

$(".topic").click(function(){
  let topic = $(this).text();
  var url = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=1JgZ7zJzRQyi6ykHxyuaaRypiysOaUQm&limit=10";
  console.log(url);
  ajax({
    url: url,
    method: "GET",
    success: function(response){
      console.log(response);
      var topicDiv = $("<div class='topic'>");
      
      var rating = response.rated;
      
      var pRating = $("<p>").text("Rating: "+ rating);
      
      topicDiv.append(pRating);
      
      var images = $("<img>").attr("src", imgURL);
      
      topicDiv.append(images);  
  }
  })  
});
  function renderButtons(){
    $("#buttons").empty();
    // Loops through the array of topics
    let topics = ["Rick and Morty", "Modern Family", "family Guy", "The Sopranos", "Sex and the City", "Insecure", "The real housewives of Atlanta", "Ferris Buellers day off"];
    for (var i = 0; i < topics.length; i++) {
      //Then dynamicaly generates buttons for each topic in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adds a class of topic to our button
      a.addClass("topic-btn");
      // Added a data-attribute
      a.attr("data-name", topics[i]);
      // Provided the initial button text
      a.text(topics[i]);
      // Added the button to the buttons-view div
      $("#buttons").append(a);
    }
  }
  $("#add-topic").on("click", function(event){
    let topic = $("#topic").val().trim();
    topics.push(topic)
  });
  
  renderButtons();