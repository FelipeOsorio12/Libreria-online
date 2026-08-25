import { CustomFooter } from "./commun/components/CustomFooter";
import { CustomHeader } from "./commun/components/CustomHeader";
import { Home } from "./pages/Home";
import type { structureBook } from "../src/muck-books/books";
import { books } from "../src/muck-books/books";
import { useState } from "react";

export const AppLibreria = () => {
  const [booksFound, setbooksFound] = useState<structureBook[]>(books);

  return (
    <>
      {/* Header */}
      <CustomHeader
        items={["Libreria", "Libros", "Login"]}
        placeholder="Buscar..."
        books={books}
        onSearch={setbooksFound}
      ></CustomHeader>

      {/*main*/}
      <Home
        title="Bienvenido a la Libreria"
        description="Descubre nuestra amplia selección de libros"
        books={booksFound}
      ></Home>
      {/* Footer */}
      <CustomFooter descriptionFooter="&copy; 2024 Libreria. Todos los derechos reservados."></CustomFooter>
    </>
  );
};
