using Microsoft.EntityFrameworkCore;
using OvechkinCounter.Data;
using OvechkinCounter.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<NewsContext>(options =>
    options.UseNpgsql("Host=localhost;Port=5432;Database=wsh-db;Username=admin;Password=pX4xNqW2025"));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

builder.Services.AddTransient<INhlService, NhlService>();
builder.Services.AddTransient<INewsService, NewsService>();
builder.Services.AddHttpClient<NhlService>();

var app = builder.Build();
app.UseCors("AllowAllOrigins");

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();

app.Run();
