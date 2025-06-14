import CollegeCard from "./CollegeCard";

export default function TrendingColleges() {
  return (
    <section className="mt-20 w-[90%] mx-auto">
      <h1 className="text-[36px] mb-4 font-bold ">
        <span>Trending </span>
        <span className="text-[#7848F4] ml-1">colleges</span>
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {[1, 2, 3].map((n) => (
          <CollegeCard key={n} />
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
