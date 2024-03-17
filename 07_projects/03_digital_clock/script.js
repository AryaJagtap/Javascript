const clock = document.getElementById('clock') // can also use queryselector
// const clock = document.querySelector('#clock')



// set interval methoc in events
// this method tells you ki kitne intervals ke baad wo run hota rahe
// hamesha ye syntax aisa hi likhna nahi to wrong ho jayega
// setInterval(function (){},1000) // 1 sec ke leya 1000 because time milisecond mai hoga

setInterval(function (){
    let date = new Date();
   // console.log(date.toLocaleTimeString());
   clock.innerHTML = date.toLocaleTimeString();
} , 1000);
