import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroWithFilter from "../components/HeroWithFilter";
import UpcomingEvents from "../components/UpcomingEvents";
import TrendingColleges from "../components/TrendingColleges";
import OurBlogs from "../components/OurBlogs";
import sit from "../assets/images/banner.png";
import spotify from "../assets/images/spotify.png";
import google from "../assets/images/google.png";
import stripe from "../assets/images/stripe.png";
import youtube from "../assets/images/youtube.png";
import micro from "../assets/images/microsoft.png";
import medium from "../assets/images/medium.png";
import zoom from "../assets/images/zoom.png";
import uber from "../assets/images/uber.png";
import grab from "../assets/images/grab.png";
export default function Home() {
  return (
    <>
      <div className="bg-[#F8F8FA]">
        <Navbar />
        <HeroWithFilter />
        <UpcomingEvents />
        {/* Make your own event section goes here */}
        <section className="mt-40 bg-[#10107B] ">
          <div className="w-[80%] mx-auto relative flex justify-around">
            {/* the div for the image */}
            <div className="-mt-13">
              <img src={sit} alt="" className="w-136 h-76" />
            </div>
            {/* the div for the text */}
            <div className="text-white justify-center items-center mt-5">
              <h1 className="text-big-heading font-bold mb-3">
                Make your own Event{" "}
              </h1>
              <p className="mb-7">
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit.
              </p>
              <button className="text-white w-76 h-15 rounded-[5px] bg-[#7848F4] text-sub-heading font-bold text-center ">
                Create Events
              </button>
            </div>
          </div>
        </section>
        {/* Join these brands section goes here */}
        <section className="brands mt-30">
          <div className="text-center mb-10">
            <h1 className="text-big-heading font-bold mb-4">
              Join these <span className="text-[#7848F4]">brands</span>
            </h1>
            <p className="text-sub-heading font-bold">
              We've had the pleasure of working with industry-defining brands.
              These are <br /> just some of them.
            </p>
          </div>
          <div className="w-[80%] mx-auto">
            <div className="flex gap-7 items-center justify-center">
              <img src={spotify} alt="" className="w-45 h-13" />
              <img src={google} alt="" className="w-41 h-13" />
              <img src={stripe} alt="" className="w-36 h-16" />
              <img src={youtube} alt="" className="w-57 h-33" />
              <img src={micro} alt="" className="w-74 h-31" />
            </div>

            <div className="flex gap-7 justify-center items-center w-[90%] mx-auto">
              <img src={medium} alt="" className="w-74 h-21" />
              <img src={zoom} alt="" className="w-46 h-9.5" />
              <img src={uber} alt="" className="w-34 h-11" />
              <img src={grab} alt="" className="w-37 h-13" />
            </div>
          </div>
        </section>
        <TrendingColleges />
        <OurBlogs />
        <Footer />
      </div>
    </>
  );
}
