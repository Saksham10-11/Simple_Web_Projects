let myLibrary = [];

function Book(title, author, pages, edition, publication) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.edition = edition;
  this.publication = publication;
}

function addBookToLibrary(title, author, pages, edition, publication) {
  const book = new Book(title, author, pages, edition, publication);
  myLibrary.push(book);
}

function createHtml(book) {
  let html = `
  <div class="card">
    <div id="strip">
      <img
        src="./icons/trash-can-10417.svg"
        alt="Delete-symbol"
        class="secondary-icons"
        onmouseover="this.style.cursor='pointer'"
      />
    </div>
    <div class="card-content">
      <h2>Title : ${book.title}</h2>
      <h2>Author : ${book.author}</h2>
      <h2>Edition : ${book.edition}</h2>
      <h2>Publications : ${book.publication}</h2>
      <h2>Pages : ${book.pages}</h2>
    </div>
    <div class="card-buttons">
      <h2>Read Status :</h2>
      <img
        src="./icons/cross-mark-button-svgrepo-com.svg"
        class="read-status-icon"
        alt="Read Status"
        onmouseover="this.style.cursor='pointer'"
      />
    </div>
  </div>
  `;
  return html;
}

function displayBooks(cardContainer) {
  let n = myLibrary.length;
  for (let i = 0; i < n; ++i) {
    const htmlContent = createHtml(myLibrary[i]);
    cardContainer.innerHTML = cardContainer.innerHTML + htmlContent;
  }
}

addBookToLibrary(
  "Concepts of Physics",
  "H.C.Verma",
  1096,
  "12th edition",
  "McGraw Hill"
);
addBookToLibrary(
  "Concepts of Physics",
  "H.C.Verma",
  1096,
  "12th edition",
  "McGraw Hill"
);
addBookToLibrary(
  "Concepts of Physics",
  "H.C.Verma",
  1096,
  "12th edition",
  "McGraw Hill"
);
addBookToLibrary(
  "Concepts of Physics",
  "H.C.Verma",
  1096,
  "12th edition",
  "McGraw Hill"
);
addBookToLibrary(
  "Concepts of Physics",
  "H.C.Verma",
  1096,
  "12th edition",
  "McGraw Hill"
);
addBookToLibrary(
  "Concepts of Physics",
  "H.C.Verma",
  1096,
  "12th edition",
  "McGraw Hill"
);

if (typeof document != null) {
  const cardContainer = document.querySelector(".cards-container");
  const dialog = document.querySelector("dialog");
  const showDialog = document.getElementById("showDialogButton");
  const dialogCloseButton = document.querySelector(".dialog-close-button");

  displayBooks(cardContainer);

  showDialog.addEventListener("click", () => {
    dialog.showModal();
  });

  dialogCloseButton.addEventListener("click", () => {
    dialog.close();
  });
}
