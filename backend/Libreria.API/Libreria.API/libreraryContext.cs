using Libreria.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Libreria.API
{
    //Entender mañana el constructor y el OnModelCreating
    public class libreraryContext : DbContext
    {
        public DbSet<Addresses> addresses { get; set; }
        public DbSet <Books> books { get; set; }

        public DbSet <Copies> copies { get; set; }

        public DbSet <HistoryChangesBooks> historyChanges { get; set; }

        public DbSet <HistoryDeletedBooks> historyDeletedBooks { get; set; }

        public DbSet <News> news { get; set; }

        public DbSet <NewsSubscriptions> newsSubscriptions { get; set; }

        public DbSet<Payments> payments { get; set; }

        public DbSet <Reservations> reservations { get; set; }

        public DbSet <Returns> returns  { get; set; }

        public DbSet <Roles> roles { get; set; }

        public DbSet <Shipping> shippings { get; set; }
        
        public DbSet < Shopping> shoppings { get; set; }

        public DbSet <Users> users { get; set; }


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
