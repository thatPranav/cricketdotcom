import MatchCard from "./MatchCard.component";

const SeriesName = ({ series }) => {
  console.log(series);
  return (
    <>
      <div className="bg-gray-700 text-white h-9 flex items-center justify-between p-2">
        <div className="flex gap-3">
          <div className="bg-red-600 rounded text-xs p-1">{series.league}</div>
          <div className="text-sm">{series.seriesName}</div>
        </div>
        <div className="text-green-700 font-bold text-lg cursor-pointer">
          &gt;
        </div>
      </div>
      <div className="flex gap-3 overflow-auto">
        {series.matches.map((match) => {
          return <MatchCard key={match.matchID} match={match} />;
        })}
      </div>
    </>
  );
};

export default SeriesName;
