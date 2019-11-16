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
    
//do I need the for loop in the function?

$(document).on("click", ".topic-btn", getGiphs);

$(document).on("click", ".topic-image", handleImageClick);

function handleImageClick(){
  let currentState = $(this).attr("data-state");
  let stillUrl = $(this).attr("data-still");
  let animatedUrl = $(this).attr("data-animate");
  // console.log(currentState);
  
  if(currentState === "still"){
    $(this).attr("src", animatedUrl);
    $(this).attr("data-state", "animated")
  }
  if (currentState === "animated") {
    $(this).attr("src", stillUrl);
    $(this).attr("data-state", "still")
  }
}

function getGiphs(){
$("#container").empty(); //should I have the click here or separate? should it just be function(giphy){}
console.log("I'm here!");
let topic = $(this).text(); 
  var url = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=1JgZ7zJzRQyi6ykHxyuaaRypiysOaUQm&limit=10";
  console.log(url);
  $.ajax({
    url: url,
    method: "GET",
    success: function(response){
      console.log("RESPONSE:! ", response);
      const dataArray = response.data;
      for (let i = 0; i < dataArray.length; i++) {
        const imageObj = dataArray[i];

        var rating = imageObj.rating;
        var stillImageUrl = imageObj.images.fixed_height_still.url;
        var animatedImageUrl = imageObj.images.fixed_height.url;
        var topicDiv = $("<div class='topic'>");
        
        
        var pRating = $("<p>").text("Rating: "+ rating);
        
        topicDiv.append(pRating);
        
        var image = $("<img>").attr("src", stillImageUrl);
        image.addClass("topic-image");
        image.attr("data-still", stillImageUrl);
        image.attr("data-animate", animatedImageUrl);
        image.attr("data-state", "still")

        
        topicDiv.append(image);  

        $("#container").append(topicDiv);

      }
    }
  })  
}

const topics = ["Rick and Morty", "Modern Family", "family Guy", "The Sopranos", "Sex and the City", "Insecure", "The real housewives of Atlanta", "Ferris Buellers day off"];

function renderButtons(){
  $("#buttons").empty();
  // Loops through the array of topics
  for (var i = 0; i < topics.length; i++) {
    //Then dynamicaly generates buttons for each topic in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adds a class of topic-btn to our button
    a.addClass("topic-btn");
    // Added a data-attribute
    a.attr("data-name", topics[i]);
    // Provided the initial button text
    a.text(topics[i]);
    // Added the button to the buttons-view div
    $("#buttons").append(a);
    console.log("MY BUTTON!")
  }
}


$("#add-topic").on("click", function(event){
  let topic = $("#topic").val().trim();
  console.log("new-topic: ", topic);
  topics.push(topic);
  $("#topic").val(""); 
  localStorage.clear(); 
  localStorage.setItem("#topic", topic);
  $("#container").text(localStorage.getItem("topic"));
  renderButtons();
});

renderButtons();