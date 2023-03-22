let valuedisplays = document.querySelectorAll(".num");
let interval = 3000;
console.log(valuedisplays);
valuedisplays.forEach((valuedisplay) => {
    let startValue = 0;
    let endValue = parseInt(valuedisplay.getAttribute("data-val"))
    console.log(endValue);
    let duration = Math.floor((interval / endValue));
    let counter = setInterval(function () {
        startValue += 1;
        valuedisplay.textContent = startValue;
        if (startValue === endValue) {
            clearInterval(counter);
        }
    }, duration);
})