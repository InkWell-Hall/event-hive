import BlogCard from "./BlogCard";

export default function OurBlogs() {
  return (
    <section className="mt-20 w-[90%] mx-auto">
      <h1 className="text-[36px] mb-4 font-bold ">
        <span>Our</span>
        <span className="text-[#7848F4] ml-1">Blogs</span>
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {[1, 2, 3].map((n) => (
          <BlogCard key={n} />
        ))}
      </div>
    </section>
  );
}
