using System.ComponentModel.DataAnnotations;

namespace Libreria.API.DTOs
{
    public class CreateBookDTO
    {

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
        [Range(1, int.MaxValue, ErrorMessage = "El número de páginas debe ser mayor a 0.")]

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

                [Range(0, int.MaxValue, ErrorMessage = "El precio no puede ser negativo.")]


        public int precio { get; set; }


        [MaxLength(1000)]
        public string sipnosis { get; set; }

        [Required]

        public string imagenPortada { get; set; }
    }
}
