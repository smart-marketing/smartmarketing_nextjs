'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const testimonials = [
    {
      name: "Anika Wojtczak",
      company: "Botiga Butik",
      content: "Gorąco polecam Pana Miłosza i Smart Marketing. Człowiek słowny i sumienny, dotrzymał umówionego terminu. Budował mi sklep internetowy, z którego jestem mega zadowolona! Jesteśmy w stałym kontakcie i zawsze służy mi pomocą. Polecam z czystym sumieniem.",
      rating: 5,
      image: "/botiga.jpg"
    },
    {
      name: "Artur Żądło",
      company: "Mastermarketing",
      content: "Mam bardzo problematyczne reklamy, ale Miłosz uporał się z nimi jak należy i jestem teraz bardzo zadowolony! Z każdym miesiącem zarabiamy więcej, a inwestujemy jedynie w Google Ads.",
      rating: 5,
      image: null
    },
    {
      name: "Piotr Łukawski",
      company: "Invest Solar",
      content: "Miałem ogromny problem z pozyskiwaniem leadów w branży OZE pomimo wydatków rzędu 10000-12000zł miesięcznie. Miłosz z Sandrą generują mi obecnie kilkaset kalorycznych leadów miesięcznie, a średnio płacę 35 zł za kontakt.",
      rating: 5,
      image: "/investsolar.png"
    },
    {
      name: "Matylda Kerstein",
      company: "Fendal Eyewear",
      content: "W życiu spotkałam już wiele agencji, które zajmują się marketingiem, ale wszystkie chcą zawsze kompleksowo zajmować się marką i reklamą. Tymczasem jest wiele małych przedsiębiorców, którzy szukają pomocy przy prowadzeniu reklam w internecie, na przykład na TikToku. Na plus, że chcecie zrobić to, czego klient faktycznie potrzebuje. Przy okazji widać, że staracie się zrozumieć temat i branżę.",
      rating: 5,
      image: "/fendal.png"
    },
    {
      name: "Dominik Witanowski",
      company: "Villa Mamma",
      content: "Po miesiącu współpracy zauważyłem znaczny wzrost zasięgów na Instagramie. Jestem zaskoczony wzrostem sprzedaży – jest około 3x więcej e-maili z zapytaniem o ofertę w porównaniu do poprzedniego miesiąca. Nie sądziłem, że teksty tak wiele mogą znaczyć dla odbiorcy. 5/5! Dziękuję.",
      rating: 5,
      image: "/villamamma.png"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Touch handlers for mobile swipe
const handleTouchStart = (e: React.TouchEvent) => {
  setTouchStart(e.targetTouches[0].clientX);
  setIsAutoPlaying(false);
};

const handleTouchMove = (e: React.TouchEvent) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

// Zamień handleTouchEnd
const handleTouchEnd = () => {
  if (!touchStart || !touchEnd) return;
  
  const distance = touchStart - touchEnd;
  const isLeftSwipe = distance > 50;
  const isRightSwipe = distance < -50;

  if (isLeftSwipe) {
    handleNext();
  }
  if (isRightSwipe) {
    handlePrev();
  }
  
  // Resume autoplay after 3 seconds
  setTimeout(() => setIsAutoPlaying(true), 3000);
};

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

const goToSlide = (index: number) => {
  setCurrentIndex(index);
  setIsAutoPlaying(false);
  setTimeout(() => setIsAutoPlaying(true), 5000);
};

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#049FE3]/5 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-[#C11369]/10 to-[#049FE3]/10 rounded-full px-6 py-2 mb-6">
            <span className="font-heading font-semibold text-[#C11369]">Opinie klientów</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-6">
            Opinie o <span className="bg-gradient-to-r from-[#C11369] to-[#049FE3] bg-clip-text text-transparent">Smart Marketing</span>
          </h2>
          <p className="font-body text-l text-gray-600 max-w-3xl mx-auto">
            Zobacz, co mówią o nas przedsiębiorcy, którzy zdecydowali się na współpracę
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto relative">
          {/* Main testimonial card */}
          <div 
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative quote */}
              <div className="absolute -top-4 -left-4 text-[120px] text-[#C11369]/10 font-serif leading-none select-none">
                "
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="font-body text-l md:text-l text-gray-700 leading-relaxed mb-8">
                  {testimonials[currentIndex].content}
                </p>

              
                {/* Author */}
                <div className="flex items-center gap-4">
                {testimonials[currentIndex].image ? (
                    <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].company}
                    className="w-12 h-12 rounded-full object-contain bg-white border border-gray-200"
                    />
                ) : (
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C11369]/20 to-[#049FE3]/20 rounded-full flex items-center justify-center">
                    <span className="font-heading font-bold text-[#C11369] text-xl">
                        {testimonials[currentIndex].name.charAt(0)}
                    </span>
                    </div>
                )}
                <div>
                    <div className="font-heading font-bold text-[#333333] text-lg">
                    {testimonials[currentIndex].name}
                    </div>
                    <div className="font-body text-gray-600">
                    {testimonials[currentIndex].company}
                    </div>
                </div>
                </div>
              </div>

              {/* Gradient decoration */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#049FE3]/10 to-transparent rounded-tl-full" />
            </div>
          </div>

          {/* Navigation buttons - hidden on mobile, visible on desktop */}
          <button
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full mr-4 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:shadow-xl transition-all group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-[#C11369] transition-colors" />
          </button>
          
          <button
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-full ml-4 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center hover:shadow-xl transition-all group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-[#C11369] transition-colors" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 h-2 bg-gradient-to-r from-[#C11369] to-[#049FE3]' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                } rounded-full`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default TestimonialsSection;