using System.ComponentModel.DataAnnotations;

namespace Libreria.API.DTOs
{
    public class EditUserDTO
    {
        
        [MaxLength(100)]
        [MinLength(2)]
        public string? nombre { get; set; }

        [MaxLength(100)]
        [MinLength(2)]
        public string? apellidos { get; set; }

      
        [MaxLength(150)]
        [MinLength(5)]
        public string? correoElectronico { get; set; }

        
        [MaxLength(20)]
        [MinLength(1)]
        public string? genero { get; set; }

 
        [MaxLength(50)]
        [MinLength(4)]
        public string? usuario { get; set; }
 
        [MaxLength(100)]
        [MinLength(8)]
        public string? cotrasenia { get; set; }
    }
}
