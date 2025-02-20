using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class News
    {
       
        public int Id { get; set; }


        [ForeignKey("Books")]

        public int LibroId { get; set; }


        [Required]
        public  Books Books { get; set; }


        [Required]
        public DateOnly fechaPublicacion { get; set; }


    }
}
