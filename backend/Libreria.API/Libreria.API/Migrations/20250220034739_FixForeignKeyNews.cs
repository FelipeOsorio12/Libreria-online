using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Libreria.API.Migrations
{
    /// <inheritdoc />
    public partial class FixForeignKeyNews : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_news_books_libroId",
                table: "news");

            migrationBuilder.RenameColumn(
                name: "libroId",
                table: "news",
                newName: "LibroId");

            migrationBuilder.RenameIndex(
                name: "IX_news_libroId",
                table: "news",
                newName: "IX_news_LibroId");

            migrationBuilder.AddForeignKey(
                name: "FK_news_books_LibroId",
                table: "news",
                column: "LibroId",
                principalTable: "books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_news_books_LibroId",
                table: "news");

            migrationBuilder.RenameColumn(
                name: "LibroId",
                table: "news",
                newName: "libroId");

            migrationBuilder.RenameIndex(
                name: "IX_news_LibroId",
                table: "news",
                newName: "IX_news_libroId");

            migrationBuilder.AddForeignKey(
                name: "FK_news_books_libroId",
                table: "news",
                column: "libroId",
                principalTable: "books",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
