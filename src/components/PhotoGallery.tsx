'use client'

import { useState, useEffect, useRef } from 'react'

export interface GalleryImage {
  url: string
  caption?: string
}

export interface PhotoGalleryProps {
  images?: GalleryImage[]
  title?: string
  subtitle?: string
}

export function PhotoGallery({ images, title, subtitle }: PhotoGalleryProps) {
  const slideItems = images && images.length > 0 ? images : []
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null)

  // Autoplay function
  useEffect(() => {
    if (!isPaused) {
      autoplayTimer.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideItems.length)
      }, 5000)
    }

    return () => {
      if (autoplayTimer.current) {
        clearInterval(autoplayTimer.current)
      }
    }
  }, [isPaused, slideItems.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slideItems.length) % slideItems.length)
  }

  const selectSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 bg-slate-50">
      <div className="container-prose mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            {title}
          </h2>
          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Gallery Slideshow Container */}
        <div
          className="relative w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xl border border-slate-200/50 aspect-video md:aspect-[21/9]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Images Wrapper */}
          <div className="w-full h-full relative">
            {slideItems.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.caption || `Gallery Image ${idx + 1}`}
                  className="w-[100%] h-[100%] object-cover select-none"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-11" />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/35 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer opacity-80 hover:opacity-100 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/35 hover:bg-black/60 backdrop-blur-md border border-white/10 text-white transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer opacity-80 hover:opacity-100 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {slideItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => selectSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${idx === currentIndex
                  ? 'w-6 bg-brand-orange shadow-md'
                  : 'w-2.5 bg-white/50 hover:bg-white'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
