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

console.log(getDayName("10/20/2021"));
