// Q2: Live Character Counter with Warning Behavior

const MAX_CHARS = 100;
const WARNING_AT = 20; // yellow when this many (or fewer) characters remain

const messageBox = document.getElementById("messageBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

function updateCounter() {
  const remaining = MAX_CHARS - messageBox.value.length;
  counter.textContent = remaining + " characters remaining";

  // Reset classes first, then apply the right one
  counter.classList.remove("warning", "danger");
  if (remaining <= 0) {
    counter.classList.add("danger");       // red at 0
  } else if (remaining <= WARNING_AT) {
    counter.classList.add("warning");      // yellow at 20 or fewer
  }
}

// keydown fires BEFORE the character is inserted, so preventDefault() can block it
messageBox.addEventListener("keydown", (event) => {
  const isLimitReached = messageBox.value.length >= MAX_CHARS;
  // Printable keys have key.length === 1 (Backspace, Arrows, etc. are longer names)
  const isPrintable = event.key.length === 1 && !event.ctrlKey && !event.metaKey;

  if (isLimitReached && isPrintable) {
    event.preventDefault();
  }
});

// Safety net: pasted text (or mobile input) can bypass keydown, so trim it here
messageBox.addEventListener("input", () => {
  if (messageBox.value.length > MAX_CHARS) {
    messageBox.value = messageBox.value.slice(0, MAX_CHARS);
  }
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  messageBox.value = "";
  updateCounter();
  messageBox.focus();
});

updateCounter();
