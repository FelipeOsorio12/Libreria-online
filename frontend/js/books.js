const books = [
  { title: 'El principito', author: 'Antoine de Saint-Exupéry' },
  { title: 'Cien años de soledad', author: 'Gabriel García Márquez' },
  { title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes' },
  { title: '1984', author: 'George Orwell' },
  { title: 'La sombra del viento', author: 'Carlos Ruiz Zafón' },
  { title: 'El código Da Vinci', author: 'Dan Brown' },
  { title: 'El alquimista', author: 'Paulo Coelho' },
  { title: 'Matar a un ruiseñor', author: 'Harper Lee' },
  { title: 'El gran Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'Cumbres borrascosas', author: 'Emily Brontë' },
  { title: 'El señor de los anillos', author: 'J.R.R. Tolkien' },
  { title: 'Harry Potter y la piedra filosofal', author: 'J.K. Rowling' },
  { title: 'El código Da Vinci', author: 'Dan Brown' },
  { title: 'El alquimista', author: 'Paulo Coelho' },
];

const booksContainer = document.getElementById('books-container');

books.forEach((book) => {
  const bookElement = document.createElement('div');
  bookElement.classList.add('book');
  bookElement.innerHTML = `
        <h4>${book.title}</h4>
        <p>${book.author}</p>
        <button class="btn">Ver detalles</button>
    `;
  booksContainer.appendChild(bookElement);
});
