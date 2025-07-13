var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS services
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev", policy =>
    {
        policy.WithOrigins("http://localhost:4200") // Angular dev server
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Use CORS
app.UseCors("AllowAngularDev");

app.UseHttpsRedirection();

var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast =  Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast")
.WithOpenApi();

// Additional example endpoints
app.MapGet("/api/hello", () => new { Message = "Hello from .NET 8 API!", Timestamp = DateTime.UtcNow })
.WithName("GetHello")
.WithOpenApi();

app.MapGet("/api/users", () => new[]
{
    new User(1, "John Doe", "john@example.com"),
    new User(2, "Jane Smith", "jane@example.com"),
    new User(3, "Bob Wilson", "bob@example.com")
})
.WithName("GetUsers")
.WithOpenApi();

app.MapGet("/api/users/{id}", (int id) =>
{
    var users = new[]
    {
        new User(1, "John Doe", "john@example.com"),
        new User(2, "Jane Smith", "jane@example.com"),
        new User(3, "Bob Wilson", "bob@example.com")
    };
    
    var user = users.FirstOrDefault(u => u.Id == id);
    return user is not null ? Results.Ok(user) : Results.NotFound();
})
.WithName("GetUserById")
.WithOpenApi();

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}

record User(int Id, string Name, string Email);
