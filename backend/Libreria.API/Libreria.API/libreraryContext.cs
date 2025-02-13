using Libreria.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Libreria.API
{
    //Entender mañana el constructor y el OnModelCreating
    public class libreraryContext : DbContext
    {
        public DbSet <Books> books { get; set; }

        public libreraryContext(DbContextOptions<libreraryContext> options) : base(options)
        {
        }

        // Método para configurar el contexto (opcional, para personalizar mapeos o configuración)
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Aquí puedes realizar configuraciones adicionales si las necesitas
            // Por ejemplo, establecer reglas para la base de datos
        }
    }
}
