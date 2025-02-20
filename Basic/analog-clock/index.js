function updateClock() {
  const now = new Date();
  // console.log(now);

  const hours = now.getHours() % 12; // 12-hour format  if 13 hours after 12hr  format --> 1hr
  const minutes = now.getMinutes(); // get the current minutes
  const seconds = now.getSeconds(); // get the seconds

  const hourDeg = hours * 30 + minutes * 0.5; // 30° per hour + minute adjustment
  // console.log("hours:", hours);
  const minuteDeg = minutes * 6; // 6° per minute
  // console.log("minutes:", minutes);
  const secondDeg = seconds * 6; // 6° per second
  // console.log("seconds: ", seconds);

  document.getElementById("hour").style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById("minute").style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById("second").style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000); // call the function every one seconds
updateClock(); // Call once to set initial time
