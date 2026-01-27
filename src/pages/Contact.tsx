import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    phone: '',
    heardAbout: '',
    contactMethod:'',
    timelineInquiry: '',
    budgetInquiry: '',
    OtherDetails: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const response = await fetch('https://formspree.io/f/mzzjykdj', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      alert('Thank you! Your message has been sent.')
      setFormData({
        names: '',
        email: '',
        phone: '',
        heardAbout: '',
        contactMethod: '',
        timelineInquiry: '',
        budgetInquiry: '',
        OtherDetails: ''
      })
    } else {
      alert('Something went wrong. Please try again later.')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Error sending message.')
  }
}

 return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
                We’re here to give your property more than just a quick mow
              </h1>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                 Before you schedule with us, we want you to understand the value behind what we do. Property work isn’t just about making things look clean, it’s about protecting 
                 what you’ve worked hard for. Every cleanup, every cut, every build, and every finishing detail is done with care and precision to keep your home looking sharp and holding up through the seasons.
                </p>
                <p>
                  We take pride in doing things the right way, the first time. When you see those clean edges, crisp lines, and a finished look that lasts, it’s not just curb appeal, it’s craftsmanship, durability,
                   and pride that stays long after we pack up.
                </p>
              </div>

              
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="relative h-100 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nmcpzlghn/Contact-1.png"
                  alt="patio 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative h-100 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/nmcpzlghn/Contact-2%20(2).png"
                  alt="patio 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Names */}
              <div>
                <label htmlFor="names" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="names"
                  name="names"
                  value={formData.names}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="E.g. myemail@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="E.g. 347 444 5555"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="names" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Address (Street, City, ZIP) *
                </label>
                <input
                  type="text"
                  id="names"
                  name="names"
                  value={formData.names}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                />
              </div>

                {/* Preffered contact method */}
              <div>
                <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-700 mb-2">
                  How should we contact you?
                </label>
                <select
                  id="contactMethod"
                  name="contactMethod"
                  value={formData.heardAbout}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="google">Phone Call</option>
                  <option value="instagram">Text Message</option>
                  <option value="referral">Email</option>
                </select>
              </div>

              {/* How did you hear about me */}
              <div>
                <label htmlFor="heardAbout" className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  id="heardAbout"
                  name="heardAbout"
                  value={formData.heardAbout}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="google">Google Search</option>
                  <option value="instagram">Instagram</option>
                  <option value="referral">Facebook</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* What are you inquiring about */}
              <div>
                <label htmlFor="budgetInquiry" className="block text-sm font-medium text-gray-700 mb-2">
                  What are you inquiring about? *
                </label>
                <select
                  id="budgetInquiry"
                  name="budgetInquiry"
                  value={formData.budgetInquiry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="seasonalPropertyCareSubscription">Seasonal Property Care Subscription</option>
                  <option value="lawncare">Lawn Care</option>
                  <option value="cleanup">Seasonal Cleanup</option>
                  <option value="hardscaping">Hardscaping</option>
                  <option value="treeremoval">Tree Removal</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="timelineInquiry" className="block text-sm font-medium text-gray-700 mb-2">
                  When would you like service to start? *
                </label>
                <select
                  id="timelineInquiry"
                  name="timelineInquiry"
                  value={formData.budgetInquiry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1week">Within 1 Week</option>
                  <option value="1month">Within 1 Month</option>
                  <option value="other">Just Researching</option>
                </select>
              </div>

              {/* Budget*/}
              <div className="md:col-span-2">
                <label htmlFor="budgetInquiry" className="block text-sm font-medium text-gray-700 mb-2">
                  What is your estimated budget?
                </label>
                <select
                  id="budgetInquiry"
                  name="budgetInquiry"
                  value={formData.budgetInquiry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="budget1">Under $250</option>
                  <option value="budget2">$250-$500</option>
                  <option value="budget3">$500-$1,000</option>
                  <option value="budget4">$1,000+</option>
                  <option value="other">Not Sure Yet</option>
                </select>
              </div>

              {/* Other Details*/}
              <div className="md:col-span-2">
                <label htmlFor="OtherDetails" className="block text-sm font-medium text-gray-700 mb-2">
                  Other Details
                </label>
                <textarea
                  id="OtherDetails"
                  name="OtherDetails"
                  value={formData.OtherDetails}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
              </div>
            </div>

            


            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-gray-900 text-white px-12 py-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Bottom Section with Links */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wide">View</h3>
              <h4 className="text-2xl font-light text-gray-900">
                <a href="/portfolio" className="hover:text-gray-700 transition-colors">Our Work</a>
              </h4>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wide">Explore</h3>
              <h4 className="text-2xl font-light text-gray-900">
                <a href="/about" className="hover:text-gray-700 transition-colors">About Us</a>
              </h4>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4 uppercase tracking-wide">Let's</h3>
              <h4 className="text-2xl font-light text-gray-900">
                <a href="/contact" className="hover:text-gray-700 transition-colors">Get in Touch</a>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact