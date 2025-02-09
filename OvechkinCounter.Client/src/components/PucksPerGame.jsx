export default function ({ playerInfo }) {
  if (!playerInfo || !playerInfo.featuredStats) {
    return <div className="text-white text-center p-6">Loading stats...</div>;
  }

  const regularSeason = playerInfo.featuredStats?.regularSeason?.subSeason;

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
          {82 - regularSeason.gamesPlayed}
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
