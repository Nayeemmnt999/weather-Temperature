const   API_KEY =  `51178d116d534847efa0313dbd556343`;
const liveWeaither = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric` ;
    fetch(url)
    .then(res => res.json())
    .then(data => loadData(data))

}
const loadData = (weather)=>{
    // console.log(weather);
    const city = document.getElementById('tempUi');
    city.innerText = weather.main.temp ;
    
    const cloud = document.getElementById('clouds');
    cloud.innerText = weather.weather[0].main
}

document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const fieldValue = searchField.value;
    liveWeaither(fieldValue)
})

liveWeaither('dhaka')