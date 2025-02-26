using Libreria.API.DTOs;
using Libreria.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Libreria.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly BooksService _booksService;

        public BooksController(BooksService booksService)
        {
            _booksService = booksService;
        }

        /// <summary>
        /// Obtiene un libro por su ID.
        /// </summary>
        /// <param name="id">ID del libro a buscar.</param>
        /// <returns>El libro si se encuentra, o un error 404 si no existe.</returns>

        [HttpGet("{id}")]

        public async Task<IActionResult> GetBook(int id)
        {
            var libro = await _booksService.gettBookByIdAsync(id);

            if (libro == null)
            {
                return NotFound(new { message = "Libro no encontrado" });

            }

            return Ok(libro);

        }

        /// <summary>
        /// Obtiene todos los libros de la base de datos
        /// </summary>
        /// <returns>Los libros registrados, o un error 404 si no hay libros.</returns>

        [HttpGet]

        public async Task<IActionResult> GetAllBooks()
        {
            var libros = await _booksService.gettAllsBooks();

            if (libros.Count == 0)
            {
                return NotFound(new { message = "No hay libros registrados" });

            }

            return Ok(libros);


        }

        [HttpPatch]
        //revisar exepción cuando no se manda el id
        public async Task<IActionResult> editBookById(EditBookDTO editBookDTO)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    message = "Hubo errores en la validación.",
                    errors = ModelState.Values.SelectMany(v => v.Errors)
                               .Select(e => e.ErrorMessage)
                });
            }

            var result = await _booksService.editBookByIdAsync(editBookDTO);

            if (result == 0)
            {
                return NotFound(new { message = "Libro no encontrado." });
            }

            return Ok(new { message = "Modificación Correcta" });

        }


        [HttpDelete("{id}")]

        public async Task<IActionResult> deleteBookById (int Id)
        {
            if(Id == 0)
            {
                return BadRequest(new{message = "Hubo errores en el envio de parametros."});

            }

            var result = await _booksService.DeleteBookByIdAsync(Id);

            if (result == 0)
            {
                return NotFound(new { message = "Libro no encontrado." });
            }

            return Ok(new { message = "Eliminación correcta." });

        }
    }
}
