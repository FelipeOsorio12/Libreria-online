using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class NewsSubscriptions
    {
        public int Id { get; set; }


        [ForeignKey("users")]

        public int userId { get; set; }

        [Required]

        public Users users { get; set; }



        [Required]
        public DateTime fechaSuscripcion { get; set; }


    }
}
