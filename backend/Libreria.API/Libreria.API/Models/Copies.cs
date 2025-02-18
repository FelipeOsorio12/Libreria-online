using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class Copies
    {
        public int Id { get; set; }

        public int libroId { get; set; }

        [ForeignKey ("libroId")]
        [Required]

        public Books books { get; set;  }

        [Required]

        public int codigoEjemplar { get; set; }

        [Required]
        [MaxLength(50)]
        [MinLength(1)]
        public string estadoEjemplar { get; set; }


    }
}
