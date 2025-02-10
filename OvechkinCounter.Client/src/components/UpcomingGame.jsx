import React from "react";
import { Link } from "react-router-dom";

const UpcomingGame = ({ game, allGames }) => {
   const sortedGames = [...allGames].sort((a, b) => new Date(a.gameDate) - new Date(b.gameDate));
   const gameNumber = sortedGames.findIndex(g => g.id === game.id) + 1;

  const gameDate = new Date(game.gameDate);
  const startTime = new Date(game.startTimeUTC);

  return (
    <div key={game.gamePk} className="p-2">
      <Link to={`/game/${game.id}`}>
      
      <p># {gameNumber - 6} / 82</p>
      <p>
        🏒 {game.awayTeam.abbrev} vs {game.homeTeam.abbrev}
      </p>
      <p>📅 {gameDate.toLocaleDateString()}</p>
      <p>
        ⏰{" "}
        {startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}{" "}
        ({startTime.toISOString().slice(11, 16)} UTC)
      </p>

      </Link>
      
    </div>
  );
};

export default UpcomingGame;
