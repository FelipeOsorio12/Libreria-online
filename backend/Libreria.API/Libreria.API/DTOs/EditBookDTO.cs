using System.ComponentModel.DataAnnotations;

namespace Libreria.API.DTOs
{
    public class EditBookDTO
    {
     
      
        [MaxLength(250)]
        [MinLength(1)]
        public string? titulo { get; set; }

        
        [MaxLength(150)]
        [MinLength(1)]

        public string? autor { get; set; }

        public int? anioPublicacion { get; set; }

        [MaxLength(50)]
        [MinLength(1)]

        public string? genero { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "El número de páginas debe ser mayor a 0.")]

        public int? numeroPagina { get; set; }

        [MaxLength(150)]
        [MinLength(1)]
        public string? editiorial { get; set; }


        [MaxLength(50)]
        [MinLength(2)]
        public string? idioma { get; set; }

        [MaxLength(20)]
        [MinLength(1)]
        public string? estado { get; set; }

        [Range(0, int.MaxValue, ErrorMessage = "El precio no puede ser negativo.")]

        public int? precio { get; set; }

        [MaxLength(1000)]
        public string? sipnosis { get; set; }

      
    }
}
