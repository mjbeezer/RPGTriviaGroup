using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace RPGtriviaProject.Models
{
    public partial class Heroes
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? UserId { get; set; }
        public int? HeroClass { get; set; }

        public virtual HeroInfo HeroClassNavigation { get; set; }
        public virtual Players User { get; set; }
    }
}
