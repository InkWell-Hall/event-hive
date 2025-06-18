import CollegeCard from "./CollegeCard";
import useSWR from "swr";
import { apifetcher } from "../api/client";
import { ClipLoader } from "react-spinners";

export default function TrendingColleges() { 
  const { data, error, isLoading } = useSWR("/colleges?limit=3&skip=3", apifetcher);
  console.log(data);

  if (isLoading){
    return (
      <div className="flex justify-center items-center mt-40">
        <ClipLoader size={50} />
      </div>
    );
  }
  return (
    <section className="mt-20 w-[90%] mx-auto">
      <h1 className="text-[36px] mb-4 font-bold ">
        <span>Trending </span>
        <span className="text-[#7848F4] ml-1">colleges</span>
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {data.data.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
      <div className="text-center">
        <button className=" cursor-pointer w-32 whitespace-nowrap h-13 py-4 px-5 text-body-text font-bold bg-[#7848F4] text-white mt-8 rounded-[5px]">
          Load more...
        </button>
      </div>
    </section>
  );
}
