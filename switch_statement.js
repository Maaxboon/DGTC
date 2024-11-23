let day = 'Monday';
let isWeekend;

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    isWeekend = false;
    break;
  case "Saturday":
  case "Sunday":
    isWeekend = true;
    break;
  default:
    console.log(day + " is not a valid day");
}
