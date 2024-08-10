function attachEventsListeners() {
  const btnDaysRef = document.getElementById("daysBtn");
  const btnHoursRef = document.getElementById("hoursBtn");
  const btnMinutesRef = document.getElementById("minutesBtn");
  const btnSecondsRef = document.getElementById("secondsBtn");

  let textDayRef = document.querySelector("div #days");
  let textHoursRef = document.querySelector("div #hours");
  let textMinutesRef = document.querySelector("div #minutes");
  let textSecondsRef = document.querySelector("div #seconds");

  btnDaysRef.addEventListener("click", btnDay);
  btnHoursRef.addEventListener("click", btnHours);
  btnMinutesRef.addEventListener("click", btnMinutes);
  btnSecondsRef.addEventListener("click", btnSeconds);

  function btnDay(event) {
    let textDay = textDayRef.value;
    let sumHours = textDay * 24;
    textHoursRef.value = sumHours;
    let sumMinutes = sumHours * 60;
    textMinutesRef.value = sumMinutes;
    let sumSeconds = sumMinutes * 60;
    textSecondsRef.value = sumSeconds;
  }
  function btnHours(event) {
    let textHours = textHoursRef.value;
    let textDay = textHours / 24;
    textDayRef.value = textDay;
    let sumMinutes = textHours * 60;
    textMinutesRef.value = sumMinutes;
    let sumSeconds = sumMinutes * 60;
    textSecondsRef.value = sumSeconds;
  }
  function btnMinutes(event) {
    let textMinutes = textMinutesRef.value;
    let sumSeconds = textMinutes * 60;
    textSecondsRef.value = sumSeconds;
    let sumHours = textMinutes / 60;
    textHoursRef.value = sumHours;
    let sumDays = sumHours / 24;
    textDayRef.value = sumDays;
  }
  function btnSeconds(event) {
    let textSeconds = textSecondsRef.value;
    let sumMinutes = textSeconds / 60;
    textMinutesRef.value = sumMinutes;
    let sumHours = sumMinutes / 60;
    textHoursRef.value = sumHours;
    let sumDays = sumHours / 24;
    textDayRef.value = sumDays;
  }
}
