using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class HistoryChangesBooks
    {
        public int Id { get; set; }


        public int userId { get; set; }

        [ForeignKey("userId")]
        [Required]
        public Users users { get; set; }


        [Required]
        [MaxLength(500)]
        [MinLength(1)]
        public string descripcion { get; set; }

        [Required]
        public DateTime fechaCambio { get; set; }


    }
}
