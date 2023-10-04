// Set the date and time of the event (year, month (0-11), day, hour, minute, second)
const eventDate = new Date(2023, 10, 31, 18, 0, 0); // October 31, 2023, 18:00:00

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = eventDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const countdownElement = document.getElementById('countdown');
  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Check if the event has already occurred
  if (timeDifference <= 0) {
    countdownElement.innerHTML = 'Event has already occurred!';
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to update the countdown
updateCountdown();
