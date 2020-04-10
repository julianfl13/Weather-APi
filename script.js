$(document).ready(function(){
                                


$("#search-btn").on("click",function(event){

var city = $("#city-input").val().trim();
console.log(city);
var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=2739560a0ae503ea11be6b851a65ba4b";

$.ajax({

    url:queryUrl,
    dataType:"JSON",
    method:"GET",
    data:{
        q:city,
        units: "metric",
        cnt: "10"
    },

}).then(function(response){
    console.log('Received data:', data);

//console.log("Temperature " + response.list[0].main.temp);
//console.log("Humidity " + response.list[0].main.humidity + "%");
//console.log("Wind Speed " + response.list[0].wind.speed) + "mph";


});

})


});
