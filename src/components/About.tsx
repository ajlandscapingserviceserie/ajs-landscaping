const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://ik.imagekit.io/nmcpzlghn/Lanscaping-crew.png"
                alt="The Team"
                className="w-full h-100 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              Hi! We're AJ's Landscaping & Snow Removal Services
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our approach is simple: show up on time, do the job right, and leave your property looking clean, sharp, and built to last.
            </p>
            <h3 className="text-1xl md:text-2xl font-light text-gray-900 mb-6">
             We are Erie's #1 Landscaping & Property Services Crew
            </h3>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We’re a local crew serving Erie with professional landscaping, hardscaping, tree removal, and snow removal. Our goal is straightforward: protect your property, elevate the look, and keep everything safe, clean, and ready for every season, whether it’s your home, rental, or commercial site.
              </p>

              <p>
                As problem-solvers, we bring a contractor’s precision and a craftsman’s pride to every job. From routine yard maintenance to full outdoor transformations, we tailor every service to your property’s condition, your timeline, and your goals. Whether it’s a quick cleanup before guests arrive or a full build like a patio and retaining wall, we do it right the first time.
              </p>
            <div>
              <p>
                What we’re known for:
                <ul >
                  <li> <strong> Consistent results:</strong> Clean edges, even cuts, sharp mulch lines, and beds that stay looking fresh.</li>
                  <li> <strong>Clear communication:</strong> Straightforward quotes, scheduling updates, and before/after photos when requested.</li>
                  <li> <strong>Built for Erie seasons: </strong> Plant choices, grading, drainage, and materials that hold up through rain, snow, freeze/thaw, and summer heat.</li>
                </ul>
              </p>
            </div>
              <p>
                If you’re looking for a landscaping crew that genuinely cares about your property and uses professional grade equipment and materials, we’re your team. We take pride in leaving every lawn, bed, and hardscape clean, sharp, and built to last, so your home looks its best and stays that way through every Erie season.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/about"
                className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Get to Know Us
              </a>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <h3 className="text-1xl md:text-2xl font-light text-gray-900 mb-8 uppercase tracking-wide">
            IN A WORLD FULL OF RUSHED MOWING, SLOPPY CUTS, AND SHORTCUTS, WE STAND FOR LANDSCAPING AND OUTDOOR WORK DONE THE RIGHT WAY. OUR MISSION IS TO BUILD, CLEAN UP, AND MAINTAIN YOUR PROPERTY WITH PRIDE, SO IT LOOKS SHARP, STAYS SAFE, AND HOLDS UP THROUGH EVERY ERIE SEASON.
          </h3>
        </div>

        {/* Personal Bio */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h4 className="text-xl font-medium text-gray-900 mb-6">
            Known for clean lines, solid builds, and properties that look sharp year-round, we stand behind our name and our work. Nothing makes us prouder than seeing clients smile when they step outside and see the transformation.
          </h4>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              We’re a hands-on crew focused on professional results without inflated contractor pricing. By keeping our operation small and efficient, we cut unnecessary overhead, so your money goes into quality materials, the right equipment, and craftsmanship that holds up.
            </p>
            <p>
              Our approach is simple: show up on time, communicate clearly, and treat every property like it’s our own. Whether it’s a seasonal cleanup, landscaping refresh, tree removal, or building a patio, fence, or retaining wall, we do it right the first time.
            </p>
            <p>
              We believe outdoor work should be both affordable and high-quality. Our mission is to deliver a clean, finished look that boosts curb appeal and stands strong through every Erie season.
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 italic mb-2">Based in Erie, Pennsylvania</p>
          <p className="text-lg text-gray-600 italic">Available throughout Western Pennsylvania</p>
        </div>
      </div>
    </section>
  )
}

export default About