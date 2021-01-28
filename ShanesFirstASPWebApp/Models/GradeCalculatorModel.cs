using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace ShanesFirstASPWebApp.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100!")]
        public double A { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100!")]
        public double GP { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100!")]
        public double Q { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100!")]
        public double E { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100!")]
        public double I { get; set; }
    }
}
