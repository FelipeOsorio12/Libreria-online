import "./CustomFooter.css";

export const CustomFooter = () => {
  return (
    <>
      <footer className="footer">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-14 pb-8">
          <div className="footer__grid grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="footer__brand col-span-2 md:col-span-1">
              <span className="block font-serif text-lg font-semibold leading-none">
                Librería
              </span>
              <span className="block text-[11px] tracking-widest text-ink/40 mt-1 mb-4">
                1876
              </span>
              <p className="text-sm text-ink/50 leading-relaxed max-w-[220px]">
                Una librería de barrio, tan curada como una galería, abierta a
                la lectura.
              </p>
            </div>

            <div className="footer__col">
              <h3 className="footer__col-title">Tienda</h3>
              <ul className="footer__col-list">
                <li>
                  <a href="#">Catálogo</a>
                </li>
                <li>
                  <a href="#">Novedades</a>
                </li>
                <li>
                  <a href="#">Ofertas</a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__col-title">Ayuda</h3>
              <ul className="footer__col-list">
                <li>
                  <a href="#">Envíos</a>
                </li>
                <li>
                  <a href="#">Devoluciones</a>
                </li>
                <li>
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h3 className="footer__col-title">Newsletter</h3>
              <p className="text-sm text-ink/50 mb-4">
                Novedades y recomendaciones, cada mes.
              </p>
            </div>
          </div>

          <div className="footer__bottom flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 border-t border-ink/10 text-xs text-ink/40">
            <p>© 2024 Librería Xilo. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-ink/70 transition-colors">
                Privacidad
              </a>
              <a href="#" className="hover:text-ink/70 transition-colors">
                Términos
              </a>
              <a href="#" className="hover:text-ink/70 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
