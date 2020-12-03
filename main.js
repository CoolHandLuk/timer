// funkcja na klik
const checkWhen = (e) => {
  // wylączenie przycisku,żeby było tylko 1 raz klik to  e.target.disabled = true;
  e.target.disabled = true;

  const days = document.querySelector("#days");
  const hours = document.querySelector("#hours");
  const text = document.createElement("div");
  const time = 500;
  const howManyWeeks = time / (days.value * hours.value);
  text.innerText = `Potrzebujesz jeszcze ${howManyWeeks.toFixed(0)} tygodni`;
  document.body.append(text);

  text.classList.add("result");

  const howManydays = Math.floor(howManyWeeks * 7);
  const endTime = new Date();
  endTime.setDate(endTime.getDate() + howManydays);
  // licznik

  const span = document.querySelector("span");

  setInterval(() => {
    const nowTime = new Date().getTime();
    const time = endTime - nowTime;
    const daysTimer = Math.floor(
      endTime / (1000 * 60 * 60 * 24) - nowTime / (1000 * 60 * 60 * 24)
    );
    const hoursTimer = Math.floor(
      (endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24
    );
    const minutesTimer = Math.floor(
      (endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60
    );
    const secTimer = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
    span.innerText = `${daysTimer} d. ${hoursTimer} godz. ${minutesTimer} min. i ${secTimer} sek.`;
    console.log(daysTimer);
  }, 1000);

  span.classList.add("result");
};
// pobranie buttona
const button = document.querySelector("button");
button.addEventListener("click", checkWhen);
