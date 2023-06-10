let library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(book) {
  library.push(book);
}

function display() {
  main.textContent = '';
  for (let i = 0; i < library.length; i++) {
    let book = document.createElement('div');
    book.classList.add('card');
    let title = document.createElement('p');
    let author = document.createElement('p');
    let pages = document.createElement('p');
    let readBtn = document.createElement('button');
    let remove = document.createElement('button');
    if (library[i].read === true) {
      readBtn.classList.add('readTrue');
      readBtn.textContent = 'Read';
    }
    else {
      readBtn.classList.add('readFalse'); 
      readBtn.textContent = 'Not Read';  
    }
    readBtn.addEventListener('click', () => {
      if (readBtn.getAttribute('class') === 'readTrue') {
        readBtn.classList.replace('readTrue', 'readFalse');
        readBtn.textContent = 'Not Read';
      }
      else {
        readBtn.classList.replace('readFalse', 'readTrue');
        readBtn.textContent = 'Read';  
      }
    });
    remove.addEventListener('click', () => {
      library.splice(i, 1);
      display();
    });
    title.textContent = library[i].title;
    author.textContent = library[i].author;
    pages.textContent = library[i].pages;
    remove.textContent = 'Remove';
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(readBtn);
    book.append(remove);
    main.appendChild(book);
  }
}

const overlay = document.querySelector('.form-overlay');
const form = document.querySelector('.form');
const add = document.querySelector('.add');
const main = document.querySelector('.main');

/*Form inputs*/
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.read');
const submit = document.querySelector('.submit');

add.addEventListener('click', () => {
  form.style.visibility = 'visible';
  overlay.style.visibility = 'visible';
});

submit.addEventListener('click', (event) => {
  event.preventDefault();
  if (title.value !== '' && author.value !== '' && pages.value !== '') {
    form.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
    let book = new Book(title.value, author.value, pages.value, read.checked);
    addBook(book);
    display();
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
  }
});

overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    form.style.visibility = 'hidden';
    overlay.style.visibility = 'hidden';
  }
});