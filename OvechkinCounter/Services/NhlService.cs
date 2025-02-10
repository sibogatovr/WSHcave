using System.Text.Json.Nodes;

namespace OvechkinCounter.Services;

public class NhlService(HttpClient httpClient) : INhlService
{
    private readonly string _baseUri = "https://api-web.nhle.com/v1/";

    public async Task<JsonObject?> GetPlayerInfoAsync(int playerId)
    {
        var url = $"{_baseUri}player/{playerId}/landing";
        var response = await httpClient.GetAsync(url);

        if (!response.IsSuccessStatusCode)
            return null;
        
        var content = await response.Content.ReadAsStringAsync();
        return JsonNode.Parse(content) as JsonObject;
    }

    public async Task<JsonObject?> GetTeamScheduleAsync(string teamAbbrev)
    {
        var url = $"{_baseUri}club-schedule-season/{teamAbbrev}/now";
        var response = await httpClient.GetAsync(url);
        
        if (!response.IsSuccessStatusCode)
            return null;
        
        var content = await response.Content.ReadAsStringAsync();
        return JsonNode.Parse(content) as JsonObject;
    }

    public async Task<JsonObject?> GetGameStoryAsync(int gameId)
    {
        var url = $"{_baseUri}wsc/game-story/{gameId}";
        var response = await httpClient.GetAsync(url);

        if (!response.IsSuccessStatusCode)
            return null;
        
        var content = await response.Content.ReadAsStringAsync();
        return JsonNode.Parse(content) as JsonObject;
    }
}