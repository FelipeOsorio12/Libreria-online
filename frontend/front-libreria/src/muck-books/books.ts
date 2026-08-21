export type structureBook = {
  title: string;
  author: string;
  url: string;
  id: number;
};

export const books: structureBook[] = [
  {
    title: "1984",
    author: "George Orwell",
    url: "https://covers.openlibrary.org/b/olid/OL16181379M-M.jpg",
    id: 1,
  },

  {
    title: "El código Da Vinci",
    author: "Dan Brown",
    url: "https://covers.openlibrary.org/b/isbn/9789584255181-M.jpg",
    id: 2,
  },
  {
    title: "El señor de los anillos",
    author: "J.R.R. Tolkien",
    url: "https://covers.openlibrary.org/b/isbn/9780261102385-M.jpg",
    id: 3,
  },
  {
    title: "El alquimista",
    author: "Paulo Coelho",
    url: "https://covers.openlibrary.org/b/isbn/9789584205506-M.jpg",
    id: 4,
  },
];
