import { useEffect, useState } from "react";
import { fetchTeamSchedule } from "../services/Nhl";


export default function Schedule() {
    const [teamSchedule, setTeamSchedule] = useState(null);
    const teamAbbrev = "WSH";

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

    return (
        <div>
            {teamSchedule ? <pre>{JSON.stringify(teamSchedule, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
}
