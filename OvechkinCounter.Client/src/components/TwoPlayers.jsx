export default function TwoPlayers( { playerInfo }){
    return (
        <div className="ml-100 text-white mb-5">
        <div>
          
          <div className="flex items-center space-x-4 mt-2">
            <img src="/src/assets/EDM.png" alt="NHL" className="w-16 h-auto" />
            <div className="flex justify-between gap-4">
              <div>Wayne Gretzky</div>
              <div>894</div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src="/src/assets/capitals.svg"
              alt="WSH Team"
              className="w-16 h-auto"
            />
            <div className="flex justify-between gap-4">
              <div>
                {playerInfo?.firstName?.default} {playerInfo?.lastName?.default}
              </div>
              <div>{playerInfo?.careerTotals?.regularSeason?.goals}</div>
            </div>
          </div>
        </div>
        </div>
    );
}