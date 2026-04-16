//temporal,dado que luego lo tengo que conectar con la base de datos, y no tengo tiempo para eso ahora
// cada libro es un objeto con titulo y autor
const books = [
  { title: 'El principito', author: 'Antoine de Saint-Exupéry' },
  { title: '1984', author: 'George Orwell' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

const bookList = document.getElementById('books-container');

books.forEach((book) => {
  const bookItem = document.createElement('div');
  bookItem.classList.add('book-item');
  bookItem.innerHTML = `
    <h4 class="book-title">${book.title}</h4>
    <p class="book-author">por ${book.author}</p>
  `;
  bookList.appendChild(bookItem);
});
