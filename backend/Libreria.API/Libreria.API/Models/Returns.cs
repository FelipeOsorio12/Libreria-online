﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class Returns
    {
        public int Id { get; set; }

        public int userId { get; set; }
        [ForeignKey ("userId")]
        [Required]

        public Users users { get; set; }


        [Required]
        public DateTime fechaDevolucion { get; set; }

        [Required]
        [MaxLength(500)]
        [MinLength(1)]
        public string motivo { get; set; }

        [Required]
        [MaxLength(50)]
        [MinLength(3)]
        public string estadoDevolucion { get; set; }

    }
}
