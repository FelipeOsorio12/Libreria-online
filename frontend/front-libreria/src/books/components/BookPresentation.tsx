import { useState } from "react";
import type { structureBook } from "../../../src/muck-books/books";
import { CustomSearch } from "../../commun/components/CustomSearch";

interface BookPresentationPropos {
  books: structureBook[];
}

export const renderBook = (books: structureBook[]) => {
  return books.map((book) => {
    return (
      <div className="book-item" key={book.id}>
        <h2>{book.title}</h2>
        <img src={book.url} alt={book.title} />
      </div>
    );
  });
};

export const BookPresentation = ({ books }: BookPresentationPropos) => {
  const [booksToShow, setBooksToShow] = useState<structureBook[]>(books);

  const onSearch = (booksFound: structureBook[]) => {
    setBooksToShow(booksFound);
  };

  return (
    <>
      <CustomSearch
        placeholder="Buscar libro..."
        books={books}
        onSearch={onSearch}
      />

      {renderBook(booksToShow)}
    </>
  );
};
