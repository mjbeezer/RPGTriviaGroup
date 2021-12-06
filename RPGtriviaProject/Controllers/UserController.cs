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
            return context.Players.Include(P => P.AvatarImageNavigation).Include(P => P.TitleNavigation).ToList().Find(P => P.Id == id);


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

        [HttpGet("heroById/${id}")]
        public Heroes getPlayerHero(int id)
        {
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            Players result = context.Players.Where(P => P.UserId == U).Include(P => P.Heroes).First();
            Heroes currentHero = result.Heroes.First(H => H.Id == id);
            return currentHero;
        }


        [HttpPost("createUserHero")]
       
        public Heroes addHero(string name, int heroClass)
        {
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            //add authorization to front end for loggen in users to add events
            int ID = context.Players.ToList().Find(P => P.UserId == U).Id;
            Heroes newHero = new Heroes() { Name = name, HeroClass = heroClass, UserId = ID};
            this.context.Heroes.Add(newHero);
            this.context.SaveChanges();
            return newHero;
        }

        [HttpDelete("deleteUserHero")]
        public Heroes deleteHero(int id)
        {
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            Heroes result = context.Heroes.Find(id);
            this.context.Heroes.Remove(result);
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
