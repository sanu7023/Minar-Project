// setInterval(() =>{
//     date = new Date();
//     hourTime = date.getHours();
//     minuteTime = date.getMinutes();
//     secondTime = date.getSeconds();

//     hourRotation = 30*hourTime + minuteTime/2;
//     minuteRotation = 6*minuteTime;
//     secondRotation = 6*secondTime;

//     hour.style.transform = `rotate(${hourRotation}deg)`;
//     minute.style.transform = `rotate(${minuteRotation}deg)`;
//     second.style.transform = `rotate(${secondRotation}deg)`;
// },1000);
setInterval(() => {
    date = new Date();
    // console.log(date)
    hourTime = date.getHours();
    // console.log(hourTime)
    minuteTime = date.getMinutes();
    // console.log(minuteTime)
    secondTime = date.getSeconds();
    // console.log(secondTime)

    hourRotation = 30*hourTime + minuteTime/2;
    // console.log(hourRotation)
    minuteRotation = 6*minuteTime;
    // console.log(minuteRotation)
    secondRotation = 6*secondTime;
    // console.log(secondRotation)

    hour.style.transform = `rotate(${hourRotation}deg)`
    minute.style.transform = `rotate(${minuteRotation}deg)`
    second.style.transform = `rotate(${secondRotation}deg)`

},1000)