using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace RPGtriviaProject.Models
{
    public partial class Villains
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Race { get; set; }
        public int? HealthPoints { get; set; }
        public string Type { get; set; }
        public string Ability { get; set; }
        public int? Image { get; set; }

        public virtual Images ImageNavigation { get; set; }
    }
}
