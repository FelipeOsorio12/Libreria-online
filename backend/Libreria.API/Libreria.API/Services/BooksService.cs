using Libreria.API.Models;

namespace Libreria.API.Services
{
    public class BooksService
    {
        private readonly libreraryContext _libreraryContext;

        public BooksService (libreraryContext libreraryContext)
        {
            _libreraryContext = libreraryContext;
        }

        public async Task<Books?> gettBookByIdAsync(int id)
        {
            return await _libreraryContext.books.FindAsync(id);
        }
    }
}
