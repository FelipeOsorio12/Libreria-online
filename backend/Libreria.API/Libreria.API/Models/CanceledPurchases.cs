using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class CanceledPurchases
    {
        public int Id { get; set; }

        public int userId { get; set; }

        [ForeignKey ("userId")]
        [Required]

        public Users users { get; set; }


        [Required]
        public DateOnly fechaCancelacion { get; set; }
        [Required]
        [MaxLength(500)]
        [MinLength(1)]
        public string motivoCancelacion { get; set; }
    }
}
