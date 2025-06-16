import EventCard from "./EventCard";
import React from "react";

export default function CollegeEvents() {
    return (
        <div className="min-h-screen bg-gray-50 px-10 py-10">
            <h2 className="text-3xl font-semibold mb-8">
                College <span className="text-[#7848F4]">Events</span>
            </h2>

            <div className="grid grid-cols-3 gap-5">
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <EventCard key={n} />
                    ))}
                  </div>
        </div>
    );
}