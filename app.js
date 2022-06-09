const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");



/* unncesesary for my B/D
const currentDate = new Date();
let thisYear = currentDate.getFullYear();
let thisMonth = currentDate.getMonth();
let thisDay = currentDate.getDate();
*/
const oneYear = 365 * 24 * 60 * 60 * 1000;

const futureDate = new Date(2023, 3, 3, 00, 00, 0)
const birthDate = new Date(2004, 3, 3, 00, 00, 0)
const age = Math.floor((futureDate.getTime() - birthDate.getTime()) / oneYear);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const day = futureDate.getDate();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

//-- to add an additional 0 before hours/minutes 
function format(item) {
    if (item < 10) {
        return  (item = `0${item}`);
    }
    return item;
}
giveaway.textContent = `Birthday Countdown : ${weekday}, ${day} ${month} ${year} ${format(hour)}:${format(min)}am. Turning: ${age}years`;

const futureTime = futureDate.getTime();
function getRemaindingTime() {
const today = new Date().getTime();
const difference = futureTime - today;


const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;

const daysLeft = Math.floor(difference / oneDay);
const hoursLeft = Math.floor((difference % oneDay) / oneHour);
const minsLeft = Math.floor((difference % oneHour) / oneMinute);
const secsLeft = Math.floor((difference % oneMinute) / 1000);

const timeLeft = [daysLeft, hoursLeft, minsLeft, secsLeft];


items.forEach(function (item, index) {
    item.innerHTML  = format(timeLeft[index]);
});
if (difference < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">It's Your Birthday! Congratulations!</h4>`;
  }
}


let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();