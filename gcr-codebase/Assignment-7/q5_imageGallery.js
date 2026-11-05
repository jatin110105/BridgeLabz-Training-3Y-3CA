// Q5: Image Gallery with Modal Preview
// Uses picsum.photos placeholder images (needs internet). Replace with your own URLs if you like.

const gallery = document.getElementById("gallery");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");

const imageIds = [10, 20, 30, 40, 50, 60]; // 6 images

// Build the grid: small thumbnails, with the big version URL stored in data-large
imageIds.forEach((id) => {
  const img = document.createElement("img");
  img.src = "https://picsum.photos/id/" + id + "/300/200";
  img.dataset.large = "https://picsum.photos/id/" + id + "/900/600";
  img.alt = "Gallery image " + id;
  gallery.appendChild(img);
});

// Event delegation: one listener on the grid handles all images
gallery.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    modalImage.src = event.target.dataset.large;
    modalOverlay.classList.add("open");
  }
});

// Clicking the dark overlay (outside the modal box) closes the modal
modalOverlay.addEventListener("click", () => {
  modalOverlay.classList.remove("open");
});

// Clicking INSIDE the modal must not bubble up to the overlay, or it would close
modalContent.addEventListener("click", (event) => {
  event.stopPropagation();
});
