using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RPGtriviaProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace RPGtriviaProject.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {   
        TriviaDBContext context = new TriviaDBContext();

        [HttpGet("players")]
        public List<Players> playerRankings()
        {
            return context.Players.OrderByDescending(x => x.GamesWon).ToList();
            
        }

        [HttpGet("players/{id}")]
        public Players getPlayerById(int id)
        {
            return context.Players.Find(id);


        }
        
        [HttpGet("allUserHeroes")]
        public List<Heroes> displayAllUserHeroes()
        {
            //grab current logged in user
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            //UserId matches long string of gibberish. Need to return all heroes of given player

            Players result = context.Players.Where(P => P.UserId == U).Include(P => P.Heroes).First();
            return result.Heroes.ToList();

            //return context.Players.Heroes.Where(P => P.UserId == U).ToList();
        }




        [HttpPost("createUserHero")]
       
        public Heroes addHero(string name, int heroClass)
        {
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            //add authorization to front end for loggen in users to add events
            Heroes newHero = new Heroes() { Name = name, HeroClass = heroClass, };
            
            this.context.SaveChanges();
            return newHero;
        }

        [HttpDelete("deleteUserHero")]
        public Heroes deleteHero(int id)
        {
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            Heroes result = context.Heroes.Find(id);
            this.context.Remove(result);
            this.context.SaveChanges();
            return result;

        }

        [HttpPatch("updateUserTitle")]
        public Players updateUserTitle(int id, int title)
        {   
            Players result = context.Players.Find(id);
            result.Title = title;
            this.context.SaveChanges();
            return result;

        }


             





    }
}
