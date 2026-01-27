import { Link } from 'react-router-dom'

const About = () => {
  

  const blogPosts = [
    {
      title: "Seasonal Property Care Subscription",
      excerpt: "Keep your property clean, maintained, and ready for every season. Our quarterly or yearly subscription includes routine lawn mowing, seasonal cleanups, and snow removal, so your yard stays sharp in summer and your driveway stays safe in winter.",
      image: "https://ik.imagekit.io/nmcpzlghn/Subscription_pack.jpg",
      href: "/blog/seasonal-property-care-subscription"
    },
    {
      title: "Best Plants for Erie’s Seasons",
      excerpt: "A practical guide to the best trees, shrubs, perennials, and native plants that thrive in Erie’s weather, plus what to plant each season for color, durability, and low maintenance.",
      image: "https://ik.imagekit.io/nmcpzlghn/Best-Plants.jpg?updatedAt=1769472950532",
      href: "/blog/full-detail-description"
    },
    {
      title: "Check Out Our Previous Work",
      excerpt: "From cleanups and fresh mulch installs to patios, retaining walls, and snow removal, every project reflects our commitment to clean results and lasting quality. See why Erie homeowners trust us to level up their property.",
      image: "https://ik.imagekit.io/nmcpzlghn/Photo_1-1.png?updatedAt=1769461642659",
      href: "/portfolio"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl font-light text-gray-700 mb-4">
                We’re the type to skip the small talk and get straight to work!
              </h2>
              <h3 className="text-xl font-light text-gray-700 mb-8">
                Long days, heavy sun, and tough jobs don’t scare us - they drive us.
              </h3>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Fueled by early mornings, high expectations, and the satisfaction of a clean, finished property, we take pride in turning hard work into results you can actually see. One of us is focused on clean lines and detail work such as edging, beds, and final touches, while the other keeps the heavy work moving: hauling, grading, and getting the job done right.
                </p>

                <p>
                  When we’re not on-site, you’ll find us planning the next build, repairing our equipment, or working on projects that keep our standards high. We believe in doing things the right way every time, because that’s what earns trust and sets real craftsmanship apart.
                </p>

                <p>
                 At the end of the day, this isn’t just about cutting grass or moving stone, it’s about pride, precision, and leaving every property we touch looking its absolute best.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Let's Work Together!
                </a>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-8">
                HI, WE ARE
              </h1>

              <h2 className="text-6xl md:text-8xl font-light text-gray-900 mb-4">
                AJ's Landscaping Services
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* My Why Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://ik.imagekit.io/nmcpzlghn/Abouts-1.png?updatedAt=1769477921196"
                alt="The truck in field"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                Our Why
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We didn’t set out knowing this would become our life’s work, but looking back, it’s clear everything led us here. What started as weekend projects and helping friends and family turned into a passion for building, improving, and maintaining properties the right way.
                </p>
                <p>
                  We know what it means to build something from the ground up, to show up every day, work hard, and take pride in the details other crews overlook. Landscaping and outdoor work isn’t just what we do; it’s how we show dedication, precision, and respect for the craft.
                </p>
                <p>
                  We do this because we genuinely care about every property we work on, and we’re honored to help homeowners protect and improve what they’ve invested in one clean finish and solid build at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">
           From quick cleanups to full outdoor transformations, we’ve mastered the art of making properties look their best. Every detail we touch reflects hands-on experience and pride in the work. <br /> Our goal is simple — to build lasting trust through consistency, craftsmanship, and results that exceed expectations every time.
          </h3>
        </div>
      </section>

      {/* More About Me Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://ik.imagekit.io/tdwk7dqz1/About-5.jpg?updatedAt=1760487964651"
                alt="The Life"
                className="w-full h-98 object-cover rounded-lg"
              />
            </div>
            

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                More about us
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p >
                  Alex’s world revolves around the outdoors with early mornings, hard work, and time on the water. When he’s not fishing or
                  riding his jet ski, he’s hands-on with yard work and equipment, always improving, fixing, and building.
                </p>


                <p>
                   That same drive shows up in every job we take on. From landscaping and hardscaping to tree removal and snow removal, we keep it simple: show up, communicate clearly, and leave your property clean, safe, and looking sharp, season after season.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-600 mb-4 uppercase tracking-wide">What We Offer</h2>
            <h3 className="text-2xl font-light text-gray-900 mb-8">
              Described is what We Offer With Our Services. Check these out!
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} to={post.href} className="block group">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-gray-700 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About