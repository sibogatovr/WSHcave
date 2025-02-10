import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleGame() {
    const { id } = useParams();
    const [gameData, setGameData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGameStory = async () => {
            try {
                const response = await axios.get(`http://localhost:5228/api/Nhl/games/story/${id}`);
                console.log("Ответ API:", response.data);
                setGameData(response.data);
            } catch (e) {
                console.error("Ошибка API:", e);
                setError("Ошибка загрузки данных");
            } finally {
                setLoading(false);
            }
        };

        fetchGameStory();
    }, [id]);

    if (loading) return <p className="text-center">Загрузка...</p>;
    if (error) return <p className="text-red-500 text-center">{error}</p>;

    return (
        <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-center">
                🏒 {gameData?.awayTeam?.name.default || "Неизвестная команда"} vs {gameData?.homeTeam?.name.default || "Неизвестная команда"}
            </h1>
            <p className="text-gray-600 text-center">📅 {new Date(gameData?.gameDate).toLocaleDateString()}</p>
            <p className="text-gray-600 text-center">
                ⏰ {new Date(gameData?.startTimeUTC).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} UTC
            </p>
            <p className="mt-4 text-gray-800">{typeof gameData?.story === "string" ? gameData.story : JSON.stringify(gameData?.story)}</p>
        </div>
    );
}
