import { useState } from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null && selectedImage < portfolioItems.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const portfolioItems = [
    {
      
      image: "https://ik.imagekit.io/nmcpzlghn/Portfolio/Work-1.jpg",
      slug: null
    },
    {

      image: "https://ik.imagekit.io/nmcpzlghn/Portfolio/Work-2.jpg",
      slug: null
    },
    {
      image: "https://ik.imagekit.io/nmcpzlghn/Portfolio/Work-3.jpg",
      slug: null
    },
    {
      image: "https://ik.imagekit.io/nmcpzlghn/Portfolio/Work-4.jpg",
      slug: null
    },
    {
      image: "https://ik.imagekit.io/nmcpzlghn/Portfolio/Work-5.jpg",
      slug: null
    },
    {
      image: "https://ik.imagekit.io/nmcpzlghn/Portfolio/Work-6.jpg",
      slug: null
    },
    {
      image: "https://ik.imagekit.io/nmcpzlghn/Portfolio/Work-7.jpg",
      slug: null
    },
    {
      image: "https://ik.imagekit.io/nmcpzlghn/Portfolio/Work-8.jpg",
      slug: null
    },
    {
      image: "https://ik.imagekit.io/nmcpzlghn/Portfolio/Work-9.jpg",
      slug: null
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Gallery of Past Work
          </h1>
          <p className="text-gray-600 mb-8">
            Refresh the page, if the images does not load right away. Click any image to view it in full size.
          </p>
        </div>
      </section>



      {/* Portfolio Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {portfolioItems.map((item, index) => {
              if (item.slug) {
                // If item has a gallery page, link to it
                return (
                  <Link key={index} to={item.slug} className="group text-center cursor-pointer">
                    <div className="relative h-80 mb-6 overflow-hidden">
                      <img
                        src={item.image}
                       
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2 uppercase tracking-wide">
                      </h3>
                      <p className="text-sm text-gray-600 uppercase tracking-wide">
                      </p>
                    </div>
                  </Link>
                )
              } else {
                // If no gallery page, open in lightbox
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => openLightbox(index)}
                    className="group text-center cursor-pointer w-full"
                  >
                    <div className="relative h-80 mb-6 overflow-hidden">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2 uppercase tracking-wide">
                      </h3>
                      <p className="text-sm text-gray-600 uppercase tracking-wide">
                      </p>
                    </div>
                  </button>
                )
              }
            })}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light mb-8">
              Find us on Facebook{' '}
              <a
                href="https://www.facebook.com/people/AJs-Landscaping-Snow-Removal-Erie/61584486336615/#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                @AJ's Landscaping & Snow Removal
              </a>
            </h3>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-8">
            {[
              "https://ik.imagekit.io/nmcpzlghn/photo_2-2.png",
              "https://ik.imagekit.io/nmcpzlghn/photo_2-1.png",
              "https://ik.imagekit.io/nmcpzlghn/photo_2-4.png",
              "https://ik.imagekit.io/nmcpzlghn/photo_2-5.png"
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


        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            aria-label="Close"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          {selectedImage > 0 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white hover:text-gray-300 z-10"
              aria-label="Previous image"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next Button */}
          {selectedImage < portfolioItems.length - 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white hover:text-gray-300 z-10"
              aria-label="Next image"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div className="max-w-7xl w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={portfolioItems[selectedImage].image}
              className="max-w-full max-h-[85vh] object-contain"
            />
            <div className="text-white text-center mt-6">
              <p className="text-sm text-gray-400 mt-2">
                {selectedImage + 1} / {portfolioItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Portfolio
