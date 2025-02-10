using System.Text.Json.Nodes;

namespace OvechkinCounter.Services;

public interface INhlService
{
    Task<JsonObject?> GetPlayerInfoAsync(int playerId);
    Task<JsonObject?> GetTeamScheduleAsync(string teamAbbrev);
    Task<JsonObject?> GetGameStoryAsync(int gameId);
}