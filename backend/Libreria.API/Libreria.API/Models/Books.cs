using System.ComponentModel.DataAnnotations;

namespace Libreria.API.Models
{
    public class Books
    {
        
        public int Id { get; set; }
        [Required]
        public  News News { get; set; }

        [Required]
        [MaxLength(250)]
        [MinLength(1)]
        public string titulo { get; set; }

        [Required]
        [MaxLength(150)]
        [MinLength(1)]

        public string autor { get; set; }

        [Required]

        public int anioPublicacion { get; set; }

        [Required]
        [MaxLength(50)]
        [MinLength(1)]

        public string genero { get; set; }

        [Required]

        public int numeroPagina { get; set; }

        [Required]
        [MaxLength(150)]
        [MinLength(1)]
        public string editiorial { get; set; }

        [Required]

        public int isbn { get; set; }

        [Required]
        [MaxLength(50)]
        [MinLength(2)]
        public string idioma { get; set; }

        [Required]

        public DateOnly fechapublicacion { get; set; }

        [Required]
        [MaxLength(20)]
        [MinLength(1)]
        public string estado { get; set; }

        [Required]

        public int precio { get; set; }

        
        [MaxLength(1000)]
        public string sipnosis { get; set; }

        [Required]

        public byte[] imagenPortada { get; set; }
    }
}
