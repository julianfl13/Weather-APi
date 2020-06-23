$(document).ready(function(){

$("#search-btn").on("click",function(){
var city = $("#city-input").val();
var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=2739560a0ae503ea11be6b851a65ba4b&units=imperial";
getWeatherApi(city);
});
});

function getWeatherApi(city){
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=2739560a0ae503ea11be6b851a65ba4b&units=imperial",
      dataType:"json",
      success: function(data){
        console.log(data);
        var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")
        $("#cityName").text(data.name + " " + new Date().toLocaleDateString()).append(img);
        $("#temperature").text("Temperature: " + data.main.temp + " °F");
        $("#humidity").text("Humidity: " + data.main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + data.wind.speed + " MPH");
        

        getForecastApi(city);
        getUVI(data.coord.lat, data.coord.lon);
      }
});
}

function getForecastApi(searchValue) {

  $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=2739560a0ae503ea11be6b851a65ba4b&units=imperial",
    dataType: "json",
    success: function (data) {
      console.log(data);
      $("#dayOne").text(data.list[0].dt_txt);
      $("#dayTwo").text(data.list[7].dt_txt);
      $("#dayThree").text(data.list[15].dt_txt);
      $("#dayFour").text(data.list[23].dt_txt);
      $("#dayFive").text(data.list[31].dt_txt);
      // temp 
      $("#tempOne").text("Temp: "+data.list[0].main.temp+" °F")
      $("#tempTwo").text("Temp: "+data.list[7].main.temp+" °F")
      $("#tempThree").text("Temp: "+data.list[15].main.temp+" °F")
      $("#tempFour").text("Temp: "+data.list[23].main.temp+" °F")
      $("#tempFive").text("Temp: "+data.list[31].main.temp+" °F")
      // humidity
      $("#humOne").text("Humidity: "+data.list[0].main.humidity+" %")
      $("#humTwo").text("Humidity: "+data.list[7].main.humidity+" %")
      $("#humThree").text("Humidity: "+data.list[15].main.humidity+" %")
      $("#humFour").text("Humidity: "+data.list[23].main.humidity+" %")
      $("#humFive").text("Humidity: "+data.list[31].main.humidity+" %")







var img2=$("<img>").attr("src", "http://openweathermap.org/img/w/" + data.list[0].dt_txt.icon+ ".png")
      $("#test").append(img2);
      $.each()


    }
  });

    }
