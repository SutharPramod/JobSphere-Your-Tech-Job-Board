import { Bookmark } from "lucide-react";

function Card({ id, companyName, daysAgo, jobTitle, companyImgSrc, salary, location, jobType, savedJobs, toggleSave , onApply}) {
  const isSaved = savedJobs.includes(id);

  return (
    <div className="w-full max-w-sm rounded-2xl bg-[#1A1A1D] p-5 text-white shadow-lg transition hover:scale-[1.02]">
      
      {/* Top */}
      <div className="flex items-center justify-between">
        <img
          src={companyImgSrc}
          alt={`${companyName} logo`}
          className="h-10 w-10 rounded-md object-contain"
        />
        <button
          onClick={() => toggleSave(id)}
          className={`flex items-center gap-1 text-xs ${isSaved ? "text-green-400" : "text-gray-400"} hover:text-white cursor-pointer`}
        >
          {isSaved ? "Saved" : "Save"} <Bookmark size={14} />
        </button>
      </div>

      {/* Center */}
      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-medium">
          {companyName}
          <span className="ml-2 text-xs text-gray-400">{daysAgo} days ago</span>
        </h3>

        <p className="text-lg font-semibold">{jobTitle}</p>

        <div className="flex gap-2">
          {jobType.map((type, index) => (
            <span key={index} className="rounded-full bg-[#3B1C32] px-3 py-1 text-xs">
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm font-medium">
          {salary}
          <span className="ml-2 text-xs text-gray-400">{location}</span>
        </p>
        <button className="rounded-xl bg-[#A64D79] px-4 py-2 text-sm font-medium transition hover:bg-[#6A1E55] cursor-pointer"
         onClick={onApply}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Card;
