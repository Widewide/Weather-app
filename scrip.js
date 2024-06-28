// const cityname=document.querySelector("#city");
// const city=cityname.textContent;
const searchBox=document.querySelector(".search input");
const weatherIcon=document.querySelector(".weather-icon");  




async function checkWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a93db1f64296e89e300b4a318d58f39f`;
    const response=await fetch(url);
    if(response.status==404){
        searchBox.value="enter the correct city name";
        document.querySelector(".weather").style.display="none";
    }
    else{
    let data=await response.json();
    console.log(data);
    document.querySelector(".city").textContent=data.name;
    document.querySelector(".temp").textContent=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").textContent=Math.round(data.main.humidity);
    document.querySelector(".windspeed").textContent=Math.round(data.wind.speed)+" Km/hr";

    if(data.weather[0].main=="Clouds"){
        document.querySelector(".weather-icon").src="clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        document.querySelector(".weather-icon").src="clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        document.querySelector(".weather-icon").src="rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        document.querySelector(".weather-icon").src="drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        document.querySelector(".weather-icon").src="mist.png";
    }
    else if(data.weather[0].main=="Snow"){
        document.querySelector(".weather-icon").src="snow.png";
    }
    document.querySelector(".weather").style.display="block";
}
}
const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    if(searchBox.value)
    checkWeather(searchBox.value);
});

searchBox.addEventListener("click",()=>{
    searchBox.value="";
});
