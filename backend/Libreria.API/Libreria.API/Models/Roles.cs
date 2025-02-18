using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class Roles
    {
        public int Id { get; set; }

        public ICollection<UsersRoles> usersRolesId { get; set; }


        [Required]
        [MaxLength(50)]
        [MinLength(10)]
        public string nombre { get; set; }

        [Required]
        [MaxLength(250)]
        [MinLength(10)]
        public string descripcion { get; set; }

        

    }
}
