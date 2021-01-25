const cardAdd = document.getElementById('card-add');
const main = document.getElementById('main');
const input = document.querySelectorAll('input');
const formContainer = document.getElementById('form-container');
const submit = document.getElementById('submit');
const exit = document.getElementById('exit');

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = function (read) {
    if (read === true) {
      return 'checked';
    }
  };
}

function addBookToLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    cardAdd.insertAdjacentHTML(
      'beforebegin',
      `
    <div class="card">
    <div class="book-info-container">
      <p class="book-title">${myLibrary[i].title}</p>
      <p class="book-author">By ${myLibrary[i].author}</p>
      <p class="book-pages">${myLibrary[i].pages} pages</p>
    </div>
    <div class="buttons-container">
      <div class="read-container">
        <p id="read">Read</p>
        <input type="checkbox" ${myLibrary[i].read}/>
      </div>
      <i class="fas fa-trash-alt"></i>
    </div>
    `
    );
  }
}

cardAdd.addEventListener('click', e => {
  formContainer.style.display = 'flex';
});

submit.addEventListener('click', e => {
  e.preventDefault();
  const form = document.getElementById('form');
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const formRead = document.getElementById('form-read').checked;

  const book = new Book(title, author, pages, formRead);

  myLibrary.push(book);

  cardAdd.insertAdjacentHTML(
    'beforebegin',
    `
    <div class="card" >
        <div class="book-info-container">
          <p class="book-title">${book.title}</p>
          <p class="book-author">By ${book.author}</p>
          <p class="book-pages">${book.pages} pages</p>
        </div>
        <div class="buttons-container">
          <div class="read-container">
            <p id="read">Read</p>
            <input type="checkbox" ${book.read(formRead)} />
          </div>
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>
  `
  );

  // Delete Book
  const trash = document.querySelectorAll('.fa-trash-alt');

  for (let i = 0; i < trash.length; i++) {
    trash[i].addEventListener('click', e => {
      let parent = e.target.parentElement;
      let parent2 = parent.parentElement;
      parent2.remove();
    });
  }

  formContainer.style.display = 'none';
});

// Exit Form
exit.addEventListener('click', e => {
  formContainer.style.display = 'none';
});

// If title is too long, do ...
