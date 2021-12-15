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
    public class TriviaController : ControllerBase
    {

        TriviaDBContext context = new TriviaDBContext();
        //generate one villain based on difficulty and round number
        [HttpGet("easyVillain")]
        public Villains easyVillain()
        {
            Random rnd = new Random();
            Villains enemy = new Villains();
            int villainID = rnd.Next(1, 3);
            enemy = context.Villains.Include(V => V.ImageNavigation).ToList().Find(V => V.Id == villainID);
            return enemy;
        }


        [HttpGet("mediumVillain")]
        public Villains mediumVillain()
        {
            Random rnd = new Random();
            Villains enemy = new Villains();
            int villainID = rnd.Next(3, 5);
            enemy = context.Villains.Include(V => V.ImageNavigation).ToList().Find(V => V.Id == villainID);
            return enemy;
        }
        [HttpGet("hardVillain")]
        public Villains hardVillain()
        {
            Random rnd = new Random();
            Villains enemy = new Villains();
            int villainID = rnd.Next(5, 9);
            if(villainID == 7)
            {
                villainID = 9;
            }
            else if(villainID == 8)
            {
                villainID = 10;
            }
            enemy = context.Villains.Include(V => V.ImageNavigation).ToList().Find(V => V.Id == villainID);
            return enemy;
        }

        [HttpGet("bossVillain")]
        public Villains bossVillain()
        {
            Random rnd = new Random();
            Villains enemy = new Villains();
            int villainID = rnd.Next(7, 9);
            enemy = context.Villains.Include(V => V.ImageNavigation).ToList().Find(V => V.Id == villainID);
            return enemy;
        }

       
      


        //track user response
        //if reponse is correct deal damage to villain -- else deal damage to hero 
        // track damage delt to villains health points -- track damage delt to hero hp
        //if villain health and hero health is greater than zero ask another question 
        //if villain health points < = 0 round passed -- if hero health is < 0 GAME OVER BITCH

        //write alive bool

        //generate random boss
        //if boss is dragon set player health to 1 and generate 1 med questions -- if answer is correct generate one medium question -- else get merked
        //if boss == J-Money generate one hard question -- no matter what get merked










    }
}
