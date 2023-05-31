const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevIcon = document.querySelector("#prev");
const nextIcon = document.querySelector("#next");

let currYear = new Date().getFullYear();
let currMonth = new Date().getMonth();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function renderCalendar() {
  const date = new Date();
  const firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  const lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
  const lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();
  const liTag = [];

  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag.push(`<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`);
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    const isToday =
      i === date.getDate() &&
      currMonth === date.getMonth() &&
      currYear === date.getFullYear();
    const isBooked = isDateBookedForArtist(i, currMonth, currYear, localStorage.getItem("artist_profile"));
    const isSelected = isDateSelected(i, currMonth, currYear, localStorage.getItem("artist_profile"));

    liTag.push(
      `<li class="${isToday ? "active" : ""} ${isBooked ? "booked" : ""} ${isSelected ? "selected" : ""}" ${
        isBooked ? 'style="background-color: #ccc;"' : ""
      }>${i}</li>`
    );
  }

  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag.push(`<li class="inactive">${i - lastDayOfMonth + 1}</li>`);
  }

  daysTag.innerHTML = liTag.join("");

  const formattedDate = `${months[currMonth]} ${currYear}`;
  currentDate.textContent = formattedDate;

  const dateCells = document.querySelectorAll(".days li");
  dateCells.forEach((cell) => {
    const day = parseInt(cell.innerText);
    const isBooked = cell.classList.contains("booked");
    const isSelected = cell.classList.contains("selected");

    if (isSelected) {
      cell.style.backgroundColor = "violet";
    }

    cell.addEventListener("click", () => {
      if (!cell.classList.contains("inactive") && cell.innerText !== "") {
        const popup = document.querySelector(".popup");
        if (popup) {
          popup.style.display = "block";
        

    


          const popupForm = popup.querySelector(".popup-form");
          popupForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const eventNameInput = popup.querySelector("#popup-event-name");
            const timeInput = popup.querySelector("#popup-time");

            const eventName = eventNameInput.value;
            const time = timeInput.value;

            const newEvent = {
              day,
              month: currMonth+1,
              year: currYear,
              eventName,
              time,
            };

            let cardData = JSON.parse(localStorage.getItem("card_data")) || [];

            const selectedArtist = localStorage.getItem("artist_profile");

            let res = cardData.find((e) => e.user_email === selectedArtist);
            if (res) {
              res.events = res.events || [];
              res.events.push(newEvent);
              localStorage.setItem("card_data", JSON.stringify(cardData));
            }

            popup.style.display = "none";
            cell.classList.add("selected");
            cell.style.backgroundColor = "violet";

            if (res) {
              let selectedDates = res.selected_dates;
              let existingDate = selectedDates.find(
                (dateObj) =>
                  dateObj.day === day &&
                  dateObj.month === currMonth+1 &&
                  dateObj.year === currYear
              );
              if (!existingDate) {
                let newDateObj = {
                  day,
                  month: currMonth+1,
                  year: currYear,
                  artist: selectedArtist,
                };
                selectedDates.push(newDateObj);
                res.selected_dates = selectedDates;
                localStorage.setItem("card_data", JSON.stringify(cardData));
              }
            }
            renderCalendar();
          });
        }
        cell.style.backgroundColor = "#d70f64";
        cell.style.color="white"
      }
    });
  });
}

function isDateBookedForArtist(day, month, year, artistName) {
  const records = JSON.parse(localStorage.getItem("records_booking_clients"));
  if (!records) {
    return false;
  }
  const filteredRecords = records.filter((record) => {
    const recordDate = new Date(record.event_date);
    return (
      recordDate.getDate() === day &&
      recordDate.getMonth() === month+1 &&
      recordDate.getFullYear() === year &&
      record.selected_artist_for_booking === artistName
    );
  });
  return filteredRecords.length > 0;
}

function isDateSelected(day, month, year, artistName) {
  const cardData = JSON.parse(localStorage.getItem("card_data")) || [];
  const artistData = cardData.find((data) => data.user_email === artistName);
  if (!artistData || !artistData.selected_dates) {
    return false;
  }
  const selectedDates = artistData.selected_dates;
  const selectedDate = selectedDates.find((dateObj) => {
    return (
      dateObj.day === day &&
      dateObj.month === month+1 &&
      dateObj.year === year
    );
  });
  return selectedDate !== undefined;
}

renderCalendar();

prevIcon.addEventListener("click", () => {
  currMonth--;
  if (currMonth < 0) {
    currYear--;
    currMonth = 11;
  }
  renderCalendar();
});

nextIcon.addEventListener("click", () => {
  currMonth++;
  if (currMonth > 11) {
    currYear++;
    currMonth = 0;
  }
  renderCalendar();
});
