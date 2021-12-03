using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace RPGtriviaProject.Models
{
    public partial class HeroInfo
    {
        public HeroInfo()
        {
            Heroes = new HashSet<Heroes>();
        }

        public int Id { get; set; }
        public int? HealthPoints { get; set; }
        public string Class { get; set; }
        public string Ability { get; set; }
        public string Bio { get; set; }
        public int? Image { get; set; }

        public virtual Images ImageNavigation { get; set; }
        public virtual ICollection<Heroes> Heroes { get; set; }
    }
}
