(function () {
    "use strict";
    var months = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"],

      days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var   dWrap = document.getElementById('wrap'),
          dDialer = document.getElementById('dialer'),
          dSecond = document.getElementById('dialer-second'),
          dMinute = document.getElementById('dialer-minute'),
          dHour = document.getElementById('dialer-hour'),
          dmonth = document.getElementById('month'),
          dtime = document.getElementById('time'),
          dweek = document.getElementById('week'),
          sw = dSecond.offsetWidth,
          mw = dMinute.offsetWidth,
          hw = dHour.offsetWidth,
          fontSize = 20;

    var count =0;
    var build = function (value, dom, radius, unit) {
        var unit = unit ? unit : 60,
          per = 360 / unit,
          style = 'transform: rotate(' + value * per + 'deg) translateX(' + radius + 'px);' +
            '-webkit-transform: rotate( ' + value * per + 'deg) translateX(' + radius + 'px);';

        count ++;
        dom.innerHTML += '<span style="' + style + '"> ' + value + '</span>';
    }

    var setTime = function () {
        var date = new Date(),
          month = date.getMonth(),
          d = date.getDate(),
          week = date.getDay(),
          hour = date.getHours(),
          minute = date.getMinutes(),
          second = date.getSeconds(),
          time = date.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true}),

          hourD = hour * -30,
          minuteD = minute * -6,
          secondD = second * -6;


        dHour.style.transform = 'rotate(' + hourD + 'deg)';
        dMinute.style.transform = 'rotate(' + minuteD + 'deg)';
        dSecond.style.transform = 'rotate(' + secondD + 'deg)';


        dmonth.innerText = d + ' . ' + months[month];
        dtime.innerText = time;
        dweek.innerText = days[week];

    }


    for (var i = 0; i < 60; i++) {
        build(i,dWrap,240);
        build(i, dSecond, 200);
        build(i, dMinute, 140);

    }

    for (var i = 1; i < 13; i++) {
        build(i, dHour, 90, 12);
    }


    setInterval(setTime, 1000);
})()