import EventCard from "./EventCard";

export default function UpcomingEvents() {
  return (
    <section className="mt-20 w-[90%] mx-auto">
      <div>
        <h1 className="text-[36px] mb-4 font-bold">
          <span>Upcoming</span>
          <span className="text-[#7848F4] ml-2">Events</span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <EventCard key={n} />
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
