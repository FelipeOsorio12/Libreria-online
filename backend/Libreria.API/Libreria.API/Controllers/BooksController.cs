using Libreria.API.Functions.BooksFunctions;
using Libreria.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Libreria.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly BooksService _booksService;

        public BooksController (BooksService booksService)    
        {
            _booksService = booksService;
        }

        /// <summary>
        /// Obtiene un libro por su ID.
        /// </summary>
        /// <param name="id">ID del libro a buscar.</param>
        /// <returns>El libro si se encuentra, o un error 404 si no existe.</returns>

        [HttpGet("{id}")]

        public async Task <IActionResult> GetBook (int id)
        {
            var libro = await _booksService.gettBookByIdAsync(id);

            if( libro == null)
            {
                return NotFound(new { message = "Libro no encontrado" });

            }

            return Ok(libro);
            
        }
    }
}
