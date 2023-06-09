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
    let read = document.createElement('button');
    let remove = document.createElement('button');
    if (library[i].read === 'on') {
      read.classList.add('readTrue');
      read.textContent = 'Read';
    }
    else {
      read.classList.add('readFalse'); 
      read.textContent = 'Not Read';  
    }
    read.addEventListener('click', () => {
      if (read.getAttribute('class') === 'readTrue') {
        read.classList.replace('readTrue', 'readFalse');
        read.textContent = 'Not Read';
      }
      else {
        read.classList.replace('readFalse', 'readTrue');
        read.textContent = 'Read';  
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
    book.appendChild(read);
    book.append(remove);
    main.appendChild(book);
  }
}

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
  form.style.opacity = 1;
});

submit.addEventListener('click', (event) => {
  event.preventDefault();
  if (title.value !== '' && author.value !== '' && pages.value !== '') {
    form.style.opacity = 0;
    let book = new Book(title.value, author.value, pages.value, read.value);
    addBook(book);
    display();
    title.value = '';
    author.value = '';
    pages.value = '';
    read.value = '';
  }
});
