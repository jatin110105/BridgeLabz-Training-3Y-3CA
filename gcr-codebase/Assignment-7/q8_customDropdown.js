// Q8: Custom Dropdown Using Only JavaScript (no <select>)

const dropdown = document.getElementById("dropdown");
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

// Button toggles the option list
dropdownBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("open");
});

// Clicking an option updates the button text and closes the menu
// (delegation: one listener on the <ul> handles every <li>)
dropdownMenu.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    dropdownBtn.textContent = event.target.textContent + " ▾";
    dropdownMenu.classList.remove("open");
  }
});

// Close when clicking outside.
// The third argument `true` registers the listener in the CAPTURING phase:
// the event travels from document DOWN to the target, so this runs first,
// even if some other element calls stopPropagation() during the bubbling phase.
document.addEventListener(
  "click",
  (event) => {
    if (!dropdown.contains(event.target)) {
      dropdownMenu.classList.remove("open");
    }
  },
  true
);
