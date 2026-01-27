import { Link } from 'react-router-dom'

const SeasonalProperyCareSubscription = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
          ← Back to main
        </Link>
      </nav>

      {/* Category and Date */}
      <div className="mb-6">
        <p className="text-gray-500 text-sm">
          Jun 21, 2025 • Seasonal Property Care Subscription - AJ&apos;s Landscaping &amp; Snow Removal
        </p>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
        Seasonal Property Care Subscription
      </h1>

      {/* Hero Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <img
          src="https://ik.imagekit.io/nmcpzlghn/SPCS-3.png"
          alt="Seasonal property cleanup and lawn care"
          className="w-full h-80 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/nmcpzlghn/SPCS-4.png"
          alt="Lawn mowing with clean edges"
          className="w-full h-80 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/nmcpzlghn/SPCS-2.jpg"
          alt="Snow removal for driveways and walkways"
          className="w-full h-80 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/nmcpzlghn/SPCS-1.JPG"
          alt="Hardscaping and outdoor maintenance work"
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Trends come and go, but quality outdoor work never goes out of style. Our Seasonal Property Care Subscription
          delivers reliable, year-round maintenance with clean results, and saves you time (and headaches).
        </p>

        <p className="mb-6">
          In Erie, your property takes a beating from every season: fast spring growth, summer heat, heavy fall leaves,
          and winter snow and ice. That’s why we created our Seasonal Property Care Subscription, it's a simple, consistent plan
          for homeowners who want their property looking sharp and staying safe all year long.
        </p>

        <p className="mb-6">
          Instead of scrambling to find help when things pile up, you get scheduled service and a crew that already knows
          your property. We keep up with the work before it turns into a bigger (and more expensive) problem.
        </p>

        <h2 className="text-3xl font-light text-gray-900 mb-6">What’s included?</h2>

        <p className="mb-6">
          Every plan is customized to your property, but most subscriptions can include lawn mowing and trimming, seasonal
          cleanups (spring/fall), and snow removal for driveways and walkways. The goal is simple: clean lines, a finished
          look, and consistent upkeep without you having to chase contractors.
        </p>

        <h2 className="text-3xl font-light text-gray-900 mb-6">Subscription options</h2>

        <p className="mb-6">
          Choose a quarterly plan for seasonal resets, or a yearly plan for full coverage. Quarterly is great for spring/fall
          cleanups and periodic maintenance. Yearly is best if you want mowing during the growing season and dependable snow
          removal in winter so everything stays handled, start to finish.
        </p>

        <p className="mb-6">
          What makes this plan different is consistency. You’re not getting random, rushed work you’re getting a crew that
          shows up, communicates clearly, and treats your property like it matters. We focus on doing it right the first
          time, with the kind of results you notice every time you pull in the driveway.
        </p>

        <p className="mb-8">
          If you want your yard looking clean in summer and your driveway safe in winter, this is the easiest way to stay
          ahead of the season. <strong>Stay maintained. Stay ready. Stay covered.</strong>
        </p>

        <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
          <p className="text-gray-700 mb-6">
            Ready to get your property handled year-round? From mowing and seasonal cleanups to snow removal, we’ll keep
            your home looking sharp and staying safe through every Erie season.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </article>
  )
}

export default SeasonalProperyCareSubscription
