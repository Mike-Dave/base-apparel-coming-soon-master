"use strict";

// Selecting html elements
const arrowBtn = document.querySelector(".arrow");
const emailArea = document.querySelector(".email-area");
const errorText = document.querySelector(".error-text");
const correctText = document.querySelector(".correct-text");
const errorIcon = document.querySelector(".error-icon");

// regex to validate email
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

arrowBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const textInput = emailArea.value;

  // If input is empty alert user
  if (textInput === "") {
    alert("Please write a text!");
    return;
  }

  // To test if regex matches the input value
  if (emailRegex.test(textInput)) {
    correctText.classList.remove("hidden");
  } else {
    errorIcon.classList.remove("hidden");
    errorText.classList.remove("hidden");
  }
});

// If user wants to try a new input
emailArea.addEventListener("keydown", () => {
  correctText.classList.add("hidden");
  errorIcon.classList.add("hidden");
  errorText.classList.add("hidden");
});
