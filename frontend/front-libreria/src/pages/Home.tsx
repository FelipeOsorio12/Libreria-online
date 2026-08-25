import { BookPresentation } from "../books/components/BookPresentation";
import { type structureBook } from "../muck-books/books";

interface HomePageProps {
  title: string;
  description: string;
  books: structureBook[];
}

export const Home = ({ title, description, books }: HomePageProps) => {
  return (
    <>
      <div className="hero">
        <h1 id="welcome">{title}</h1>
        <h5 id="description">{description}</h5>

        <a href="/pages/books.html">
          <button className="btn" id="books-btn">
            ver libros
          </button>
        </a>

        <div className="featured-books">
          <h3 id="featured-books-title">Libros destacados</h3>

          <div id="books-container" className="books-container">
            {/* <BookPresentation books={books} /> */}
            <BookPresentation books={books}></BookPresentation>
          </div>
        </div>

        <div className="books-management">
          <h3 id="books-management-title">¿quieres administrar tus libros?</h3>

          <button className="btn" id="manage-books-btn">
            Ir al panel
          </button>
        </div>
      </div>
    </>
  );
};
