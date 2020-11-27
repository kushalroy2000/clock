var date,hr,min,sec,time;

function display(){
    date=new Date();
    hr=date.getHours();
    min=date.getMinutes();
    sec=date.getSeconds();
    time=hr+':'+min+':'+sec; 
    if(sec<10){
        sec="0"+sec;
    }
    document.getElementById('clock').innerHTML=time;
}

display();
setInterval(display,1000);
