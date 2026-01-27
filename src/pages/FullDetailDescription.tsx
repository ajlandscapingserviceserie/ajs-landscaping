import { Link } from 'react-router-dom'

const FullDetailDescription = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors">
          ← Back to Main
        </Link>
      </nav>

      {/* Category and Date */}
      <div className="mb-6">
        <p className="text-gray-500 text-sm">
          Jun 27, 2023 • Best Plants for Erie’s Seasons - AJ&apos;s Landscaping &amp; Snow Removal
        </p>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
        Best Plants for Erie’s Seasons
      </h1>

      {/* Hero Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        <img
          src="https://ik.imagekit.io/nmcpzlghn/flower-3.jpg"
          alt="Perennials and shrubs suited for Erie weather"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/nmcpzlghn/flower-1.JPG"
          alt="Low-maintenance landscaping plants"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/nmcpzlghn/flower-4.jpg"
          alt="Hardy shrubs for Erie winters"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/nmcpzlghn/flower-6.JPG"
          alt="Native plants that thrive in Northwestern Pennsylvania"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/nmcpzlghn/flower-5.jpg"
          alt="Colorful seasonal planting ideas"
          className="w-full h-64 object-cover rounded-lg"
        />
        <img
          src="https://ik.imagekit.io/nmcpzlghn/flower-2.jpg"
          alt="Landscaping design with year-round interest"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Erie weather is no joke and the lake-effect snow, freeze & thaw cycles, wet springs, and hot summers can be hard on
          your landscape. The best results come from choosing plants that can handle the seasons, look great with minimal
          maintenance, and come back strong year after year.
        </p>

        <h2 className="text-3xl font-light text-gray-900 mb-6">What to look for in Erie-friendly plants</h2>

        <p className="mb-6">
          When we recommend plants for Northwestern Pennsylvania, we prioritize cold hardiness, disease resistance, and
          strong root systems. Native plants are often the easiest win and they’re adapted to the climate, support pollinators,
          and typically require less watering once established.
        </p>

        <ul className="space-y-2 mb-6 list-disc list-inside pl-6">
          <li><strong>Cold hardiness:</strong> Choose plants that thrive in Zone 5b/6a conditions.</li>
          <li><strong>Low maintenance:</strong> Look for varieties that don’t need constant pruning or pampering.</li>
          <li><strong>Good drainage tolerance:</strong> Erie can be wet, so avoid plants that hate damp soil unless you can amend and drain.</li>
          <li><strong>Year-round interest:</strong> Mix evergreen structure with seasonal color.</li>
        </ul>

        <h2 className="text-3xl font-light text-gray-900 mb-6">Best shrubs for structure and reliability</h2>

        <p className="mb-6">
          Shrubs give your yard shape and structure through all four seasons. These are reliable options that handle Erie’s
          winters well and still look great in spring and summer.
        </p>

        <ul className="space-y-2 mb-6 list-disc list-inside pl-6">
          <li><strong>Boxwood:</strong> Classic evergreen structure (best in sheltered spots from winter wind).</li>
          <li><strong>Spirea:</strong> Hardy, easy, and great seasonal blooms.</li>
          <li><strong>Hydrangea (panicle types):</strong> Very cold-tolerant and showy blooms.</li>
          <li><strong>Ninebark:</strong> Tough native shrub with great color and texture.</li>
        </ul>

        <h2 className="text-3xl font-light text-gray-900 mb-6">Best perennials for color (that come back every year)</h2>

        <p className="mb-6">
          Perennials are perfect for Erie because they handle winter dormancy and return each year with minimal effort.
          Mix heights and bloom times so you always have something looking good.
        </p>

        <ul className="space-y-2 mb-6 list-disc list-inside pl-6">
          <li><strong>Black-eyed Susan:</strong> Bright, hardy, and great for pollinators.</li>
          <li><strong>Daylilies:</strong> Nearly indestructible and easy to maintain.</li>
          <li><strong>Coneflower (Echinacea):</strong> Great summer color and drought tolerance once established.</li>
          <li><strong>Hostas:</strong> Perfect for shade and woodland style beds.</li>
          <li><strong>Ornamental grasses:</strong> Excellent texture and winter interest.</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Our “Low-Maintenance” Rule</h3>
          <p className="mb-4">
            If you don’t want to baby your landscaping, don’t choose plants that demand constant attention. We recommend
            hardy, proven varieties that thrive in Erie conditions and look great with simple seasonal upkeep.
          </p>
          <p className="mb-0">
            Want help choosing the best plants for your specific yard (sun, shade, soil, drainage)? We can recommend the
            right options and install them the right way.
          </p>
        </div>

        {/* Image */}
        <div className="mb-12">
          <img
            src="https://ik.imagekit.io/nmcpzlghn/flower-bed.png"
            alt="Example of a balanced planting layout for Erie seasons"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        <h2 className="text-3xl font-light text-gray-900 mb-6">The Premier Standard</h2>

        <p className="mb-6">
          The best landscaping comes down to two things: the right plants and the right install. Proper spacing, quality soil
          prep, and smart placement (sun, wind, drainage) make the difference between a yard that struggles and a yard that
          thrives.
        </p>

        <p className="mb-6">
          If you want a plan that looks great now and still looks great years from now, we’re happy to help.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <p className="text-gray-700 mb-6">
            Want help choosing plants that actually thrive in Erie? We can recommend, source, and install the right options
            for your property—built for every season.
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

export default FullDetailDescription
