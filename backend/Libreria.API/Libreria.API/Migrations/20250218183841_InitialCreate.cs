using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Libreria.API.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "books",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    titulo = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
                    autor = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: false),
                    anioPublicacion = table.Column<int>(type: "integer", nullable: false),
                    genero = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    numeroPagina = table.Column<int>(type: "integer", nullable: false),
                    editiorial = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: false),
                    isbn = table.Column<int>(type: "integer", nullable: false),
                    idioma = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    fechapublicacion = table.Column<DateOnly>(type: "date", nullable: false),
                    estado = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    precio = table.Column<int>(type: "integer", nullable: false),
                    sipnosis = table.Column<string>(type: "character varying(1000)", maxLength: 1000, nullable: false),
                    imagenPortada = table.Column<byte[]>(type: "bytea", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_books", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "roles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    nombre = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    descripcion = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_roles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    dni = table.Column<int>(type: "integer", nullable: false),
                    nombre = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    apellidos = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    fechaNacimiento = table.Column<DateOnly>(type: "date", nullable: false),
                    lugarNacimento = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    genero = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    correoElectronico = table.Column<string>(type: "character varying(150)", maxLength: 150, nullable: false),
                    usuario = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    cotrasenia = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "copies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    libroId = table.Column<int>(type: "integer", nullable: false),
                    codigoEjemplar = table.Column<int>(type: "integer", nullable: false),
                    estadoEjemplar = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_copies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_copies_books_libroId",
                        column: x => x.libroId,
                        principalTable: "books",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "news",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    libroId = table.Column<int>(type: "integer", nullable: false),
                    fechaPublicacion = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_news", x => x.Id);
                    table.ForeignKey(
                        name: "FK_news_books_libroId",
                        column: x => x.libroId,
                        principalTable: "books",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "addresses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    pais = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    departamento = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    ciudad = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    barrio = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    tipoVia = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    numero = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false),
                    detalleDireccion = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
                    codigoPostal = table.Column<string>(type: "character varying(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_addresses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_addresses_users_userId",
                        column: x => x.userId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "canceledPurchases",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    fechaCancelacion = table.Column<DateOnly>(type: "date", nullable: false),
                    motivoCancelacion = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_canceledPurchases", x => x.Id);
                    table.ForeignKey(
                        name: "FK_canceledPurchases_users_userId",
                        column: x => x.userId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "historyChanges",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    descripcion = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    fechaCambio = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_historyChanges", x => x.Id);
                    table.ForeignKey(
                        name: "FK_historyChanges_users_userId",
                        column: x => x.userId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "historyDeletedBooks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    descripcion = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    fechaEliminacion = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_historyDeletedBooks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_historyDeletedBooks_users_userId",
                        column: x => x.userId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "literaryTastes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    nombre = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false),
                    descripcion = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    subgenero = table.Column<string>(type: "character varying(100)", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_literaryTastes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_literaryTastes_users_userId",
                        column: x => x.userId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "newsSubscriptions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    fechaSuscripcion = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_newsSubscriptions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_newsSubscriptions_users_userId",
                        column: x => x.userId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "payments",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    tipoTarjeta = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    montoPago = table.Column<int>(type: "integer", nullable: false),
                    fechaPago = table.Column<DateTime>(type: "timestamp with time zone", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_payments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_payments_users_userId",
                        column: x => x.userId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "reservations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    fechaReserva = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    fechaExpiracionReserva = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    cantidad = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_reservations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_reservations_users_userId",
                        column: x => x.userId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "returns",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    fechaDevolucion = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    motivo = table.Column<string>(type: "character varying(500)", maxLength: 500, nullable: false),
                    estadoDevolucion = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_returns", x => x.Id);
                    table.ForeignKey(
                        name: "FK_returns_users_userId",
                        column: x => x.userId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "shippings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    estado = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    fechaEnvio = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    retiroTienda = table.Column<bool>(type: "boolean", nullable: false),
                    fechaEntrega = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_shippings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_shippings_users_userId",
                        column: x => x.userId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "usersRoles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    rolesId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_usersRoles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_usersRoles_roles_rolesId",
                        column: x => x.rolesId,
                        principalTable: "roles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_usersRoles_users_userId",
                        column: x => x.userId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "shoppings",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    userId = table.Column<int>(type: "integer", nullable: false),
                    pagosId = table.Column<int>(type: "integer", nullable: false),
                    libroId = table.Column<int>(type: "integer", nullable: false),
                    fechaCompra = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    cantidad = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_shoppings", x => x.Id);
                    table.ForeignKey(
                        name: "FK_shoppings_books_libroId",
                        column: x => x.libroId,
                        principalTable: "books",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_shoppings_payments_pagosId",
                        column: x => x.pagosId,
                        principalTable: "payments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_shoppings_users_userId",
                        column: x => x.userId,
                        principalTable: "users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_addresses_userId",
                table: "addresses",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_canceledPurchases_userId",
                table: "canceledPurchases",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_copies_libroId",
                table: "copies",
                column: "libroId");

            migrationBuilder.CreateIndex(
                name: "IX_historyChanges_userId",
                table: "historyChanges",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_historyDeletedBooks_userId",
                table: "historyDeletedBooks",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_literaryTastes_userId",
                table: "literaryTastes",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_news_libroId",
                table: "news",
                column: "libroId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_newsSubscriptions_userId",
                table: "newsSubscriptions",
                column: "userId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_payments_userId",
                table: "payments",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_reservations_userId",
                table: "reservations",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_returns_userId",
                table: "returns",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_shippings_userId",
                table: "shippings",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_shoppings_libroId",
                table: "shoppings",
                column: "libroId");

            migrationBuilder.CreateIndex(
                name: "IX_shoppings_pagosId",
                table: "shoppings",
                column: "pagosId");

            migrationBuilder.CreateIndex(
                name: "IX_shoppings_userId",
                table: "shoppings",
                column: "userId");

            migrationBuilder.CreateIndex(
                name: "IX_usersRoles_rolesId",
                table: "usersRoles",
                column: "rolesId");

            migrationBuilder.CreateIndex(
                name: "IX_usersRoles_userId",
                table: "usersRoles",
                column: "userId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "addresses");

            migrationBuilder.DropTable(
                name: "canceledPurchases");

            migrationBuilder.DropTable(
                name: "copies");

            migrationBuilder.DropTable(
                name: "historyChanges");

            migrationBuilder.DropTable(
                name: "historyDeletedBooks");

            migrationBuilder.DropTable(
                name: "literaryTastes");

            migrationBuilder.DropTable(
                name: "news");

            migrationBuilder.DropTable(
                name: "newsSubscriptions");

            migrationBuilder.DropTable(
                name: "reservations");

            migrationBuilder.DropTable(
                name: "returns");

            migrationBuilder.DropTable(
                name: "shippings");

            migrationBuilder.DropTable(
                name: "shoppings");

            migrationBuilder.DropTable(
                name: "usersRoles");

            migrationBuilder.DropTable(
                name: "books");

            migrationBuilder.DropTable(
                name: "payments");

            migrationBuilder.DropTable(
                name: "roles");

            migrationBuilder.DropTable(
                name: "users");
        }
    }
}
