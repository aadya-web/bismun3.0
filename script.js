const targetDate = new Date("July 25, 2026 09:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = targetDate - now;

const days = Math.floor(distance/(10006060*24));

const hours = Math.floor(
(distance%(10006060*24))
/
(10006060)
);

const minutes = Math.floor(
(distance%(10006060))
/
(1000*60)
);

const seconds = Math.floor(
(distance%(1000*60))
/
1000
);

document.getElementById("countdown").innerHTML =
days + " Days "
+ hours + " Hours "
+ minutes + " Minutes "
+ seconds + " Seconds";

},1000);
