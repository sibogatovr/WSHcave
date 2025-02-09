using Microsoft.EntityFrameworkCore;
using OvechkinCounter.Models;

namespace OvechkinCounter.Data;

public class NewsContext(DbContextOptions<NewsContext> options) : DbContext(options)
{
    public DbSet<News> News { get; set; }
}