using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RPGtriviaProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RPGtriviaProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeroClassController : ControllerBase
    { TriviaDBContext context = new TriviaDBContext();
        [HttpGet("allClasses")]
        public List<Heroes> displayAllHeroes()
        {
            return context.Heroes.ToList();
            
        }

        [HttpGet("allClasses/{id}")]
        public Heroes getHeroById(int id)
        {
            return context.Heroes.Find(id);


        }
    }
}
