let smallestTime = Infinity;
let smallestTimeFormatted = 0;
var N = parseInt(readline());
for (var i = 0; i < N; i++) {
  var t = readline();
  var currentTime = convertToSec(t);

  if (currentTime < smallestTime) {
    smallestTime = currentTime;
    smallestTimeFormatted = t;
  }
}

console.log(smallestTimeFormatted);

function convertToSec(input) {
  let timeArray = input.split(":");
  let timeInSec = parseInt(timeArray[0]) * 3600 + parseInt(timeArray[1]) * 60 + parseInt(timeArray[2]);
  return timeInSec;
}
