import { useState } from "react";
import type { structureBook } from "../../muck-books/books";
import { Link } from "react-router";
import "./CustomHeader.css";

interface CustomSearchProps {
  placeholder: string;
  books: structureBook[];
  onSearch: (booksFound: structureBook[]) => void;
}

export const CustomHeader = ({
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
    <header className="header">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between gap-6">
        <div className="header__logo shrink-0">
          <span className="block font-serif text-xl font-semibold leading-none">
            Librería
          </span>
          <span className="block text-[11px] tracking-widest text-ink/50 mt-0.5">
            1876
          </span>
        </div>

        <nav className="header__nav hidden md:flex items-center gap-8 text-sm text-ink/70">
          <a className="hover:text-ink transition-colors">Libreria</a>
          <a className="hover:text-ink transition-colors" href="">
            Libros
          </a>
          <Link to="/login">
            <a className="hover:text-ink transition-colors">Login</a>
          </Link>
        </nav>

        <div className="header__actions flex items-center gap-4 flex-1 max-w-md justify-end">
          <label className="header__search hidden sm:flex items-center gap-2 w-full max-w-xs bg-white/60 border border-ink/10 rounded-full px-4 py-2">
            <svg
              className="w-4 h-4 text-ink/40 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            <input
              type="text"
              className="bg-transparent outline-none text-sm w-full placeholder:text-ink/40"
              placeholder={placeholder}
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={handleKeyDown}
            />
          </label>

          <button
            className="header__cart-btn flex items-center gap-2 bg-ink text-cream text-sm font-medium pl-4 pr-3 py-2 rounded-full shrink-0"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>
      </div>
    </header>
  );
};
