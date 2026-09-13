import { useState } from "react";
import { BookPresentation } from "../../books/components/BookPresentation";
import { type structureBook, books } from "../../muck-books/books";
import { CustomHeader } from "../../commun/components/CustomHeader";
import { CustomFooter } from "../../commun/components/CustomFooter";
import { Link } from "react-router";
interface HomePageProps {
  title?: string;
  description?: string;
}

export const Home = ({ title, description }: HomePageProps) => {
  const [booksFound, setBooksFound] = useState<structureBook[]>(books);

  return (
    <>
      <CustomHeader
        placeholder="Buscar..."
        books={books}
        onSearch={setBooksFound}
      />

      <div className="hero">
        <h1 id="welcome">{title}</h1>

        <h5 id="description">{description}</h5>

        <Link to="">
          <button className="btn" id="books-btn">
            Ver libros
          </button>
        </Link>

        <div className="featured-books">
          <h3 id="featured-books-title">Libros destacados</h3>

          <div id="books-container" className="books-container">
            <BookPresentation books={booksFound} />
          </div>
        </div>

        <div className="books-management">
          <h3 id="books-management-title">¿Quieres administrar tus libros?</h3>

          <button className="btn" id="manage-books-btn">
            Ir al panel
          </button>
        </div>
      </div>

      <CustomFooter descriptionFooter="&copy; 2024 Libreria. Todos los derechos reservados." />
    </>
  );
};
