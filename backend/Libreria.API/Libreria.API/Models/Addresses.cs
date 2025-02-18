using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class Addresses
    {

        public int Id { get; set; }
        public int userId { get; set; }

        [ForeignKey ("userId")]
        [Required]
        public Users Users { get; set; }

        [Required]
        [MaxLength(100)]
        [MinLength(2)]
        public string pais { get; set; }

        [Required]
        [MaxLength(100)]
        [MinLength(2)]


        public string departamento { get; set; }

        [Required]
        [MaxLength(100)]
        [MinLength(2)]

        public string ciudad { get; set; }

        [Required]
        [MaxLength(100)]
        [MinLength(2)]

        public string barrio { get; set; }

        [MaxLength(50)]
        [MinLength(2)]
        [Required]

        public string tipoVia { get; set; }
        
        [MaxLength(20)]
        [MinLength(1)]
        [Required]
        public string numero { get; set; }

        [MaxLength(250)]

        public string detalleDireccion { get; set; }

        [MaxLength(20)]
        [Required]
        [MinLength(3)]
        public string codigoPostal { get; set; }
    }
}
