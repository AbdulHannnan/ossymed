import homepage from "../assets/homepage.svg"

const Hero = () => {
    return (
      <section className="bg-[#FDF8F3] pt-24 px-6 text-center mt-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Find Your Next <br />
            <span className="text-green-700 text-6xl">Allied Health Career</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Looking for a career in allied health? <span className="text-green-600 font-medium">Programs.com</span> has your back with helpful advice, up-to-date career stats, degree program info, and more.
          </p>
          <button className="mt-6 bg-[#FAF3DD] text-orange-500 px-6 py-3 rounded-lg text-lg font-medium hover:bg-orange-600 transition hover:text-white">
            Learn about degree and training programs
          </button>
            {/* Increased Image Size */}
    
        
        </div>
        <img
          className=""
          src={homepage}
          alt="Allied Health Career"
        />
        
        
      </section>
    );
  };
  
  export default Hero;
  