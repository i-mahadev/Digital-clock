let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");

setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML =
        (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML =
        (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML =
        (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    date.innerHTML = currentTime.getDate();
    month.innerHTML = currentTime.toLocaleString('default', { month: 'long' });
    year.innerHTML = currentTime.getFullYear();
}, 1000);
