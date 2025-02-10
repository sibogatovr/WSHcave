export default function ({ playerInfo, teamSchedule }) {
  if (!playerInfo || !playerInfo.featuredStats || !teamSchedule || !teamSchedule.games) {
    return <div className="text-white text-center p-6">Loading stats...</div>;
  }

  const regularSeason = playerInfo.featuredStats?.regularSeason?.subSeason;

  const sortedGames = [...teamSchedule.games].sort((a, b) => new Date(a.gameDate) - new Date(b.gameDate));
  const nextGame = sortedGames.find(g => new Date(g.gameDate) > new Date());
  const gameNumber = nextGame ? sortedGames.findIndex(g => g.id === nextGame.id) + 1 : 0;

  if (!regularSeason) {
    return <div className="text-white text-center p-6">No data available</div>;
  }
  return (
    <dl className="bg-black shadow-lg sm:grid sm:grid-cols-3 text-white">
      <div className="flex flex-col border-b border-gray-900 p-6 text-center sm:border-0 sm:border-r">
        <dt className="order-2 mt-2 text-lg leading-6 font-medium">
          Goals per game in 24/25 season
        </dt>
        <dd className="order-1 text-5xl font-extrabold">
          {(regularSeason.goals / regularSeason.gamesPlayed).toFixed(3)}
        </dd>
      </div>
      <div className="flex flex-col border-t border-b border-gray-900 p-6 text-center sm:border-0 sm:border-l sm:border-r">
        <dt className="order-2 mt-2 text-lg leading-6 font-medium">
          Games left
        </dt>
        <dd className="order-1 text-5xl font-extrabold">
          {82 - (gameNumber - 6)}
        </dd>
      </div>
      <div className="flex flex-col border-t border-gray-900 p-6 text-center sm:border-0 sm:border-l">
        <dt className="order-2 mt-2 text-lg leading-6 font-medium">
          Games needed
        </dt>
        <dd className="order-1 text-5xl font-extrabold">
          {(
            (playerInfo.careerTotals?.regularSeason?.goals !== undefined
              ? 894 - playerInfo.careerTotals.regularSeason.goals
              : "Loading...") /
            (regularSeason.goals / regularSeason.gamesPlayed)
          ).toFixed(2)}
        </dd>
      </div>
    </dl>
  );
}
