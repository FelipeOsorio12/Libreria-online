import type { structureBook } from "../../../src/muck-books/books";

interface BookPresentationPropos {
  books: structureBook[];
}

export const BookPresentation = ({ books }: BookPresentationPropos) => {
  return (
    <>
      {books.map((book) => {
        return (
          <div className="book-item" key={book.id}>
            <h2>{book.title}</h2>
            <img src={book.url} alt={book.title} />
          </div>
        );
      })}
    </>
  );
};
