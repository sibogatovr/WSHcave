import UpcomingGame from "./UpcomingGame";

export default function ImageBlock({ playerInfo, teamSchedule }) {

  const upcomingGame = teamSchedule?.games?.find((game) => {
    const gameDate = new Date(game.gameDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return gameDate >= today;
  });

  return (
    <>
       <div className="flex justify-center text-white">
        {upcomingGame && <UpcomingGame game={upcomingGame} allGames={teamSchedule.games} />}
      </div>
     
      <div className="relative flex justify-center">
        <img src="/src/assets/Puck.png" alt="" className="w-100 w-100" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-9xl">
          {playerInfo &&
          playerInfo.careerTotals?.regularSeason?.goals !== undefined
            ? 894 - playerInfo.careerTotals.regularSeason.goals
            : "Loading..."}
        </div>
      </div>
    </>
  );
}
