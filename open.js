const imput =document.querySelector("input");
const searchbox = document.getElementById("searchbox");
const temp =document.getElementById("temp");
const heding=document.getElementById("heding");
const feels_like= document.getElementById("feels_like");
const humidity= document.getElementById("humidity");
const speed = document.getElementById("speed");
const image = document.getElementById("icon");

const error=document.querySelector('.error');
const body=document.querySelector('.body');
async function fetchdata(city){
    const url = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4fce8056fdf66519f0fc40a3f1af5aac`;
    const data =await fetch(`${url}`).then(Response=>Response.json());
    console.log (data);
    if(data.cod===`404`){
        console.log("error");
        body.style.display="none";
        error.style.display="flex";
        return;
    }
    error.style.display="none";
    body.style.display="block";

    temp.innerText=Math.round(data.main.temp-273.15)+"°C";
    heding.innerText=data.weather[0].description;
    feels_like.innerText="feels_like"+Math.round(data.main.feels_like-273.15)+"°C";
    humidity.innerText=data.main.humidity+"%";
    switch(data.weather[0].main){
        case 'Clouds':
        image.className= "fa-solid fa-cloud";
        break;
        case 'Clear':
            image.className="fa-solid fa-sun";
            break;
            case 'Rain':
                image.className="fa-solid fa-cloud-showers-heavy";
                break;
                case 'Mist':
                    image.classNam="fa-solid fa-clouds-sun";
                    break;        
                    case 'Snow':
            image.className="fa-solid fa-snowflake";
            break;
            case 'Drizzle':
                image.className="fa-solid fa-cloud-sun-rain";
                break;
                case 'Haze':
                    image.className="fa-solid fa-smog";
    }               
                   
}
searchbox.addEventListener("click",()=>{
    fetchdata(input.value);
})
 

// const imput =document.querySelector("input");
// const searchbox = document.getElementById("searchbox");
// const temp =document.getElementById("temp");
// async function fetchData(){
// const api= await fetch()
// }// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=4fce8056fdf66519f0fc40a3f1af5aac