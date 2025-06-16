export default function EventCard() {
  return (
    <div className=" w-98  h-100 bg-white px-5 py-5 rounded-[10px] relative  ">
      <button className="w-13 font-bold cursor-pointer h-5.5 flex items-center justify-center rounded-[5px] py-1.5 px-2.5 text-[#7848F4] text-label absolute top-8 left-6 bg-white">
        FREE
      </button>
      <img
        src={
          "https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnRzfGVufDB8fDB8fHww"
        }
        alt="Event Card"
        className="h-60 w-88 rounded-[5px]"
      />
      <h1 className="text-body-text font-bold sans mt-3 mb-3 ">
        BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow
      </h1>
      <h2 className="text-[#7848F4] text-paragraph mb-4">
        Saturdat, March 18, 9.30PM
      </h2>
      <h3>ONLINE EVENT - Attend anywhere</h3>
    </div>
  );
}
