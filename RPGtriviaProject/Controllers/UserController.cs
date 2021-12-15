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

        [HttpGet("registerUser")]
        public Players registerUser(string user_Name, int avatar_Image, string avatar_Color, int title)
        {
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            Players newPlayer = new Players() { UserId = U, GamesWon = 0, UserName = user_Name, AvatarImage = avatar_Image, AvatarColor = avatar_Color, Title = title };
            this.context.Players.Add(newPlayer);
            this.context.SaveChanges();
            return newPlayer;

        }

        [HttpGet("getImages")]
        public List<Images> getAvatarImages()
        {
            return context.Images.ToList();
        }

        [HttpGet("players")]
        public List<Players> playerRankings()
        {
            //return context.Players.Heroes.Where(P => P.UserId == U).ToList();
            return context.Players.Include(P => P.AvatarImageNavigation).Include(P => P.TitleNavigation).OrderByDescending(x => x.GamesWon).ToList();


        }

        [HttpGet("players/{id}")]
        public Players getPlayerById(int id)
        {
            return context.Players.Include(P => P.AvatarImageNavigation).Include(P => P.TitleNavigation).ToList().Find(P => P.Id == id);


        }
        [HttpGet("currentPlayer")]
        public Players getCurrentPlayer()
        {
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            try 
            {
                Players result = context.Players.Where(P => P.UserId == U).Include(P => P.AvatarImageNavigation).Include(P => P.TitleNavigation).First();
                return result;
            }
            catch(Exception e)
            {
                return null;
            }
            
        }

        [HttpGet("allUserHeroes")]
        public List<Heroes> displayAllUserHeroes()
        {
            //grab current logged in user
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            //UserId matches long string of gibberish. Need to return all heroes of given player
            try
            {
                Players result = context.Players.Where(P => P.UserId == U).Include("Heroes.HeroClassNavigation.ImageNavigation").First();
                return result.Heroes.ToList();
            }
            catch(Exception e)
            {
                return null;
            }
            

            //return context.Players.Heroes.Where(P => P.UserId == U).ToList();
        }

        [HttpGet("heroById/{id}")]
        public Heroes getPlayerHero(int id)
        {
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            Players result = context.Players.Where(P => P.UserId == U).Include(P => P.Heroes).First();
            //Heroes currentHero = result.Heroes.Include(H => H.HeroClassNavigation).First(H => H.Id == id);
            Heroes currentHero = context.Heroes.Where(H => H.UserId == result.Id && H.Id == id).Include(H => H.HeroClassNavigation.ImageNavigation).First();
            return currentHero;
        }


        [HttpPost("createUserHero")]

        public Heroes addHero(string name, int heroClass)
        {
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            int ID = context.Players.ToList().Find(P => P.UserId == U).Id;
            Heroes newHero = new Heroes() { Name = name, HeroClass = heroClass, UserId = ID };
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

        [HttpDelete("deletePlayer/{id}")]
        public Players deletePLayerProfile(int id)
        {
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            Players result = context.Players.Where(P => P.UserId == U).Include(P => P.Heroes).First();
            context.Players.Remove(result);
            context.SaveChanges();
            return result;
        }

        [HttpPatch("updateUserTitle")]
        public Players updateUserTitle(int title)
        {
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            Players result = context.Players.Where(P => P.UserId == U).Include(P => P.TitleNavigation).First();
            result.Title = title;
            this.context.SaveChanges();
            return result;

        }

        [HttpPatch("updateGamesWon")]
        public Players updateGamesWon()
        {
            string U = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            Players result = context.Players.Where(P => P.UserId == U).First();
            result.GamesWon++;
            this.context.SaveChanges();
            return result;
        }
    }
}
