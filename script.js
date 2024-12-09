const apikey = "a23423f82fa2be602dbb3795c50f12ee";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const wIcon = document.querySelector(".weather-icon");



async  function checkweather(city) {

  const response = await fetch(apiurl + city + `&appid=${apikey}`);
   if(response.status == 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }

  else{
               
            
  var data = await response.json();


  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if(data.weather[0].main == "Clouds"){
    wIcon.src="images/clouds.png";
  }
      else if(data.weather[0].main == "Clear"){
         wIcon.src="images/clear.png"      
    }
     
    else if(data.weather[0].main == "Rain" ){
        wIcon.src="images/rain.png"      
   }
    else if(data.weather[0].main == "Drizzle"){
        wIcon.src="images/drizzle.png"      
   }
        
      else if(data.weather[0].main == "Mist"){
        wIcon.src="images/mist.png"      
   }
   
   document.querySelector(".weather").style.display ="block";
   document.querySelector(".error").style.display="none";



  }

 
}

searchbtn.addEventListener("click", () => {
    // document.querySelector(".weather").style.display = "block";
    checkweather(searchbox.value);

})



