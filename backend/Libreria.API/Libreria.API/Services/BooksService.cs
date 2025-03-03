using Libreria.API.DTOs;
using Libreria.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Libreria.API.Services
{
    public class BooksService
    {
        private readonly libreraryContext _libreraryContext;

        public BooksService (libreraryContext libreraryContext)
        {
            _libreraryContext = libreraryContext;
        }
        //conusltar libro por Id
        public async Task<Books?> gettBookByIdAsync(int id)
        {
            return await _libreraryContext.books.FindAsync(id);
        }

        //Consultar todos los libros

        public async Task<List<Books>> gettAllsBooks ()
        {
            return await _libreraryContext.books.ToListAsync();
        }


        //Editar libro

        public async Task<int> editBookByIdAsync(int id,EditBookDTO editBookDTO)
        {
            //entender que hace esta linea
            var book = await _libreraryContext.books.FindAsync(id);
            if (book == null)
            {
                return 0;

            }
            if (editBookDTO.titulo != null)book.titulo = editBookDTO.titulo;
            if(editBookDTO.autor != null) book.autor = editBookDTO.autor;
            if (editBookDTO.anioPublicacion.HasValue) book.anioPublicacion = editBookDTO.anioPublicacion.Value;
            if (editBookDTO.genero != null) book.genero = editBookDTO.genero;
            if (editBookDTO.numeroPagina.HasValue) book.numeroPagina = editBookDTO.numeroPagina.Value;
            if (editBookDTO.editiorial != null) book.editiorial = editBookDTO.editiorial;
            if (editBookDTO.idioma != null) book.idioma = editBookDTO.idioma;
            if (editBookDTO.estado != null) book.estado = editBookDTO.estado;
            if (editBookDTO.precio.HasValue) book.precio = editBookDTO.precio.Value;
            if (editBookDTO.sipnosis != null) book.sipnosis = editBookDTO.sipnosis;

            return await _libreraryContext.SaveChangesAsync();
        }

        //Añadir libro

        public async Task <int> AddBookAsync(CreateBookDTO createBookDTO)
        {

            var createBookEntity = new Books
            {
                titulo = createBookDTO.titulo,
                autor = createBookDTO.autor,
                anioPublicacion = createBookDTO.anioPublicacion,
                genero = createBookDTO.genero,
                numeroPagina = createBookDTO.numeroPagina,
                editiorial = createBookDTO.editiorial,
                idioma = createBookDTO.idioma,
                fechapublicacion = createBookDTO.fechapublicacion,
                estado = createBookDTO.estado,
                precio = createBookDTO.precio,
                sipnosis = createBookDTO.sipnosis,
                imagenPortada = Convert.FromBase64String(createBookDTO.imagenPortada),
            };

            var book = await _libreraryContext.books.AddAsync(createBookEntity);

            return await _libreraryContext.SaveChangesAsync();

        }

        //Eliminar libro

        public async Task<int> DeleteBookByIdAsync(int Id)
        {
            var book = await _libreraryContext.books.FindAsync(Id);
            if (book == null)
            {
                return 0;

            }

            _libreraryContext.Remove(book);

            return await _libreraryContext.SaveChangesAsync();

        }
    }
}
