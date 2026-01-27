const Blog = () => {
  const blogPosts = [
    {
      title: "Seasonal Property Care Subscription",
      excerpt: "Keep your property clean, maintained, and ready for every season. Our quarterly or yearly subscription includes routine lawn mowing, seasonal cleanups, and snow removal—so your yard stays sharp in summer and your driveway stays safe in winter.",
      image: "https://ik.imagekit.io/nmcpzlghn/Subscription_pack.jpg",
      href: "/blog/seasonal-property-care-subscription"
    },
    {
      title: "Best Plants for Erie’s Seasons",
      excerpt: "A practical guide to the best trees, shrubs, perennials, and native plants that thrive in Erie’s weather—plus what to plant each season for color, durability, and low maintenance.",
      image: "https://ik.imagekit.io/nmcpzlghn/Best-Plants.jpg?updatedAt=1769472950532",
      href: "/blog/full-detail-description"
    },
    {
      title: "Check Out Our Previous Work",
      excerpt: "From cleanups and fresh mulch installs to patios, retaining walls, and snow removal—every project reflects our commitment to clean results and lasting quality. See why Erie homeowners trust us to level up their property.",
      image: "https://ik.imagekit.io/nmcpzlghn/Photo_1-1.png?updatedAt=1769461642659",
      href: "/portfolio"
    }
  ]

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Landsacping Resources & Packages Offered 
          </h2>
          <p className="text-xl text-gray-700">
            We’re dedicated to helping Erie property owners improve, protect, and maintain their homes year-round.<br />
            Below you’ll find helpful guides, seasonal tips, and package details for our services.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                
                <h3 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href={post.href}
                  className="inline-block text-gray-900 font-medium hover:text-gray-700 transition-colors"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Instagram Feed Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-light text-gray-900 mb-8">
            Find us on Facebook @AJ's Landscaping & Snow Removal
          </h3>

          <a
            href="https://www.facebook.com/people/AJs-Landscaping-Snow-Removal-Erie/61584486336615/#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors mb-10"
          >
            Follow on Instagram 
          </a>
           
        </div>

{/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-8">
            {[
              "https://ik.imagekit.io/nmcpzlghn/Photo_1-2.png",
              "https://ik.imagekit.io/nmcpzlghn/photo_1-4.png",
              "https://ik.imagekit.io/nmcpzlghn/photo_1-5.png",
              "https://ik.imagekit.io/nmcpzlghn/photo_1-3.png"
            ].map((image, index) => (
              <div key={index} className="relative h-48 overflow-hidden">
                <a href="https://www.facebook.com/people/AJs-Landscaping-Snow-Removal-Erie/61584486336615/#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={image}
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
            ))}
          </div>

        {/* Facebook Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-light text-gray-900 mb-8">
            Also check us out on Facebook
          </h3>

          

          <a
            href="https://www.facebook.com/people/AJs-Landscaping-Snow-Removal-Erie/61584486336615/#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Follow on Facebook
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blog