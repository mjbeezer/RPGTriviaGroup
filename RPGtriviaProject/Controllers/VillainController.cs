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
    public class VillainController : ControllerBase
    {

        TriviaDBContext context = new TriviaDBContext();
        [HttpGet("allVillains")]
        public List<Villains> displayAllHeroes()
        {
            return context.Villains.ToList();

        }

        [HttpGet("allVillains/{id}")]
        public Villains getVillainById(int id)
        {
            return context.Villains.Find(id);


        }
    }
}
