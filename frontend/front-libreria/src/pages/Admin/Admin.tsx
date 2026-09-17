import "../../components/ui/users.css";

export const Admin = () => {
  return (
    <body className="bg-cream text-ink font-sans antialiased">
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
            <a href="perfil.html" className="dash-switch__item">
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
            <a href="admin.html" className="dash-switch__item is-active">
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
              <p className="dash-eyebrow">PANEL PRIVADO</p>
              <h1 className="dash-title">Administración de la librería</h1>
              <p className="dash-description">
                Una vista clara para cuidar el catálogo, revisar pedidos y
                mantener el stock con el mismo tono cálido de la tienda.
              </p>
            </div>
            <button type="button" className="dash-btn dash-btn--dark">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
              >
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M9 9h3.5M9 12h6M9 15h6" />
              </svg>
              Añadir libro
            </button>
          </section>

          <hr className="dash-divider" />

          <section className="admin-stats">
            <article className="stat-card">
              <div className="stat-card__top">
                <span className="stat-card__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                  >
                    <path d="M7 9h8M7 12h6M17 5.5c-1.3-1-3-1.5-5-1.5-4.4 0-8 3.6-8 8s3.6 8 8 8c2 0 3.7-.5 5-1.5" />
                  </svg>
                </span>
                <span className="stat-card__badge">+18%</span>
              </div>
              <p className="stat-card__label">Ingresos del mes</p>
              <p className="stat-card__value">4.820&nbsp;€</p>
            </article>

            <article className="stat-card">
              <div className="stat-card__top">
                <span className="stat-card__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                  >
                    <rect x="5" y="4.5" width="14" height="16" rx="2" />
                    <path d="M9 3.5h6v3H9z" />
                    <path d="M9 11h6M9 14.5h6" />
                  </svg>
                </span>
                <span className="stat-card__badge">8 urgentes</span>
              </div>
              <p className="stat-card__label">Pedidos abiertos</p>
              <p className="stat-card__value">36</p>
            </article>

            <article className="stat-card">
              <div className="stat-card__top">
                <span className="stat-card__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                  >
                    <circle cx="12" cy="6" r="2.4" />
                    <circle cx="6.5" cy="16" r="2.4" />
                    <circle cx="17.5" cy="16" r="2.4" />
                    <path d="M12 8.4V12M9.8 14.2 12 12l2.2 2.2" />
                  </svg>
                </span>
                <span className="stat-card__badge">16 nuevos</span>
              </div>
              <p className="stat-card__label">Títulos activos</p>
              <p className="stat-card__value">248</p>
            </article>

            <article className="stat-card">
              <div className="stat-card__top">
                <span className="stat-card__icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                  >
                    <path d="M4 8.5 12 4l8 4.5-8 4.5-8-4.5Z" />
                    <path d="M4 8.5V16l8 4.5 8-4.5V8.5" />
                    <path d="M12 13v7.5" />
                  </svg>
                </span>
                <span className="stat-card__badge stat-card__badge--alert">
                  Revisar
                </span>
              </div>
              <p className="stat-card__label">Stock bajo</p>
              <p className="stat-card__value">11</p>
            </article>
          </section>

          <section className="admin-content">
            <div className="panel-card admin-catalog">
              <div className="admin-catalog__header">
                <div>
                  <p className="dash-eyebrow dash-eyebrow--sm">CATÁLOGO</p>
                  <h2 className="panel-card__title">Inventario editorial</h2>
                </div>
                <label className="dash-search">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <input
                    type="text"
                    id="catalog-search"
                    placeholder="Buscar título o autor..."
                  />
                </label>
              </div>

              <div className="admin-table__wrap">
                <table className="admin-table" id="catalog-table">
                  <thead>
                    <tr>
                      <th>Libro</th>
                      <th>Categoría</th>
                      <th>Stock</th>
                      <th>Precio</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-title="la casa de los espejos mirela fontán">
                      <td>
                        <p className="admin-table__title">
                          La casa de los espejos
                        </p>
                        <p className="admin-table__author">Mirela Fontán</p>
                      </td>
                      <td>Novela</td>
                      <td className="admin-table__stock">18</td>
                      <td>24,90&nbsp;€</td>
                      <td>
                        <span className="status-pill status-pill--ok">
                          Activo
                        </span>
                      </td>
                    </tr>
                    <tr data-title="el peso de la luz daniel ruano">
                      <td>
                        <p className="admin-table__title">El peso de la luz</p>
                        <p className="admin-table__author">Daniel Ruano</p>
                      </td>
                      <td>Ensayo</td>
                      <td className="admin-table__stock">7</td>
                      <td>21,50&nbsp;€</td>
                      <td>
                        <span className="status-pill status-pill--low">
                          Bajo
                        </span>
                      </td>
                    </tr>
                    <tr data-title="cartas al mediodía ana belén soto">
                      <td>
                        <p className="admin-table__title">Cartas al mediodía</p>
                        <p className="admin-table__author">Ana Belén Soto</p>
                      </td>
                      <td>Poesía</td>
                      <td className="admin-table__stock">24</td>
                      <td>18,00&nbsp;€</td>
                      <td>
                        <span className="status-pill status-pill--ok">
                          Activo
                        </span>
                      </td>
                    </tr>
                    <tr data-title="el jardín de papel tomás vega">
                      <td>
                        <p className="admin-table__title">El jardín de papel</p>
                        <p className="admin-table__author">Tomás Vega</p>
                      </td>
                      <td>Infantil</td>
                      <td className="admin-table__stock">5</td>
                      <td>27,90&nbsp;€</td>
                      <td>
                        <span className="status-pill status-pill--low">
                          Bajo
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="admin-table__empty" data-table-empty hidden>
                  No hay títulos que coincidan con tu búsqueda.
                </p>
              </div>
            </div>

            <div className="admin-sidebar">
              <div className="panel-card panel-card--dark">
                <div className="panel-card__header">
                  <p className="dash-eyebrow dash-eyebrow--on-dark">
                    META MENSUAL
                  </p>
                  <span className="panel-card__header-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path d="M4 16l5-5 4 4 7-8" />
                      <path d="M15 7h5v5" />
                    </svg>
                  </span>
                </div>
                <h2 className="panel-card__title panel-card__title--on-dark">
                  Ventas
                </h2>
                <p className="goal-card__value">68%</p>
                <div className="progress-bar progress-bar--on-dark">
                  <div className="progress-bar__fill"></div>
                </div>
                <p className="goal-card__caption">
                  La selección de otoño está empujando los pedidos de novela y
                  ensayo.
                </p>
              </div>

              <div className="panel-card">
                <div className="panel-card__header">
                  <p className="dash-eyebrow">PEDIDOS</p>
                  <span className="panel-card__header-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >
                      <path d="M12 3.5 19 7v6c0 4-3 6.7-7 7.5-4-.8-7-3.5-7-7.5V7l7-3.5Z" />
                      <path d="m9.2 12 2 2 3.6-4" />
                    </svg>
                  </span>
                </div>
                <h2 className="panel-card__title">Recientes</h2>

                <ul className="order-list">
                  <li className="order-item">
                    <div className="order-item__row">
                      <p className="order-item__id">LA-1048</p>
                      <button
                        type="button"
                        className="order-item__menu"
                        aria-label="Más opciones"
                      >
                        ⋯
                      </button>
                    </div>
                    <p className="order-item__customer">Camila R.</p>
                    <div className="order-item__row">
                      <span className="order-item__status">Preparando</span>
                      <span className="order-item__amount">46,40&nbsp;€</span>
                    </div>
                  </li>
                  <li className="order-item">
                    <div className="order-item__row">
                      <p className="order-item__id">LA-1047</p>
                      <button
                        type="button"
                        className="order-item__menu"
                        aria-label="Más opciones"
                      >
                        ⋯
                      </button>
                    </div>
                    <p className="order-item__customer">Mateo G.</p>
                    <div className="order-item__row">
                      <span className="order-item__status">Pagado</span>
                      <span className="order-item__amount">24,90&nbsp;€</span>
                    </div>
                  </li>
                  <li className="order-item">
                    <div className="order-item__row">
                      <p className="order-item__id">LA-1046</p>
                      <button
                        type="button"
                        className="order-item__menu"
                        aria-label="Más opciones"
                      >
                        ⋯
                      </button>
                    </div>
                    <p className="order-item__customer">Lucía P.</p>
                    <div className="order-item__row">
                      <span className="order-item__status">Enviado</span>
                      <span className="order-item__amount">72,30&nbsp;€</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>

      <script src="js/dashboard.js"></script>
    </body>
  );
};
