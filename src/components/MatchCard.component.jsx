import { useContext } from "react";
import { StatusContext } from "../App";

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return (
    date.getMonth() +
    1 +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    " " +
    strTime
  );
}

const MatchCard = ({ match }) => {
  const { status } = useContext(StatusContext);
  return (
    <div className="p-2 max-w-sm rounded overflow-hidden shadow-lg bg-gray-700 min-w-[20rem]">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div>
            <div className="flex items-center text-sm text-slate-300">
              {match.matchNumber}
            </div>
            <div className="flex text-slate-300">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>
              <div className="text-xs text-slate-300">{match.venue}</div>
            </div>
          </div>
          <span className="uppercase h-1/2 p-2 border border-blue-300 rounded-full text-blue-300 bg-slate-500 font-semibold text-sm flex items-center cursor-pointer">
            &#x2022; {status}
          </span>
        </div>
        <div className="flex justify-center items-center w-8 h-8 bg-gray-800 rounded">
          <span className="relative inline-block text-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bell"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="flex justify-between bg-gray-800 text-white text-sm text-center my-4 p-1 rounded">
        <div>{match.homeTeamName}</div>
        <span className="h-1 p-2 border border-green-700 rounded-full text-green-700 bg-gray-900 font-semibold text-sm flex items-center cursor-pointer">
          {match.matchType}
        </span>
        <div>{match.awayTeamName}</div>
      </div>
      <div className="bg-gray-800 text-white text-sm text-center my-4 p-1 rounded">
        {new Intl.DateTimeFormat("en-GB", {
          dateStyle: "medium",
          timeStyle: "short",
          hourCycle: "h12",
        }).format(new Date(match.matchdate))}
      </div>
      <div>
        <div className="text-white text-sm">Win percentage</div>
        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className={`w-[${
              match.teamsWinProbability.homeTeamPercentage || 54
            }%] bg-green-600 h-2 rounded`}
          ></div>
        </div>
        <div className="flex text-xs text-white justify-between">
          <div>
            <span className="text-green-600">&#x2022;</span>
            {match.homeTeamName}
            {match.teamsWinProbability.homeTeamPercentage &&
              " " + match.teamsWinProbability.homeTeamPercentage + "%"}
          </div>
          <div>
            <span className="text-green-600">&#x2022;</span>
            {match.awayTeamName}
            {match.teamsWinProbability.awayTeamPercentage &&
              " " + match.teamsWinProbability.awayTeamPercentage + "%"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
