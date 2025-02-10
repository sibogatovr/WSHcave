using Microsoft.AspNetCore.Mvc;
using OvechkinCounter.Services;

namespace OvechkinCounter.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NhlController(INhlService nhlService) : Controller
{
    [HttpGet("players/{playerId:int}")]
    public async Task<IActionResult> GetPlayerInfo(int playerId)
    {
        var playerData = await nhlService.GetPlayerInfoAsync(playerId);
        if (playerData == null)
            return NotFound();
        
        return Ok(playerData);
    }

    [HttpGet("schedule/{teamAbbrev}")]
    public async Task<IActionResult> GetTeamSchedule(string teamAbbrev)
    {
        var teamData = await nhlService.GetTeamScheduleAsync(teamAbbrev);
        if (teamData == null)
            return NotFound();
        
        return Ok(teamData);
    }

    [HttpGet("games/story/{storyId:int}")]
    public async Task<IActionResult> GetGamesStory(int storyId)
    {
        var gameStoryData = await nhlService.GetGameStoryAsync(storyId);
        if (gameStoryData == null)
            return NotFound();
        
        return Ok(gameStoryData);
    }
}