using Microsoft.AspNetCore.Mvc;
using OvechkinCounter.Models;

namespace OvechkinCounter.Services;

public interface INewsService
{
    Task<IEnumerable<News>> GetNews();
    Task<News> GetNews(int id);
    Task<News> PostNews(News news);
    Task<bool> PutNews(int id, News news);
    Task<bool> DeleteNews(int id);
}