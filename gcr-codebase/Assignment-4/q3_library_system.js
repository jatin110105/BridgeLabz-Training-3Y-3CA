// Q3: Library Management System (Classes + Objects)
// Optional: pass an ISBN to issue from the command line, e.g. node q3_library_system.js 978-0-13-468599-1

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  // Returns true if the book was issued, false if it was already out
  issueBook() {
    if (this.isIssued) return false;
    this.isIssued = true;
    return true;
  }

  // Returns true if the book was returned, false if it was not issued
  returnBook() {
    if (!this.isIssued) return false;
    this.isIssued = false;
    return true;
  }
}

const library = [
  new Book("Clean Code", "Robert C. Martin", "978-0-13-235088-4"),
  new Book("You Don't Know JS", "Kyle Simpson", "978-1-491-90415-5"),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", "978-1-59327-950-9"),
  new Book("The Pragmatic Programmer", "Andrew Hunt", "978-0-13-595705-9"),
];

// Display only the books that are not issued
function showAvailableBooks() {
  console.log("--- Available books ---");
  const available = library.filter((book) => !book.isIssued);
  if (available.length === 0) {
    console.log("No books available.");
    return;
  }
  available.forEach((b) => console.log(`${b.title} by ${b.author} (ISBN: ${b.isbn})`));
}

// Search by ISBN, then issue
function issueByIsbn(isbn) {
  const book = library.find((b) => b.isbn === isbn);
  if (!book) {
    console.log(`No book found with ISBN ${isbn}.`);
  } else if (book.issueBook()) {
    console.log(`Issued: "${book.title}"`);
  } else {
    console.log(`"${book.title}" is already issued.`);
  }
}

showAvailableBooks();

const requestedIsbn = process.argv[2] || "978-0-13-235088-4"; // default demo ISBN
console.log(`\nIssuing ISBN ${requestedIsbn}...`);
issueByIsbn(requestedIsbn);
issueByIsbn(requestedIsbn);      // second attempt: already issued
issueByIsbn("000-0-00-000000-0"); // unknown ISBN
console.log();
showAvailableBooks();

// Return the book and show the list again
console.log("\nReturning the book...");
const returned = library.find((b) => b.isbn === requestedIsbn);
if (returned && returned.returnBook()) console.log(`Returned: "${returned.title}"`);
showAvailableBooks();
