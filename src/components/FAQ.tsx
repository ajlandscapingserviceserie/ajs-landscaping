const FAQ = () => {
  const faqs = [
    {
    question: "How often should I schedule landscaping or lawn care?",
    answer:
      "It depends on the season and your goals. Most mowing is weekly or bi-weekly during peak growth, and cleanups are typically seasonal (spring and fall). We can recommend a schedule based on your property size, tree coverage, and how you want it to look."
    },
    {
      question: "Do you come to my location?",
      answer:
        "Yes! We’re a local, on-site crew. We bring the equipment needed for the job and can service homes, rentals, and commercial properties across the Erie area."
    },
    {
      question: "What’s included in a full property cleanup?",
      answer:
        "Full cleanups typically include leaf and debris removal, bed cleanup, trimming back overgrowth, hauling/disposal, and a final clean finish. Add-ons like mulch, edging, and light landscaping improvements are available depending on what your property needs."
    },
    {
      question: "Do you offer hardscaping like patios and retaining walls?",
      answer:
        "Yes. We build and repair patios, walkways, retaining walls, and other outdoor features. We’ll recommend the best materials and layout based on your space, drainage, and budget."
    },
    {
      question: "Are you insured?",
      answer:
        "Absolutely. We’re insured and can provide proof of insurance upon request."
    },
    {
      question: "How long does a typical job take?",
      answer:
        "Smaller jobs like mowing or a basic cleanup usually take a couple hours. Larger projects—like tree removal, grading, or patios/retaining walls can take a day or more depending on scope and site conditions. We’ll give you an estimated timeframe before we start."
    },
    {
      question: "Do I need to be present during the service?",
      answer:
        "Not necessarily. As long as we have access to the area and any gates are unlocked, we can complete the work while you’re away. If requested, we can send before and after photos when the job is finished."
    },
    {
      question: "Do you offer maintenance or subscription plans?",
      answer:
        "Yes. We offer quarterly or yearly property maintenance plans that can include lawn mowing, seasonal cleanups, and snow removal, so your property stays maintained year-round."
    },
    {
      question: "How do I schedule or get a quote?",
      answer:
        "Reach out through our website, call, or text. We’ll ask for your address, photos (if available), and what you want done. For larger jobs, we may do a quick on-site walkthrough to give an accurate quote."
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, major credit cards, and digital payments (Zelle, Venmo, etc.). Payment is due upon completion unless it’s part of a scheduled plan."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            FAQs
          </h2>
          <p className="text-xl text-gray-700">
             
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-4">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mt-16">
          <div className="relative h-96 overflow-hidden">
            <img
              src="https://ik.imagekit.io/nmcpzlghn/Website%20Images/bottom-1.png"
              alt="flower-bed-1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-96 overflow-hidden">
            <img
              src="https://ik.imagekit.io/nmcpzlghn/Website%20Images/bottom-3.png"
              alt="flower-bed-2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Transparency Statement */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-light text-gray-900 mb-6 uppercase tracking-wide">
            Being open and honest with you matters to us at every step
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>
               Your property is one of your most valued investments, and we treat it that way. From the first quote to the final walkthrough, we believe in full transparency; clear pricing, honest assessments, and no hidden costs.
            </p>
            <p>
              We earn your trust through reliable communication, consistent results, and quality work that speaks for itself. Whether it’s your home, rental, or business, you’ll always know exactly what to expect from start to finish.
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-gray-900 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
            >
              Book With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ