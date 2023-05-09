const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevIcon = document.querySelector("#prev");
const nextIcon = document.querySelector("#next");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function renderCalendar() {
  const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
  const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
  let liTag = "";

  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  let selectedArtist=localStorage.getItem("artist_profile")
  for (let i = 1; i <= lastDateOfMonth; i++) {
    const isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear();
    const isBooked = isDateBookedForArtist(i, currMonth, currYear, selectedArtist);
    liTag += `<li class="${isToday ? "active" : ""} ${isBooked ? "booked" : ""}" ${isBooked ? "style='background-color: #ccc;'" : ""}>${i}</li>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
}


function isDateBookedForArtist(day, month, year, artistName) {
  const records = JSON.parse(localStorage.getItem("records_booking_clients"));
  if (!records) {
    return false;
  }
  const filteredRecords = records.filter(record => {
    const recordDate = new Date(record.event_date);
    return recordDate.getDate() === day && recordDate.getMonth() === month && recordDate.getFullYear() === year && record.selected_artist_for_booking === artistName;
  });
  return filteredRecords.length > 0;
}

renderCalendar();

prevIcon.addEventListener("click", () => {
  currMonth--;
  if (currMonth < 0) {
    date = new Date(currYear, 0, new Date().getDate());
    currYear = date.getFullYear();
    currMonth = date.getMonth();
  } else {
    date = new Date();
  }
  renderCalendar();
});

nextIcon.addEventListener("click", () => {
  currMonth++;
  if (currMonth > 11) {
    date = new Date(currYear, 11, new Date().getDate());
    currYear = date.getFullYear();
    currMonth = date.getMonth();
  } else {
    date = new Date();
  }
  renderCalendar();
});


// const notifier = require('node-notifier');

// // get the current date and time
// const now = new Date();

// // set the appointment date and time (replace with the actual appointment date and time)
// const appointmentDate = new Date('2023-05-05T14:00:00');

// // calculate the time difference between now and the appointment date in milliseconds
// const timeDiff = appointmentDate.getTime() - now.getTime();

// // set a timeout to show a reminder message to the user when it's time for the appointment
// setTimeout(function() {
//   notifier.notify({
//     title: 'Appointment Reminder',
//     message: 'Your appointment is in 1 hour!',
//     sound: true, // play a notification sound
//     wait: true, // wait for the user to dismiss the notification
//   });
// }, timeDiff - (60 * 60 * 1000)); // subtract 1 hour from the time difference to show the message 1 hour before the appointment
