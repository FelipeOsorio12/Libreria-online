using Libreria.API.Models;

namespace Libreria.API.Functions.BooksFunctions
{
    public class GetBookById
    {

        private readonly libreraryContext _libreraryContext;

        public GetBookById(libreraryContext libreraryContext)
        {
            _libreraryContext = libreraryContext;
        }

        public async Task <Books?> gettBookByIdAsync(int id)
        {
            return await _libreraryContext.books.FindAsync(id);
        }
    }
}
