"use strict";

const specialDate = new Date("2025-05-15");

function updateCounter() {
  const today = new Date();
  const diffTime = today - specialDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("days-counter").innerText = diffDays;
}

updateCounter();
