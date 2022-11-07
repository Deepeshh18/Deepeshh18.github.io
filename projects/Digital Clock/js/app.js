// let hr =document.querySelector("#hr");
// let mn =document.querySelector("#mn")
// let sc =document.querySelector("#sc")
// setInterval(()=>{
//     let day= new Date();
//     let hh=da.getHours()*30;
//     let mm=da.getMinutes()*6;
//     let ss=da.getSeconds()*6;

//     hr.style.transform = `rotateZ(${hh + mn / 12}deg)`;
//     hr.style.transform = `rotateZ(${mm}deg)`;
//     hr.style.transform = `rotateZ(${ss}deg)`;
// });

// //digital clock
// let hours = document.getElementById("hour")
// let minutes = document.getElementById("minutes")
// let seconds = document.getElementById("seconds")
// let ampm = document.getElementById("ampm")

// let h = new Data().getHours();
// let m = new Data().getMinutes();
// let s = new Data().getSecconds();
// if(h>12){
//     h=h-12;

// }
// h = h < 10 ? "0" + h : h;
// m = m < 10 ? "0" + m : m;
// s = s < 10 ? "0" + s : s;
// hours.innerHTML=h;
// minutes.innerHTML=m;
// seconds.innerHTML=s;
// ampm.innerHTML =am;


let a = new Date().getFullYear();
document.getElementById("dood").innerHTML = a;

let d = new Date();
document.getElementById("demo").innerHTML = d;


setInterval(showTime, 1000);
function showTime() {
   let time = new Date();
   let hour = time.getHours();
   let min = time.getMinutes();
   let sec = time.getSeconds();
   am_pm = "AM";

  if (hour > 12) {
       hour -= 12;
       am_pm = "PM";
   }
   if (hour == 0) {
       hr = 12;
       am_pm = "AM";
   }

   hour = hour < 10 ? "0" + hour : hour;
   min = min < 10 ? "0" + min : min;
   sec = sec < 10 ? "0" + sec : sec;

   let currentTime = hour + ":"
       + min + ":" + sec + am_pm;

   document.getElementById("time")
       .innerHTML = currentTime;
}

showTime();