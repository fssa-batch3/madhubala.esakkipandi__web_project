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

  for (let i = 1; i <= lastDateOfMonth; i++) {
    const isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear();
    liTag += `<li class="${isToday ? "active" : ""}">${i}</li>`;
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
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
