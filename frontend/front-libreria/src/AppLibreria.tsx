import { CustomFooter } from "./commun/components/CustomFooter";
import { CustomHeader } from "./commun/components/CustomHeader";
import { Home } from "./pages/Home";

export const AppLibreria = () => {
  return (
    <>
      {/* Header */}
      <CustomHeader items={["Libreria", "Libros", "Login"]}></CustomHeader>

      {/*main*/}
      <Home
        title="Bienvenido a la Libreria"
        description="Descubre nuestra amplia selección de libros"
      ></Home>
      {/* Footer */}
      <CustomFooter descriptionFooter="&copy; 2024 Libreria. Todos los derechos reservados."></CustomFooter>
    </>
  );
};
