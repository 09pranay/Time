//switch cases

//new Date()

function printTime () {
      let d = new Date();
      let hours = d.getHours();
      let minutes = d.getMinutes();
      let seconds = d.getSeconds();

      let day = d.getDay();
      let date = d.getDate();
      let month = d.getMonth();
      let year = d.getFullYear();


switch(day){
 case 0:
     day ="Sun"
     break;
 case 1:
     day ="Mon"
     break;
 case 2:
     day ="Tue"
     break;
 case 3:
     day ="Wen"
     break;
 case 4:
     day ="Thu"
     break;
 case 5:
     day ="Fri"
     break;
 case 0:
     day ="Sat"
     break;
    
}

if (hours<10) {
    hours ="0"+ hours;

}
if (minutes<10) {
    minutes ="0"+ minutes;

}


if (seconds<10) {
    seconds ="0"+ seconds;

}
month = month+1;

document.getElementById("clock").innerHTML= hours+":"+ minutes+":"+seconds

document.getElementById("day-date").innerHTML = day+"/" + date+"/" + month+"/" + year
}
window.onload = function( ) {
    printTime()
}

setInterval(printTime,1000)