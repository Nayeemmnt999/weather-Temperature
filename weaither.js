const   API_KEY =  `51178d116d534847efa0313dbd556343`;
const liveWeaither = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric` ;
    fetch(url)
    .then(res => res.json())
    .then(data => loadData(data))

}
const loadData = (weather)=>{
    
    const city = document.getElementById('cityUi')
    
}
liveWeaither('dhaka')