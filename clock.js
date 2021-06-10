const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");
const todayContainer = document.querySelector(".js-day"),
  today = todayContainer.querySelector("h1");

function getTime() {
  const week = new Array(
    "SunDay",
    "MonDay",
    "TuesDay",
    "wednesday",
    "Thursday",
    "friday",
    "saturday"
  );
  const date = new Date();
  const day = week[date.getDay()];
  const hours = date.getHours();
  const minus = date.getMinutes();
  const seconds = date.getSeconds();
  today.innerText = `${day}`;
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minus < 10 ? `0${minus}` : minus
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
