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
    
    
// let topics = ("Rick and Morty", "Modern Family", "family Guy", "The Sopranos", "Sex and the City", "Insecure", "The real housewives of Atlanta", "Ferris Buellers day off");
// // Write your actual code below
// var url = "https://api.giphy.com/v1/gifs/search?limit=10&q=" + topics + "&api_key=1JgZ7zJzRQyi6ykHxyuaaRypiysOaUQm";
// console.log("AM I INCLUDED");
// $.ajax({
//   url: url,
//   method: "GET",
//  sucess:function(response){
//     console.log(response)
//     for(let i = 0; i < topics.length; i++){
//       $(this).attr("data-name")
//       var b = $("<button>");
//       b.addClass("topic");
//       b.attr("data-name", topics[i]);
//       b.text(topics[i]);
//       $("#buttons").append(b);
//     }
//     }
// });
// // giphyButtons();
function giphyInfo(){
  let topics = ("Rick and Morty", "Modern Family", "family Guy", "The Sopranos", "Sex and the City", "Insecure", "The real housewives of Atlanta", "Ferris Buellers day off");
  var url = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=1JgZ7zJzRQyi6ykHxyuaaRypiysOaUQm&limit10";
  console.log();
  ajax({
  url: url,
  method: "GET",
})
.then(function(response){
  console.log(response);
  var topicDiv = $("<div class='topic'>");

  var rating = response.Rated;

  var pRating = $("<p>").text("Rating: "+ rating);

  topicDiv.append(pRating);

  var images = $("<img>").attr("src", imgURL);
  
  topicDive.append(image);
});
}


function renderButtons(){
  $("#buttons").empty();

    // Loops through the array of topics
    let topics = ("Rick and Morty", "Modern Family", "family Guy", "The Sopranos", "Sex and the City", "Insecure", "The real housewives of Atlanta", "Ferris Buellers day off");
    for (var i = 0; i < topics.length; i++) {
      // Then dynamicaly generates buttons for each topic in the array
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
renderButtons();
