// Q6: E-Commerce Dashboard - Fetch and display products from Fake Store API
// Run in Node 18+ (built-in fetch) or in the browser console.

const API_URL = "https://fakestoreapi.com/products";

async function loadProducts() {
  try {
    const response = await fetch(API_URL);

    // fetch() only rejects on network errors, so check HTTP status ourselves
    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }

    const products = await response.json();

    // Console output for each product
    products.forEach((product) => {
      console.log("Product: " + product.title);
      console.log("Price: $" + product.price);
      console.log("Image: " + product.image);
      console.log(""); // blank line between products
    });

    // Bonus: render cards only when running in a browser (document exists)
    if (typeof document !== "undefined") {
      renderProductCards(products);
    }
  } catch (error) {
    console.log("Failed to load products. Please try again.");
    if (typeof document !== "undefined") {
      const message = document.createElement("p");
      message.textContent = "Failed to load products. Please try again.";
      document.body.appendChild(message);
    }
  }
}

// Bonus: build product cards with document.createElement()
function renderProductCards(products) {
  const container = document.createElement("div");
  container.style.cssText =
    "display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px;padding:16px;";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.style.cssText =
      "background:#fff;padding:12px;border-radius:8px;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,.15);";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    image.style.cssText = "height:120px;max-width:100%;object-fit:contain;";

    const title = document.createElement("h4");
    title.textContent = product.title;
    title.style.fontSize = "13px";

    const price = document.createElement("p");
    price.textContent = "$" + product.price;
    price.style.cssText = "color:green;font-weight:bold;";

    card.append(image, title, price);
    container.appendChild(card);
  });

  document.body.appendChild(container);
}

loadProducts();
