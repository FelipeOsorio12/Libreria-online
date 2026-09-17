import "../../components/ui/users.css";

export const Profile = () => {
  return (
    <>
      <header className="dash-topbar">
        <div className="dash-topbar__inner">
          <div className="dash-brand">
            <span className="dash-brand__icon" aria-hidden="true">
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
            <span className="dash-brand__text">
              <span className="dash-brand__name">Librería</span>
              <span className="dash-brand__tag">ALTA</span>
            </span>
          </div>

          <nav className="dash-switch" aria-label="Cambiar de vista">
            <a href="perfil.html" className="dash-switch__item is-active">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              >
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 20c1.2-3.6 4-5.5 7-5.5s5.8 1.9 7 5.5" />
              </svg>
              Perfil
            </a>
            <a href="admin.html" className="dash-switch__item">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              >
                <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
                <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
                <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
                <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
              </svg>
              Administrador
            </a>
          </nav>

          <a href="auth.html" className="dash-account">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.6"
            >
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 20c1.2-3.6 4-5.5 7-5.5s5.8 1.9 7 5.5" />
            </svg>
            Mi cuenta
          </a>
        </div>
      </header>

      <main className="dash-main">
        <div className="dash-container">
          <section className="dash-header">
            <div className="dash-header__text">
              <p className="dash-eyebrow">PERFIL LECTOR</p>
              <h1 className="dash-title">Tu biblioteca personal</h1>
              <p className="dash-description">
                Revisa tu cuenta, tus preferencias y las lecturas que has ido
                guardando en Librería Alta.
              </p>
            </div>
            <a href="admin.html" className="dash-btn dash-btn--dark">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <path d="M5 19V7.5L12 4l7 3.5V19" />
                <path d="M9 19v-6h6v6" />
              </svg>
              Ir al panel
            </a>
          </section>

          <hr className="dash-divider" />

          <section className="profile-content">
            <div className="panel-card profile-summary">
              <div className="profile-summary__id">
                <span className="profile-avatar">LE</span>
                <span className="status-pill status-pill--ok">
                  Cuenta activa
                </span>
              </div>

              <h2 className="profile-summary__email">
                lector@libreriaalta.com
              </h2>
              <p className="profile-summary__meta">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.6"
                >
                  <rect x="3.5" y="4.5" width="17" height="16" rx="2.5" />
                  <path d="M3.5 9.5h17M8 3v3M16 3v3" />
                </svg>
                Miembro desde septiembre de 2026
              </p>

              <div className="mini-stats">
                <div className="mini-stat">
                  <svg
                    className="mini-stat__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                  >
                    <path d="M6 3.5h9a1.5 1.5 0 0 1 1.5 1.5v15.5L11.5 17 6 20.5V5A1.5 1.5 0 0 1 7.5 3.5Z" />
                  </svg>
                  <p className="mini-stat__value">12</p>
                  <p className="mini-stat__label">Libros guardados</p>
                </div>
                <div className="mini-stat">
                  <svg
                    className="mini-stat__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                  >
                    <path d="M4 8.5 12 4l8 4.5-8 4.5-8-4.5Z" />
                    <path d="M4 8.5V16l8 4.5 8-4.5V8.5" />
                  </svg>
                  <p className="mini-stat__value">4</p>
                  <p className="mini-stat__label">Pedidos</p>
                </div>
                <div className="mini-stat">
                  <svg
                    className="mini-stat__icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                  >
                    <path d="M12 20s-7-4.2-9.3-8.6C1.3 8 3 5 6.2 5c2 0 3.6 1.3 4.3 2.7C11.2 6.3 12.8 5 14.8 5 18 5 19.7 8 18.3 11.4 16 15.8 12 20 12 20Z" />
                  </svg>
                  <p className="mini-stat__value">8</p>
                  <p className="mini-stat__label">Lista de deseos</p>
                </div>
              </div>

              <div className="access-box">
                <span className="access-box__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                  >
                    <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
                    <path d="m4.5 7 7.5 6 7.5-6" />
                  </svg>
                </span>
                <div className="access-box__body">
                  <h3 className="access-box__title">Datos de acceso</h3>
                  <p className="access-box__text">
                    Tu correo es la llave para entrar y recibir avisos sobre
                    pedidos, favoritos y novedades.
                  </p>
                  <button type="button" className="dash-btn dash-btn--outline">
                    Actualizar contraseña
                  </button>
                </div>
              </div>
            </div>

            <div className="profile-details">
              <div className="panel-card">
                <div className="panel-card__header">
                  <p className="dash-eyebrow">PREFERENCIAS</p>
                  <span className="panel-card__header-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.6"
                    >
                      <path d="M12 3.5 13.6 8l4.9.6-3.6 3.3 1 4.8L12 14.3l-4 2.4 1-4.8-3.6-3.3L10.4 8 12 3.5Z" />
                    </svg>
                  </span>
                </div>
                <h2 className="panel-card__title">Estanterías favoritas</h2>

                <div className="preference-list">
                  <div className="preference-row">
                    <div className="preference-row__head">
                      <span>Novela contemporánea</span>
                      <span>72%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar__fill"
                        // style="width: 72%;"
                      ></div>
                    </div>
                  </div>
                  <div className="preference-row">
                    <div className="preference-row__head">
                      <span>Ensayo</span>
                      <span>54%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar__fill"
                        // style="width: 54%;"
                      ></div>
                    </div>
                  </div>
                  <div className="preference-row">
                    <div className="preference-row__head">
                      <span>Poesía</span>
                      <span>38%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-bar__fill"
                        // style="width: 38%;"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="panel-card">
                <div className="panel-card__header">
                  <p className="dash-eyebrow">ACTIVIDAD</p>
                  <span className="panel-card__header-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.6"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M17.7 6.3l-1.5 1.5M7.8 16.2l-1.5 1.5M17.7 17.7l-1.5-1.5M7.8 7.8 6.3 6.3" />
                    </svg>
                  </span>
                </div>
                <h2 className="panel-card__title">Últimos movimientos</h2>

                <ul className="activity-list">
                  <li className="activity-item">
                    <span className="activity-item__icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="m8.5 12.3 2.4 2.4 4.8-5" />
                      </svg>
                    </span>
                    <div className="activity-item__body">
                      <p className="activity-item__title">
                        La casa de los espejos
                      </p>
                      <p className="activity-item__subtitle">
                        Añadido a favoritos
                      </p>
                    </div>
                    <span className="activity-item__time">Hoy</span>
                  </li>
                  <li className="activity-item">
                    <span className="activity-item__icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="m8.5 12.3 2.4 2.4 4.8-5" />
                      </svg>
                    </span>
                    <div className="activity-item__body">
                      <p className="activity-item__title">El peso de la luz</p>
                      <p className="activity-item__subtitle">
                        Pedido en preparación
                      </p>
                    </div>
                    <span className="activity-item__time">Ayer</span>
                  </li>
                  <li className="activity-item">
                    <span className="activity-item__icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="m8.5 12.3 2.4 2.4 4.8-5" />
                      </svg>
                    </span>
                    <div className="activity-item__body">
                      <p className="activity-item__title">Cartas al mediodía</p>
                      <p className="activity-item__subtitle">
                        Marcado para leer después
                      </p>
                    </div>
                    <span className="activity-item__time">Esta semana</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <script src="js/dashboard.js"></script>
    </>
  );
};
