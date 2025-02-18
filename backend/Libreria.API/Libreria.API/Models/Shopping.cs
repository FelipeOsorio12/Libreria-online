using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class Shopping
    {
        public int Id { get; set; }

        public int userId { get; set; }

        [ForeignKey("userId")]
        [Required]

        public Users users { get; set; }

        public int pagosId { get; set; }

        [ForeignKey("pagosId")]
        [Required]
        public Payments payments { get; set; }


        public int libroId { get; set; }

        [ForeignKey("libroId")]

        [Required]
        public Books books { get; set; }

        [Required]
        public DateTime fechaCompra { get; set; }

        [Required]
        public int cantidad { get; set; }

    }
}
