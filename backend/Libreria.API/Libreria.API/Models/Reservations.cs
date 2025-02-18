using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class Reservations
    {
        public int Id { get; set; }

        public int userId { get; set; }

        [ForeignKey ("userId")]
        [Required]

        public Users users { get; set; }

        [Required]
        public DateTime fechaReserva { get;set; }

        [Required]

        public DateTime fechaExpiracionReserva { get; set; }

        [Required]
        public int cantidad { get; set; }
    }
}
