using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace RPGtriviaProject.Models
{
    public partial class Players
    {
        public Players()
        {
            Heroes = new HashSet<Heroes>();
        }

        public int Id { get; set; }
        public string UserId { get; set; }
        public string UserName { get; set; }
        public int? AvatarImage { get; set; }
        public string AvatarColor { get; set; }
        public int? GamesWon { get; set; }
        public int? Title { get; set; }

        public virtual Images AvatarImageNavigation { get; set; }
        public virtual Title TitleNavigation { get; set; }
        public virtual AspNetUsers User { get; set; }
        public virtual ICollection<Heroes> Heroes { get; set; }
    }
}
