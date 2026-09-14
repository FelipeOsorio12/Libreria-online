import "./Login.css";
import { Link } from "react-router";

export const Login = () => {
  return (
    <>
      <div className="auth-layout">
        <section className="auth-hero hidden lg:flex">
          {/* <img
            src="assets/auth-hero.jpg"
            alt="Sillón junto a una ventana con una pila de libros y una taza de té"
            className="auth-hero__image"
          /> */}
          <div className="auth-hero__overlay"></div>

          <div className="auth-hero__content">
            <p className="auth-hero__eyebrow">UN LUGAR PARA CADA HISTORIA</p>
            <blockquote className="auth-hero__quote">
              &ldquo;Los libros también saben esperar a quien vuelve.&rdquo;
            </blockquote>
            <p className="auth-hero__caption">
              Tu biblioteca, pedidos y lecturas favoritas en un solo lugar.
            </p>
          </div>
        </section>

        <section className="auth-panel">
          <header className="auth-panel__header">
            <div className="auth-brand">
              <span className="auth-brand__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                >
                  <path d="M4 5.5c2.2-1 5.2-1 8 0v13c-2.8-1-5.8-1-8 0v-13Z" />
                  <path d="M20 5.5c-2.2-1-5.2-1-8 0v13c2.8-1 5.8-1 8 0v-13Z" />
                </svg>
              </span>
              <span className="auth-brand__text">
                <span className="auth-brand__name">Librería</span>
                <span className="auth-brand__tag">ALTA</span>
              </span>
            </div>

            <Link to="/">Volver a la tienda</Link>
          </header>

          <div className="auth-panel__content">
            <div className="auth-card">
              <div
                className="auth-tabs"
                role="tablist"
                aria-label="Selecciona iniciar sesión o crear cuenta"
              >
                <button
                  type="button"
                  className="auth-tabs__item is-active"
                  id="tab-login"
                  role="tab"
                  aria-selected="true"
                  aria-controls="panel-login"
                  data-tab-target="login"
                >
                  Iniciar sesión
                </button>

                <Link to="/register">
                  <button
                    type="button"
                    className="auth-tabs__item"
                    id="tab-register"
                    role="tab"
                    aria-selected="false"
                    aria-controls="panel-register"
                    data-tab-target="register"
                  >
                    Crear cuenta
                  </button>
                </Link>

                <span
                  className="auth-tabs__indicator"
                  data-tabs-indicator
                ></span>
              </div>

              <div
                className="auth-form-panel is-active"
                id="panel-login"
                role="tabpanel"
                aria-labelledby="tab-login"
                data-panel="login"
              >
                <p className="auth-eyebrow">TU ESPACIO DE LECTURA</p>
                <h1 className="auth-heading">Bienvenido de nuevo</h1>
                <p className="auth-subheading">
                  Continúa donde dejaste tu próxima lectura.
                </p>

                <form
                  className="auth-form"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div className="auth-field">
                    <label htmlFor="login-email" className="auth-field__label">
                      Correo electrónico
                    </label>
                    <div className="auth-input">
                      <svg
                        className="auth-input__icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.6"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2.5" />
                        <path d="m4 7 8 6 8-6" />
                      </svg>
                      <input
                        id="login-email"
                        type="email"
                        placeholder="tu@correo.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="auth-field">
                    <div className="auth-field__row">
                      <label
                        htmlFor="login-password"
                        className="auth-field__label"
                      >
                        Contraseña
                      </label>
                      <a href="#" className="auth-field__hint">
                        ¿La olvidaste?
                      </a>
                    </div>
                    <div className="auth-input">
                      <input
                        id="login-password"
                        type="password"
                        placeholder=""
                        autoComplete="current-password"
                        required
                        data-password-input
                      />
                      <button
                        type="button"
                        className="auth-input__toggle"
                        data-password-toggle
                        aria-label="Mostrar contraseña"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="1.6"
                        >
                          <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <button type="submit" className="auth-submit">
                    Entrar a mi cuenta
                  </button>
                </form>
              </div>
            </div>
          </div>

          <footer className="auth-panel__footer">
            <p>© 2026 Librería Alta · Lecturas elegidas con cuidado</p>
          </footer>
        </section>
      </div>
    </>
  );
};
