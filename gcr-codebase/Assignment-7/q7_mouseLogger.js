// Q7: Detect Mouse Path & Coordinates Logger

const box = document.getElementById("box");
const coordsDisplay = document.getElementById("coords");

// Live coordinates (relative to the browser viewport) while moving inside the box
box.addEventListener("mousemove", (event) => {
  coordsDisplay.textContent = "clientX: " + event.clientX + ", clientY: " + event.clientY;
});

// Reset text when the mouse leaves the box
box.addEventListener("mouseleave", () => {
  coordsDisplay.textContent = "clientX: -, clientY: -";
});

// Double-click: drop a red dot exactly where the user clicked
box.addEventListener("dblclick", (event) => {
  const boxRect = box.getBoundingClientRect();

  // clientX/Y are viewport-based; subtract the box's position (and its border)
  // to get the position INSIDE the box, which is what position:absolute needs
  const x = event.clientX - boxRect.left - box.clientLeft;
  const y = event.clientY - boxRect.top - box.clientTop;

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = x + "px";
  dot.style.top = y + "px";
  box.appendChild(dot);
});
