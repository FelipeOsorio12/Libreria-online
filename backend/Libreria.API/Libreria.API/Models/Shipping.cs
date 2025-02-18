using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class Shipping
    {
        public int Id { get; set; }


        public int userId { get; set; }
        [ForeignKey("userId")]
        [Required]


        public Users users { get; set;  }

        [Required]
        [MaxLength(50)]
        [MinLength(3)]
        public string estado { get; set; }

        [Required]
        public DateTime fechaEnvio { get; set; }

        [Required]
        public bool retiroTienda { get; set; }
        [Required]
        public DateOnly fechaEntrega { get; set; }



    }
}
