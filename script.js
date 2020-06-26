$(document).ready(function(){
    // my authorization key //
    var APIkey = "shJ6b4YGtxKsnGTnPl0rzCHdHeaJijIf";
    // url of api authorization //
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIkey  
    
    console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(nyTimesData) {
    console.log(nyTimesData)

var term = "";
var count = "0";
var startYear = "0";
var endYear = 0;






    var term = $("term").eq(0).val();
})
})
