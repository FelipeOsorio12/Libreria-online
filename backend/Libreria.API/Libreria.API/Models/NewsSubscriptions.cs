﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Libreria.API.Models
{
    public class NewsSubscriptions
    {
        public int Id { get; set; }

        public int userId { get; set; }

        [ForeignKey ("userId")]
        [Required]


        public Users users { get; set; }



        [Required]
        public DateTime fechaSuscripcion { get; set; }


    }
}
