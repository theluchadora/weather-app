var button = document.querySelector(".button"); 
var inputValue = document.querySelector(".inputValue");
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");



// When button is clicked
button.addEventListener('click', function() {
   
    // Fetch the weather data for the entered city
    // from this website https://home.openweathermap.org/
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=your api ')
    .then(response => response.json())
    .then(data => {
           var nameValue = data['name'];
           var tempValue = data['main']['temp'];
           var descValue = data['weather'][0]['description'];

           name.innerHML = nameValue;
           temp.innerHTML = `${Math.round(tempValue - 273.15)}°C`;
           desc.innerHTML = descValue;
       
    })
    .catch(errr => alert("wrong city name!"));
});
