using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public List<HeroInfo> displayAllHeroes()
        {
            //return context.Heroes.Include(H => H.HeroClassNavigation).ToList();
            return context.HeroInfo.Include(H => H.ImageNavigation).ToList();
            
        }

        [HttpGet("allClasses/{id}")]
        public HeroInfo getHeroById(int id)
        {
            //return context.Heroes.Include(H => H.HeroClassNavigation).ToList().Find(H => H.Id == id);
            return context.HeroInfo.Include(H => H.ImageNavigation).ToList().Find(H => H.Id == id);
        }
    }
}
