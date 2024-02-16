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

function createHtml(book, idx) {
  let html = `
  <div class="card">
    <div id="strip">
      <img
        src="./icons/trash-can-10417.svg"
        alt="Delete-symbol"
        class="secondary-icons delete-button"
        onmouseover="this.style.cursor='pointer'"
        onclick="handleDelete(${idx})"
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
        id="card-${idx}"
        onclick="toggleImage('card-${idx}')"
      />
    </div>
  </div>
  `;
  return html;
}

function displayBooks() {
  const cardContainer = document.querySelector(".cards-container");
  let n = myLibrary.length;
  cardContainer.innerHTML = null;
  for (let i = 0; i < n; ++i) {
    const htmlContent = createHtml(myLibrary[i], i);
    cardContainer.innerHTML = cardContainer.innerHTML + htmlContent;
  }
}

function handleSubmit(title, author, publication, edition, pages) {
  addBookToLibrary(title, author, pages, edition, publication);
  displayBooks();
}

function handleDelete(idx) {
  myLibrary.splice(idx, 1);
  displayBooks();
}

function clearForm() {
  const form = document.querySelector(".form-form");
  form.reset();
}

function toggleImage(id) {
  const imgElement = document.getElementById(id);
  console.log(id);
  console.log(imgElement);
  let img1 = "icons/cross-mark-button-svgrepo-com.svg";
  let img2 = "icons/white-heavy-check-mark-svgrepo-com.svg";
  console.log(imgElement.src);
  imgElement.src = imgElement.src === img1 ? img2 : img1;
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
  const dialog = document.querySelector("dialog");
  const showDialog = document.getElementById("showDialogButton");
  const dialogCloseButton = document.querySelector(".dialog-close-button");
  const formSubmitButton = document.querySelector(".form-submit-button");
  const titleField = document.getElementById("title");
  const authorField = document.getElementById("author");
  const publicationField = document.getElementById("publication");
  const editionField = document.getElementById("edition");
  const pagesField = document.getElementById("pages");

  displayBooks();

  showDialog.addEventListener("click", () => {
    dialog.showModal();
  });

  dialogCloseButton.addEventListener("click", () => {
    clearForm();
    dialog.close();
  });

  formSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();
    handleSubmit(
      titleField.value,
      authorField.value,
      publicationField.value,
      editionField.value,
      pagesField.value
    );
    clearForm();
    dialog.close();
  });
}
