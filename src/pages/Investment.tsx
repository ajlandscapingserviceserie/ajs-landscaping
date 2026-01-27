const Investment = () => {
  const packages = [
    {
      title: "Lawn Care",
      location: "Mowing + Trim + Edge",
      price: "Starting at $25 per visit",
      features: [
        "Consistent mowing with clean edges and a sharp, finished look",
        "Trimming around fences, beds, and tight areas for a complete cut",
        "Blow-off of walkways, driveways, and patios after every visit",
      ],
      image: "https://ik.imagekit.io/nmcpzlghn/Service-1.jpg",
    },
    {
      title: "Seasonal Care Subscription",
      location: "Quarterly or Yearly Plan",
      price: "Contact for Pricing",
      features: [
        "Quarterly or yearly plans to keep your property maintained year-round",
        "Includes lawn mowing, seasonal cleanups, and snow removal options",
        "Priority scheduling during peak season and storms",
        "Ideal for homeowners who want consistent care without the hassle",
      ],
      image: "https://ik.imagekit.io/nmcpzlghn/subscriptions.jpg",
    },
    {
      title: "Seasonal Cleanup",
      location: "Spring / Fall Cleanups",
      price: "Starting at $150",
      features: [
        "Leaf, debris, and overgrowth removal to refresh your yard",
        "Bed cleanup, light trimming, and haul-away included",
        "Optional mulch refresh and edging for a crisp finish",
      ],
      image: "https://ik.imagekit.io/nmcpzlghn/seasonal-cleanup-1.png",
    },
    {
      title: "Snow Removal",
      location: "Driveways + Walkways",
      price: "Starting at $60 per visit",
      features: [
        "Reliable snow clearing for driveways, sidewalks, and entryways",
        "Salting available for safer surfaces during ice conditions",
        "Storm response with quick turnarounds and clear communication",
      ],
      image: "https://ik.imagekit.io/nmcpzlghn/snowblowing-1.JPG",
    },
    {
      title: "Hardscaping Builds",
      location: "Patios · Retaining Walls · Walkways · Fences",
      price: "Contact for a Free Estimate",
      features: [
        "Patios, pavers, walkways, and outdoor upgrades built to last",
        "Retaining walls designed for strength, drainage, and curb appeal",
        "Fences installed or repaired for privacy, safety, and clean lines",
        "Built to handle Erie weather and seasonal freeze/thaw",
      ],
      image: "https://ik.imagekit.io/nmcpzlghn/Hardscaping-1.png",
    },
  ]

  const faqs = [
    {
      question: "How do I book a service appointment?",
      answer:
        "You can book through our website, social media, or by calling/texting us. We’ll gather details about your property, what you want done, and your address to provide an accurate quote and schedule.",
    },
    {
      question: "Do you come to my location?",
      answer:
        "Yes! We’re a local, on-site crew serving the Erie area. We bring the equipment needed to complete the job at your home, rental, or business.",
    },
    {
      question: "Are you insured?",
      answer:
        "Absolutely. We’re insured and can provide proof of insurance upon request.",
    },
    {
      question: "How long does a typical job take?",
      answer:
        "Timing depends on the service and property size. Mowing and basic cleanups usually take a couple hours. Larger projects like hardscaping or tree work can take a day or more. We’ll provide a clear estimate before starting.",
    },
    {
      question: "What’s included in lawn mowing service?",
      answer:
        "Most mowing visits include mowing, trimming around obstacles, edging (if requested), and blowing off hard surfaces like driveways and sidewalks for a clean finish.",
    },
    {
      question: "Do you offer maintenance or subscription plans?",
      answer:
        "Yes. We offer quarterly or yearly property maintenance plans that can include lawn mowing, seasonal cleanups, and snow removal, so your property stays maintained year-round.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit cards, and digital payments like Zelle or Venmo. Payment is due upon completion unless it’s part of a scheduled plan.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                Our goal is to leave you fully satisfied with how your property looks and feels.
              </h1>
            </div>
            <div className="relative">
              <img
                src="https://ik.imagekit.io/nmcpzlghn/Flower-bed-2.jpg"
                alt="Landscaping and property services"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-light text-gray-900 mb-8">
            Precision driven, results-focused property services for homeowners who value craftsmanship, clean lines, and work that lasts.
          </h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The quality of what we do is in the details such as clean edges, finished surfaces, and a property that looks sharp when we’re done.
              We treat every yard and build like it’s our own, using the right equipment and proven methods to deliver consistent results.
            </p>
            <p>
              From seasonal cleanups and weekly mowing to hardscaping builds and snow removal, our goal is simple: keep your property looking great,
              staying safe, and holding up through every Erie season.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="bg-gray-900 text-white p-8 rounded-lg">
                    <h3 className="text-3xl font-light mb-4">{pkg.title}</h3>
                    <p className="text-sm uppercase tracking-wide text-gray-300 mb-6">
                      {pkg.location}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-200">
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="text-center">
                      <div className="inline-block border border-white px-6 py-3 mb-4">
                        <span className="text-2xl font-light">{pkg.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-light text-gray-900 text-center mb-16">
            Frequently Asked Questions & Answers
          </h2>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-8 uppercase tracking-wide">
            QUALITY, CRAFTSMANSHIP, AND RESULTS — ON EVERY JOB
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
            <p>
              We believe your property deserves more than rushed work and shortcuts. That’s why we focus on professional results that improve your home’s
              curb appeal, function, and safety whether it’s lawn care, seasonal cleanups, snow removal, or hardscaping builds.
            </p>
            <p>
              Our goal is simple: keep your property looking great and built to last through every Erie season. We treat every job like it’s our own,
              with clear communication, clean finishes, and work you can trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-12">
            <img
              src="https://ik.imagekit.io/nmcpzlghn/Flower-bed-1.JPG"
              alt="Landscaping work example"
              className="w-full h-64 object-cover"
            />
            <img
              src="https://ik.imagekit.io/nmcpzlghn/Flower-bed-3.JPG"
              alt="Landscaping work example 2"
              className="w-full h-64 object-cover"
            />
          </div>

          <p className="text-gray-600 mb-8">Questions? Let's chat!</p>

          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  )
}

export default Investment
