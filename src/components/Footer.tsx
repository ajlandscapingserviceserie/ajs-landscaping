const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light tracking-wide mb-4">
           AJ's Landscaping & Snow Removal Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
           Landscaping & Snow Removal based in Erie, Pennsylvania.
          </p>
        </div>

        {/* Contact CTA */}
        <div className="text-center mb-12">
          <a
            href="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 text-sm font-medium uppercase tracking-wide hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="/investment" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/blog/seasonal-property-care-subscription" className="hover:text-white transition-colors">Seasonal Property Care Subscription</a></li>
              <li><a href="/blog/full-detail-description" className="hover:text-white transition-colors">Best Plants for Erie’s Seasons</a></li>
            </ul>
          </div>

          {/*<div>
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/blog/local-insider-tips-budget-friendly-tampa-micro-wedding" className="hover:text-white transition-colors">Products Used to Keep Your Boat Looking Presine</a></li>
             <li><a href="/blog/elope-in-tampa-fl" className="hover:text-white transition-colors">Visit Us on TikTok</a></li>
            </ul>
          </div>*/}

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="mailto:ajslandscapingerie@gmail.com" className="hover:text-white transition-colors">AJsLandscapingErie@gmail.com</a></li>
              <li><a href="tel:8149690631" className="hover:text-white transition-colors">(814) 969-0631</a></li>
              <li><span className="text-gray-300">Erie, PA</span></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.instagram.com/premierboatdetailing/" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Instagram</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a href="https://www.facebook.com/people/AJs-Landscaping-Snow-Removal-Erie/61584486336615/#" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Facebook</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.413 c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24 l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.311h3.587l-.467  3.696h-3.12V24h6.116C23.407 24 24 23.407 24  22.674V1.326C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </a>

          <a href="tel:8149690631" className="text-gray-400 hover:text-white transition-colors">
            <span className="sr-only">Phone</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.003 5.884a1 1 0 01.286-.707l2.829-2.829a1 1 0 011.414 0l2.122 2.122a1 1 0 010 1.414l-1.515 1.515a1 1 0 00-.1 1.316 11.042 11.042 0 004.95 4.95 1 1 0 001.316-.1l1.515-1.515a1 1 0 011.414 0l2.122 2.122a1 1 0 010 1.414l-2.829 2.829a1 1 0 01-.707.286c-8.284 0-15-6.716-15-15z"/>
            </svg>
          </a>
        </div>

        {/* Featured Badge */}
        {/*<div className="text-center mb-8">
          <div className="inline-block bg-gray-800 px-4 py-2 rounded">
            <span className="text-sm text-gray-300">Featured on Zola</span>
          </div>
        </div>*/}

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm border-t border-gray-800 pt-8">
          <p>© 2026 AJ's Landscaping & Snow Removal Services. All rights reserved | Images by AJ's Landscaping & Snow Removal Services</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer