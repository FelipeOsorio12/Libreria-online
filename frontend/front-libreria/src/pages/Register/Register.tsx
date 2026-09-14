import { Link } from "react-router";
import "./Register.css";

export const Register = () => {
  return (
    <>
      <div className="auth-layout">
        <section className="auth-hero hidden lg:flex">
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
                <Link to="/login">
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
                </Link>

                <span
                  className="auth-tabs__indicator"
                  data-tabs-indicator
                ></span>
              </div>

              <div
                className="auth-form-panel"
                id="panel-register"
                role="tabpanel"
                aria-labelledby="tab-register"
                data-panel="register"
              >
                <p className="auth-eyebrow">TU ESPACIO DE LECTURA</p>
                <h1 className="auth-heading">Crea tu cuenta</h1>
                <p className="auth-subheading">
                  Guarda tus elecciones y sigue tus pedidos con calma.
                </p>

                <form className="auth-form" onsubmit="return false;">
                  <div className="auth-field">
                    <label for="register-email" className="auth-field__label">
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
                        id="register-email"
                        type="email"
                        placeholder="tu@correo.com"
                        autocomplete="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="auth-field">
                    <label
                      for="register-password"
                      className="auth-field__label"
                    >
                      Contraseña
                    </label>
                    <div className="auth-input">
                      <input
                        id="register-password"
                        type="password"
                        placeholder=""
                        autocomplete="new-password"
                        minlength="8"
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
                    <p className="auth-field__helper">Mínimo 8 caracteres.</p>
                  </div>

                  <div className="auth-field">
                    <label
                      for="register-password-confirm"
                      className="auth-field__label"
                    >
                      Confirmar contraseña
                    </label>
                    <div className="auth-input">
                      <input
                        id="register-password-confirm"
                        type="password"
                        placeholder=""
                        autocomplete="new-password"
                        minlength="8"
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="auth-submit">
                    Crear mi cuenta
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
