import axios from "axios";

const apiBaseUrl = "http://localhost:5228/api/nhl";

export const fetchPlayerInfo = async (playerId) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/players/${playerId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching player info:", error);
    throw error;
  }
};

export const fetchTeamSchedule = async (teamAbbrev) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/schedule/${teamAbbrev}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching team schedule:", error);
    throw error;
  }
};

export const fetchNews = async () => {
  try {
    const response = await axios.get("http://localhost:5228/api/news");
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export const fetchGameStory = async (gameId) => {
  try{
    const response = await axios.get(`http://localhost:5228/api/Nhl/games/story/${gameId}`);
    return response.data;
  }
  catch(e)
  {
    console.log('error');
  }
};
