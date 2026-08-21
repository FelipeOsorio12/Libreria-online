import { useState } from "react";
import type { structureBook } from "../../muck-books/books";

interface CustomSearchProps {
  placeholder: string;
  books: structureBook[];
  onSearch: (booksFound: structureBook[]) => void;
}

export const CustomSearch = ({
  placeholder,
  books,
  onSearch,
}: CustomSearchProps) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    const bookFound = books.find((book) => book.title === search);

    if (bookFound) {
      onSearch([bookFound]);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="search-button" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};
