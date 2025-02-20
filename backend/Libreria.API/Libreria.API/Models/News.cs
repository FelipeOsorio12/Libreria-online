using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class News
    {
       
        public int Id { get; set; }

        public int LibroId { get; set; }

        [ForeignKey("LibroId")]

        [Required]
        public  Books Books { get; set; }


        [Required]
        public DateOnly fechaPublicacion { get; set; }


    }
}
