import { useEffect, useState } from "react";
import { fetchPlayerInfo } from "../services/Nhl";
import { fetchTeamSchedule } from "../services/Nhl";
import { fetchNews } from "../services/News";
import ImageBlock from "/src/components/ImageBlock";
import BrandStack from "/src/components/BrandStack";
import TwoPlayers from "/src/components/TwoPlayers";
import PucksPerGame from "/src/components/PucksPerGame";
import NewsSlider from "/src/components/NewsSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [news, setNews] = useState([]);
  const [playerInfo, setPlayerInfo] = useState(null);
  const [teamSchedule, setTeamSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const teamAbbrev = "WSH";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchPlayerInfo(8471214);
        setPlayerInfo(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const scheduleData = await fetchTeamSchedule(teamAbbrev);
        setTeamSchedule(scheduleData);
      } catch (error) {
        console.error("Error fetching team schedule:", error);
      }
    };

    fetchSchedule();
  }, [teamAbbrev]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const newsData = await fetchNews();
        setNews(newsData);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 grid-background-custom">
        <ImageBlock playerInfo={playerInfo} teamSchedule={teamSchedule} />
        <BrandStack />
        <TwoPlayers playerInfo={playerInfo} />
      </div>
      <PucksPerGame playerInfo={playerInfo} teamSchedule={teamSchedule}/>
      <NewsSlider news={news} />
      
    </>
  );
};

export default Home;
