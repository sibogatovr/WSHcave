using Microsoft.EntityFrameworkCore;
using OvechkinCounter.Data;
using OvechkinCounter.Models;

namespace OvechkinCounter.Services
{
    public class NewsService(NewsContext context) : INewsService
    {
        public async Task<IEnumerable<News>> GetNews()
        {
            return await context.News.ToListAsync();
        }
        
        public async Task<News> GetNews(int id)
        {
            return await context.News.FindAsync(id);
        }
        
        public async Task<News> PostNews(News news)
        {
            context.News.Add(news);
            await context.SaveChangesAsync();
            return news;
        }
        
        public async Task<bool> PutNews(int id, News news)
        {
            if (id != news.Id)
                return false;

            context.Entry(news).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return true;
        }
        
        public async Task<bool> DeleteNews(int id)
        {
            var news = await context.News.FindAsync(id);
            if (news == null)
                return false;

            context.News.Remove(news);
            await context.SaveChangesAsync();
            return true;
        }
    }
}