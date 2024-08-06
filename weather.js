const inputbox = document.querySelector('.input-box')
const searchBtn= document.getElementById('searchBtn');
const weather_img= document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const descirption=document.querySelector('.descirption');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');


 async function checkWeather(city){
    const api_key="28511d3db02d96ae086a445c7ef72d77";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    const weather_data= await fetch(`${url}`).then(response =>
        response.json());
        

      temperature.innerHTML=` ${Math.round(weather_data.main.temp-273.15)}°C`;
      descirption.innerHTML=` ${weather_data.weather[0].descirption}`;
      humidity.innerHTML =`${weather_data.main.humidity}% `;
      wind_speed.innerHTML=` ${weather_data.wind.speed}km/H`;


      switch(weather_data.weather[0].main){
        case 'clouds':
      }
    };
    if( searchBtn !=null){
 searchBtn.addEventListener('click', function(e){
  e.preventDefault()
  alert('searchBtn')
 })
};
    
  
    

      
    