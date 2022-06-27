import SeriesName from "./SeriesName.component";
import { useQuery, gql } from "@apollo/client";
import { useContext, useState } from "react";
import { StatusContext } from "../App";

const Home = () => {
  const [type, setType] = useState("All");
  const { status, setStatus } = useContext(StatusContext);
  const EXCHANGE_RATES = gql`
  query schedule {
    newSchedule(type: "${type}", status: "${status}", page: 1) {
      matches {
        matchNumber
        matchID
        matchdate
        matchType
        matchName
        venue
        homeTeamName
        awayTeamName
        teamsWinProbability {
          tiePercentage
          homeTeamPercentage
          awayTeamPercentage
        }
        matchScore {
          teamScore {
            runsScored
          }
        }
      }
      seriesID
      matchType
      seriesName
      seriesView
      league
      seriesAvailable
    }
  }
`;
  const { data, loading, error } = useQuery(EXCHANGE_RATES, {
    variables: {
      type,
    },
  });
  if (error) {
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <div>LOADING</div>;
  }
  return (
    <>
      <header className="bg-gray-700 text-white text-center fixed w-screen">
        <div className="flex justify-around h-full cursor-pointer">
          <div
            className={`w-1/3 ${
              status === "upcoming" && "border-b text-blue-300 border-blue-300"
            }`}
            onClick={() => setStatus("upcoming")}
          >
            Upcoming
          </div>
          <div
            className={`w-1/3 ${
              status === "live" && "border-b text-blue-300 border-blue-300"
            }`}
            onClick={() => setStatus("live")}
          >
            Live
          </div>
          <div
            className={`w-1/3 ${
              status === "completed" && "border-b text-blue-300 border-blue-300"
            }`}
            onClick={() => setStatus("completed")}
          >
            Results
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-3 bg-gray-900 p-2 min-h-[100vh]">
        <div className="flex justify-center mt-14">
          <div className="text-white flex justify-around w-3/4 bg-gray-700 rounded-full p-3">
            <div
              className={`border rounded-full px-2 text-center cursor-pointer ${
                type === "All" && "border-green-700"
              }`}
              onClick={() => setType("All")}
            >
              All
            </div>
            <div
              className="border rounded-full px-2 text-center cursor-pointer"
              onClick={() => setType("International")}
            >
              International
            </div>
            <div
              className="border rounded-full px-2 text-center cursor-pointer"
              onClick={() => setType("Domestic")}
            >
              Domestic
            </div>
          </div>
        </div>
        {data.newSchedule.map((series) => {
          return <SeriesName series={series} />;
        })}
      </div>
    </>
  );
};

export default Home;
