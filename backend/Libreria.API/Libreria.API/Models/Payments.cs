using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class Payments
    {
        public int Id { get; set; }

        public int userId { get; set; }

        [ForeignKey ("userId")]
        [Required]


        public Users users { get; set; }


        [Required]
        [MaxLength(50)]
        [MinLength(3)]
        public string tipoTarjeta { get; set; }

        [Required]

        public int montoPago { get; set; }

        [Required]
        public DateTime fechaPago { get; set; }



    }
}
