using Libreria.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Libreria.API
{
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

        public DbSet <CanceledPurchases> canceledPurchases { get; set; }

        public DbSet <LiteraryTastes> literaryTastes { get; set; }

        public DbSet <UsersRoles> usersRoles { get; set; }


        public libreraryContext(DbContextOptions<libreraryContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
          
        }
    }
}
