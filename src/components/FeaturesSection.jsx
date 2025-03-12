export default function FeatureSection() {
    const features = [
      {
        title: "Expert Insights",
        description: "100% of our content is written by professionals in the field.",
        image: "/images/expert-insights.PNG",
        profileImage: "/images/profile.png",
        author: "Abdul Hannan",
        designation: "Career Enthusiast",
        color: "text-yellow-500",
      },
      {
        title: "Helpful Resources",
        description: "Get everything you need to know about your new career.",
        image: "/images/helpful-resources.PNG",
        profileImage: "/images/profile.png",
        author: "Abdul Hannan",
        designation: "Helpful Resources",
        color: "text-orange-500",
      },
      {
        title: "Compare Careers",
        description: "Compare and contrast careers based on salary, education & more.",
        image: "/images/compare-careers.PNG",
        profileImage: "/images/profile.png",
        author: "Abdul Hannan",
        designation: "Compare Careers",
        color: "text-pink-500",
      },
    ];
  
    return (
      <section id="about" className="py-20 px-10 bg-[#FDF8F3]">
        <h2 className="text-3xl font-bold text-center mb-14 lg:text-6xl">
          Everything you need all in one place
        </h2>
  
        <div className="max-w-7xl mx-auto space-y-24">
          {features.map((feature, index) => (
            <div key={index} className={`md:flex items-center gap-20 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              
              {/* Illustration - Increased size */}
              <div className="md:w-1/2 flex justify-center">
                <img src={feature.image} alt={feature.title} className="w-full max-w-lg md:max-w-xl" />
              </div>
  
              {/* Text Content - Increased size */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className={`text-3xl font-semibold ${feature.color}`}>{feature.title}</h3>
                <p className="text-xl text-gray-600 mt-4">{feature.description}</p>
  
                {/* Author Info - Increased size */}
                <div className="flex items-center gap-5 mt-6">
                  <img src={feature.profileImage} alt={feature.author} className="w-16 h-16 rounded-full" />
                  <div>
                    <p className="text-lg font-medium">{feature.author}</p>
                    <p className="text-base text-gray-500">{feature.designation}</p>
                  </div>
                </div>
              </div>
  
            </div>
          ))}
        </div>
      </section>
    );
  }
  