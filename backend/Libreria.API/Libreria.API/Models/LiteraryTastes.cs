using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class LiteraryTastes
    {
        public int Id { get; set; }

        public int userId { get; set; }

        [ForeignKey("userId")]

        [Required]
        public Users users { get; set; }

        [Required]
        [MaxLength(100)]
        [MinLength(1)]
        public string nombre { get; set; }

        [Required]
        [MaxLength(500)]
        [MinLength(10)]

        public string descripcion { get; set; }

        [MaxLength(100)]
        [MinLength(3)]
        public string subgenero { get; set; }
    }
}
