"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
//MM/DD/YYYY
function getDayName(dateString) {
  //let dataArray = dateString.split("/");
  //let data = new Date(dataArray[2], dataArray[0] - 1, dataArray[1]);
  const data = new Date(dateString);
  let dayName;
  // Write your code here
  const diasSemana = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  dayName = diasSemana[data.getDay()];

  return dayName;
}
