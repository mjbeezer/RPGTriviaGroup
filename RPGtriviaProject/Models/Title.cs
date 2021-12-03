using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace RPGtriviaProject.Models
{
    public partial class Title
    {
        public Title()
        {
            Players = new HashSet<Players>();
        }

        public int Id { get; set; }
        public string Title1 { get; set; }
        public int? GamesWon { get; set; }

        public virtual ICollection<Players> Players { get; set; }
    }
}
