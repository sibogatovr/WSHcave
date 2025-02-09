using Microsoft.AspNetCore.Mvc;
using OvechkinCounter.Models;
using OvechkinCounter.Services;

namespace OvechkinCounter.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsController(INewsService newsService) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<News>>> GetNews()
    {
        var news = await newsService.GetNews();
        return Ok(news);
    }
    
    [HttpGet("{id}")]
    public async Task<ActionResult<News>> GetNews(int id)
    {
        var news = await newsService.GetNews(id);
        return Ok(news);
    }
    
    [HttpPost]
    public async Task<ActionResult<News>> PostNews(News news)
    {
        var createdNews = await newsService.PostNews(news);
        return CreatedAtAction(nameof(GetNews), new { id = createdNews.Id }, createdNews);
    }
    
    [HttpPut("{id}")]
    public async Task<IActionResult> PutNews(int id, News news)
    {
        var success = await newsService.PutNews(id, news);
        if (!success)
        {
            return BadRequest();
        }
        return NoContent();
    }
    
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteNews(int id)
    {
        var success = await newsService.DeleteNews(id);
        if (!success)
        {
            return NotFound();
        }
        return NoContent();
    }
}