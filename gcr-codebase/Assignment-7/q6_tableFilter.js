// Q6: Real-Time Table Filter Using the input Event

const searchBox = document.getElementById("searchBox");
const studentRows = document.querySelectorAll("#studentBody tr");
const noResultsRow = document.getElementById("noResults");

// "input" fires on every change (typing, paste, delete), unlike "change" which waits for blur
searchBox.addEventListener("input", () => {
  const searchText = searchBox.value.trim().toLowerCase(); // case-insensitive
  let visibleCount = 0;

  studentRows.forEach((row) => {
    const rowText = row.textContent.toLowerCase(); // Name + Branch + CGPA together
    const isMatch = rowText.includes(searchText);
    row.style.display = isMatch ? "" : "none";
    if (isMatch) visibleCount++;
  });

  // Show the message only when nothing matched
  noResultsRow.style.display = visibleCount === 0 ? "table-row" : "none";
});
