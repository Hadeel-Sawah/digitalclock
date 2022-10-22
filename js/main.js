
setInterval(() => {
    let hours = document.getElementById("hh");
    let minetes = document.getElementById("mm");
    let secands = document.getElementById("ss");
    let sec_dot = document.querySelector(".sec_dot");
    let  min_dot = document.querySelector(".min_dot");
    let hr_dot = document.querySelector(".hr_dot");
    let hr_time = document.getElementById('hr-time');
    let min_time = document.getElementById('min-time');
    let sec_time = document.getElementById('sec-time');
    let am_pm = document.getElementById('am-pm');
    let h = new Date().getHours();
    
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? "pm" :"am";
    ////////
    if( h > 12){
       h = h -12;
    };
    /////////
    h = ( h < 10)? `0` + h :h;
    m = ( m < 10)? `0` + m : m;
    s = ( s < 10)? `0` + s : s;
    h >= 12 ? "pm" :"am";
    hr_time.innerHTML=`${h}:` ;
    min_time.innerHTML=`${m}:`;
    sec_time.innerHTML=`${s}`;
    am_pm .innerHTML= am;
    ////////
    // 12hr on the day
    hours.style.strokeDashoffset = 510 - (510 * h) / 12;
    // 60 min on hr
    minetes.style.strokeDashoffset = 630 - (630 * m) / 60;
    // 60 sec on min
    secands.style.strokeDashoffset = 760 - (760 * s) / 60;
    //360 /60sec =6;
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    hr_dot.style.transform = `rotateZ(${h * 30}deg)`;
},0);