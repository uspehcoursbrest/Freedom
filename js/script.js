$(document).ready(function () {
    window.onload=function () {
        function clock() {
            var date=new Date(),
                month=date.getMonth(),
                monthArr=["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Нооя","Дек,],
                    year=date.getFullYear(),
                    hour=date.getHours(),
                    min=date.getMinutes();

                if (day<10) day="0"+day;
                if(hour<10) hour="0"+hour;
            if(min<10) min="0"+min;
            document.getElementById("date").innerHTML=monthArr[month]+""+year;
            document.getElementById("time").innerHTML=hour+":"+min;
            var timer;
            function clockStart() {
                timer=setInterval(clock, 60000);
                clock();
            }
        }
    }

}) 