const nameString = document.getElementById("nameString");
const changeBack = document.getElementById("main__div");
const greeting = document.getElementById("greeting");

var nameVar = prompt("Please Enter Your Name");
nameString.innerHTML = nameVar;

const date = new Date();

let hours = date.getHours();

if (hours >= 1 && hours < 12) {
  greeting.innerHTML = "Good Morning";
  changeBack.style.backgroundColor = "green";
} else if (hours >= 12 && hours < 16) {
  greeting.innerHTML = "Good Afternoon";
  changeBack.style.backgroundColor = "gold";
} else {
  greeting.innerHTML = "Good evening";
  changeBack.style.backgroundColor = "orange";
}

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
