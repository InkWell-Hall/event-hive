import Navbar from "../components/Navbar";

export default function CreateEvent() {
    return (
        <>
            <Navbar />
            <section className="bg-gray-100">
                <h1 className=" flex text-3xl font-bold items-center justify-center py-4">Create Event</h1>
                <form action="">
                    <div className="flex flex-col justify-around items-center">
                        <div>
                            <p className="text-xs font-bold mt-10">Event Title</p>
                            <input type="text" className="h-10 w-165 bg-white text-xs rounded-md px-2"
                                name="title"
                                placeholder="Enter event title"
                            />
                        </div>
                        <div>
                            <p className="text-xs font-bold mt-10">Event Venue</p>
                            <input type="text" className="h-10 w-165 bg-white text-xs rounded-md px-2"
                                name="text"
                                placeholder="Enter event venue" />
                        </div>
                        <div className="flex space-x-10">
                            <div>
                                <p className="text-xs font-bold mt-10">Start time</p>
                                <input type="text" className="h-10 w-78 bg-white text-xs rounded-md px-2"
                                    name="text"
                                    placeholder="Enter start time"
                                />
                            </div>
                            <div>
                                <p className="text-xs font-bold mt-10">End time</p>
                                <input type="text" className="h-10 w-78 bg-white text-xs rounded-md px-2"
                                    name="text"
                                    placeholder="Enter end time"
                                />
                            </div>
                        </div>
                        <div className="flex space-x-10">
                            <div>
                                <p className="text-xs font-bold mt-10">Start date</p>
                                <input type="text" className="h-10 w-78 bg-white text-xs rounded-md px-2"
                                    name="text"
                                    placeholder="Enter start date"
                                />
                            </div>
                            <div>
                                <p className="text-xs font-bold mt-10">End date</p>
                                <input type="text" className="h-10 w-78 bg-white text-xs rounded-md px-2"
                                    name="text"
                                    placeholder="Enter end date"
                                />
                            </div>
                        </div>
                        <div className="w-[700px] mx-auto ">
                            <h1 className="font-bold text-3xl py-20 flex justify-around items-center">Event Description</h1>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1 ">Event Image</label>
                                <input type="file" id="eventImageUpload" className="hidden" />
                                <label
                                    htmlFor="eventImageUpload"
                                    className="cursor-pointer w-170 flex items-center bg-gray-200 justify-center h-[200px] px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ">
                                </label>

                            </div>
                        </div>
                        <div className="w-[700px] mx-auto ">
                            <label htmlFor="event-Desciption" className="block text-sm font-medium text-gray-700 mb-1">Event Description</label>
                            <textarea id="eventDescription"
                                rows="5"
                                placeholder="Type here"
                                className="mt-1 block w-170 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder-gray-400">
                            </textarea>
                        </div>
                    </div>
                </form>



                <div className="flex justify-around items-center py-10">
                    <button className="h-10 w-170 rounded-md text-white bg-primary">Create Event</button>
                </div>
            </section>
        </>
    );
}