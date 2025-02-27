
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';

const images = [
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg',
  '/placeholder.svg'
];

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [titleRef, titleVisible] = useElementOnScreen({ threshold: 0.2, once: true });
  const [textRef, textVisible] = useElementOnScreen({ threshold: 0.2, once: true });
  const [carouselRef, carouselVisible] = useElementOnScreen({ threshold: 0.2, once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="relative py-20 bg-hackathon-dark">
      <div className="container-section">
        <div 
          ref={titleRef} 
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">About TechSpark</h2>
          <p className="subtitle">
            Join us for an unforgettable weekend of innovation, collaboration, and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={textRef}
            className={`transition-all duration-700 delay-200 ${
              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-6 text-hackathon-light/90">
              <p>
                TechSpark 2024 is the premier collegiate hackathon that brings together the brightest minds from universities across the nation. Over three intensive days, participants will collaborate, innovate, and create technological solutions to real-world problems.
              </p>
              <p>
                Whether you're a coding expert, a design enthusiast, or someone with great ideas, TechSpark welcomes all skill levels and backgrounds. Our hackathon provides a supportive environment where you can learn new skills, network with industry professionals, and push the boundaries of what's possible.
              </p>
              <p>
                With mentorship from industry experts, workshops on cutting-edge technologies, and opportunities to connect with potential employers, TechSpark is more than just a competition—it's a launchpad for your career in technology.
              </p>
              
              <div className="pt-4">
                <a href="/register" className="btn-primary">
                  Join the Experience
                </a>
              </div>
            </div>
          </div>
          
          <div 
            ref={carouselRef}
            className={`transition-all duration-700 delay-400 ${
              carouselVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative glass rounded-xl overflow-hidden aspect-video">
              <div className="absolute inset-0 flex">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Hackathon event photo ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-2 transition-all hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 glass rounded-full p-2 transition-all hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage 
                        ? 'bg-hackathon-primary w-6' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
