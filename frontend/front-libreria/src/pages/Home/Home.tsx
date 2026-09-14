import { useState } from "react";
import { BookPresentation } from "../../books/components/BookPresentation";
import { type structureBook, books } from "../../muck-books/books";
import { CustomHeader } from "../../components/commun/CustomHeader";
import { CustomFooter } from "../../components/commun/CustomFooter";
import panelDashboard from "../../assets/panel-dashboard.jpg";
import heroChair from "../../assets/hero-chair.jpg";
import "./Home.css";

export const Home = () => {
  const [booksFound, setBooksFound] = useState<structureBook[]>(books);

  return (
    <>
      <CustomHeader
        placeholder="Buscar..."
        books={books}
        onSearch={setBooksFound}
      />

      <main>
        <section className="hero">
          <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="hero__content">
              <p className="hero__eyebrow text-terracotta text-xs tracking-[0.2em] font-medium mb-4">
                COLECCIÓN DESTACADA &nbsp;·&nbsp; OTOÑO
              </p>
              <h1 className="hero__title font-serif text-4xl md:text-5xl leading-[1.1] font-medium mb-5">
                La lectura, en{" "}
                <em className="hero__title-accent text-terracotta not-italic font-serif italic">
                  luz
                </em>{" "}
                de galería
              </h1>
              <p className="hero__description text-ink/60 text-base leading-relaxed max-w-md mb-8">
                Una librería seleccionada a mano, como una exposición: pocos
                títulos, cada uno con su espacio para respirar.
              </p>
              <div className="hero__actions flex flex-wrap items-center gap-4">
                <button type="button" className="btn btn--primary">
                  Explorar destacados
                </button>
                <button type="button" className="btn btn--outline">
                  Nueva selección
                </button>
              </div>
            </div>

            <div className="hero__media relative">
              <div className="hero__image-wrap rounded-2xl overflow-hidden">
                <img
                  src={heroChair}
                  alt="Sillón junto a una ventana con una pila de libros"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="hero__floating-card">
                <div className="hero__floating-card-badge">Preventa</div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="hero__floating-card-title font-serif text-sm font-medium">
                      La casa de los espejos
                    </p>
                    <p className="hero__floating-card-author text-xs text-ink/50">
                      Mireia Fontán
                    </p>
                    <p className="hero__floating-card-price text-sm font-semibold mt-1">
                      24,90&nbsp;€
                    </p>
                  </div>
                  <button
                    type="button"
                    className="hero__floating-card-cart"
                    aria-label="Añadir al carrito"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-books">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
            <div className="featured-books__header flex items-end justify-between mb-8">
              <div>
                <p className="text-terracotta text-xs tracking-[0.2em] font-medium mb-2">
                  SELECCIÓN DEL MES
                </p>
                <h2 className="font-serif text-3xl font-medium">
                  Libros destacados
                </h2>
              </div>
              <a
                href="#"
                className="featured-books__view-all hidden sm:inline-flex items-center gap-1 text-sm text-ink/60 hover:text-ink transition-colors"
              >
                Ver todo el catálogo
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div className="featured-books__grid grid grid-cols-2 md:grid-cols-4 gap-5">
              <BookPresentation books={booksFound} />
            </div>
          </div>
        </section>

        <section className="panel-cta">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="panel-cta__box grid md:grid-cols-2 gap-10 items-center">
              <div className="panel-cta__content">
                <p className="panel-cta__eyebrow text-terracotta text-xs tracking-[0.2em] font-medium mb-3">
                  PARA TU LIBRERÍA
                </p>
                <h2 className="font-serif text-cream text-3xl md:text-[2rem] leading-tight font-medium mb-4">
                  Gestiona tu catálogo desde el panel
                </h2>
                <p className="text-cream/60 text-sm leading-relaxed max-w-sm mb-7">
                  Añade títulos, controla stock y seguimiento de pedidos desde
                  un panel claro y luminoso. Hazlo como si tu librería online
                  respirara.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button type="button" className="btn btn--primary">
                    Abrir el panel
                  </button>
                  <button type="button" className="btn btn--outline-dark">
                    Ver una demo
                  </button>
                </div>
              </div>

              <div className="panel-cta__media">
                <div className="panel-cta__screenshot">
                  <img
                    src={panelDashboard}
                    alt="Vista previa del panel de gestión de catálogo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CustomFooter />
    </>
  );
};
