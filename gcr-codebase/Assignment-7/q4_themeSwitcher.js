// Q4: Theme Switcher Using Attribute Manipulation

const themeButtons = document.querySelectorAll("[data-theme-choice]");
const themeLabel = document.getElementById("themeLabel");

function applyTheme(themeName) {
  // Class applied with setAttribute (overwrites the whole class attribute)
  document.body.setAttribute("class", "theme-" + themeName);
  // Current theme stored in a custom data attribute, e.g. data-theme="dark"
  document.body.setAttribute("data-theme", themeName);
  themeLabel.textContent = document.body.getAttribute("data-theme");
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.getAttribute("data-theme-choice"));
  });
});

applyTheme("light"); // default theme
