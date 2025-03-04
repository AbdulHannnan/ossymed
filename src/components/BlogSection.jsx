import { useState } from "react";

const blogs = [
  { id: 1, title: " The Secret to an Affordable Health Professions Education?", date: "Apr 17, 2018", image: "images/Blog1.jpg" },
  { id: 2, title: "The Secret to an Affordable Health Professions Education?", date: "Apr 17, 2018", image: "images/Blog2.jpg" },
  { id: 3, title: "The Secret to an Affordable Health Professions Education?", date: "Apr 17, 2018", image: "images/Blog3.webp" },
  { id: 4, title: "New Blog Post Example", date: "Jan 10, 2024", image: "images/blog4.jpg" },
  { id: 5, title: "Another Blog Post", date: "Feb 20, 2024", image: "images/blog5.jpg" },
];

function BlogSection() {
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  return (
    <div className="max-w-7xl mx-auto p-4 bg-[#FDF8F3]">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl text-green-600 font-bold lg:text-5xl">News and Blog</h2>
        {visibleBlogs < blogs.length && (
          <button
            onClick={() => setVisibleBlogs(visibleBlogs + 3)}
            className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-white hover:text-orange-600 border-2 border-orange-600 transition duration-300"
          >
            View All
          </button>
        )}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {blogs.slice(0, visibleBlogs).map((blog) => (
          <div
            key={blog.id}
            className="shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-600">{blog.title}</h3>
              <p className="text-sm text-gray-500">{blog.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
