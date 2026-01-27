const Hero = () => {
  return (
    <section className="relative">
      {/* Hero Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        <div className="relative h-96 md:h-[600px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/nmcpzlghn/Hero-1.jpeg"
            alt="Tree Cutting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-96 md:h-[600px] overflow-hidden">
          <img
            src="https://ik.imagekit.io/nmcpzlghn/Hero-2.jpg"
            alt="Snow Removal"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Feature Image */}
      <div className="relative h-64 md:h-96 overflow-hidden mt-1">
        <img
          src="https://ik.imagekit.io/nmcpzlghn/Hero-3.jpg?updatedAt=1769454910398"
          alt="Lawn Mowing"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-light mb-4 tracking-wide">
            Erie's<br />
            Most Trusted Landscapers <br />
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8">
             Restoration • Protection • Perfection
          </p>
        </div>
      </div>

      

      {/* Main Tagline */}
      <div className="max-w-4xl mx-auto text-center py-16 px-4">
        <h2 className="text-1xl md:text-3xl font-light text-gray-900 mb-8 leading-tight">
          You Name It, We Can Do It.<br />
          Landscaping · Hardscaping · Property Cleanups<br />
          Tree Removal · Snow Removal · And More
        </h2>
      </div>
    </section>
  )
}

export default Hero