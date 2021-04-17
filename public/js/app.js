console.log('Client side JS file is loaded!');

fetch('http://puzzle.mead.io/puzzle').then((res)=>{
    res.json().then((data)=>{
        console.log(data);
    });
});

fetch('http//locahost:3000/weather?address=boston').then(res)=>{
    res.json().then(data)=>{
        if(data.error){
            console.log(data.error);
        }else{
            console.log(data.location);
            console.log(data.forecast);
        }
    }
}

const formWeather = document.querySelector('form');
const search =  document.querySelector('input');
const msgOne =  document.querySelector('#message-1');

msgOne.textContent = 'From JavaScript';


formWeather.addEventListner('submit', (e)=>{
    e.preventDefautl();
    const location = search.value;
   fetch('http//localhost:3000/weather?address' + location).then((res)=>{
       res.json().then((data)=>{
           if(data.error){
               console.log(data.error);
           }else{
               console.log(data.location)
               console.log(data.forecast)
           }
       });
   });
});

alert('Alert working fine');