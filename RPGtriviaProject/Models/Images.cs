using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace RPGtriviaProject.Models
{
    public partial class Images
    {
        public Images()
        {
            HeroInfo = new HashSet<HeroInfo>();
            Players = new HashSet<Players>();
            Villains = new HashSet<Villains>();
        }

        public int Id { get; set; }
        public string ImageName { get; set; }

        public virtual ICollection<HeroInfo> HeroInfo { get; set; }
        public virtual ICollection<Players> Players { get; set; }
        public virtual ICollection<Villains> Villains { get; set; }
    }
}
