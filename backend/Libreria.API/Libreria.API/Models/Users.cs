using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class Users
    {
        public int Id { get; set; }


        public NewsSubscriptions newsSubscriptions { get; set; }
        public ICollection<UsersRoles> usersRolesId { get; set; }

        public int dni { get; set; }

        [Required]
        [MaxLength(100)]
        [MinLength(2)]
        public string nombre { get; set; }
        [Required]
        [MaxLength(100)]
        [MinLength(2)]
        public string apellidos { get; set; }
        [Required]
        public DateOnly fechaNacimiento { get; set; }
        [Required]
        [MaxLength(100)]
        [MinLength(2)]
        public string lugarNacimento { get; set; }
        [Required]
        [MaxLength(20)]
        [MinLength(1)]
        public string genero { get; set; }

        [Required]
        [MaxLength(150)]
        [MinLength(5)]
        public string correoElectronico { get; set; }
        [Required]
        [MaxLength(50)]
        [MinLength(4)]
        public string usuario { get; set; }
        [Required]
        [MaxLength(100)]
        [MinLength(8)]
        public string cotrasenia { get; set; }

    }
}
