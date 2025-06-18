import { imageBaseUrl } from "../api/client";
import button from "../assets/images/Button.png";
import star from "../assets/images/star.png";

export default function CollegeCard({college}) {
  return (
    <div className=" w-98 h-124 bg-white rounded-[10px] relative">
      <div>
        <img
          src={`${imageBaseUrl}/${college.image}`}
          alt={college.name}
          className="rounded-[10px] w-97 h-83"
        />
        <div className="flex justify-between items-center absolute w-full bottom-43 p-2 ">
          <button className="flex bg-white w-22 h-10 items-center py-2.5 px-5 justify-center rounded-[20px] cursor-pointer">
            <img src={star} alt="" className="w-4 h-4" />
            4.5
          </button>
          <button className=" w-28 h-11 bg-black text-[14px] text-white px-2.5 py-4 flex items-center cursor-pointer justify-center rounded-[20px] ">
            Exclusive
          </button>
        </div>
      </div>
      <div className="py-9 px-7 flex flex-col gap-5">
        <h1 className="text-heading font-bold">{college.name}</h1>

        <div className="flex justify-between items-center">
          <h2 className="text-[14px] font-medium">
            {college.location}
          </h2>
          {/* <span className="bg-[#F2F2F2] w-12.5 h-9 flex justify-center items-center rounded-[50px] p-10:">
            ...
          </span> */}
          <img src={button} alt="" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
