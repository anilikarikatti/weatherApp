// console.log("connected")

const apiKey = "cf4e0bd7e708221d31c41781c549be8e";
let sub= document.getElementById("submit");

sub.addEventListener("click",submit);
function submit(){
    let area = document.getElementById("area");

    city=area.value;

   let url=(city)=> `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//    async function getWeatherByLocation(city){  
//     const resp = await fetch(url(city), {  
//       origin: "cros" });  
//     const respData = await resp.json();  


    async function getWeatherByLocation(city){  
       
        const resp =  await fetch(url(city));  
            if(city == ""){
                alert("please enter city name ")
            }
        const respData = await resp.json();  
     
    // console.log(respData.main.temp);
    // K − 273.15 = °C  kelvin to celsisus

        let cel = respData.main.temp - 273.15;

        // console.log(cel);

        

        // let temp = document.getElementById("temp");

        // temp.innerHTML = `current temperature in  ${city} ` +cel.toFixed(2) + " °C";
        
         alert(`current temperature in  ${city} is ` +cel.toFixed(2) + " °C"
        )

        area.value = ""

        
  }  

  getWeatherByLocation(city);
}

let rest = document.getElementById("reset");
    rest.addEventListener("click",reset); 
    function reset(){
        let area = document.getElementById("area");
        area.value="";

        // let temp = document.getElementById("temp");
        // // temp.style.display= "none"
        // temp.innerHTML = "please enter city name"
}
