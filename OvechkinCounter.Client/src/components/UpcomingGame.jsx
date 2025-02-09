import React from "react";

const UpcomingGame = ({ game }) => {
  const gameDate = new Date(game.gameDate);
  const startTime = new Date(game.startTimeUTC);

  return (
    <div key={game.gamePk} className="p-2">
      <p>
        🏒 {game.awayTeam.abbrev} vs {game.homeTeam.abbrev}
      </p>
      <p>📅 {gameDate.toLocaleDateString()}</p>
      <p>
        ⏰{" "}
        {startTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}{" "}
        ({startTime.toISOString().slice(11, 16)} UTC)
      </p>
    </div>
  );
};

export default UpcomingGame;
