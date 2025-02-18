using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class UsersRoles
    {
        public int Id { get; set; }
        public int userId { get; set; }

        public int rolesId { get; set; }

        [ForeignKey("userId")]

        [Required]

        public Users users { get; set; }

        [ForeignKey("rolesId")]
        [Required]
        public Roles roles { get; set; }
    }
}
