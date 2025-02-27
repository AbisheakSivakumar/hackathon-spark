
import { ArrowRight } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import AnimatedBackground from './AnimatedBackground';
import { HACKATHON_NAME, HACKATHON_TAGLINE, HACKATHON_DATE } from '@/lib/constants';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';

const HeroSection = () => {
  const [titleRef, titleVisible] = useElementOnScreen({ threshold: 0.2, once: true });
  const [taglineRef, taglineVisible] = useElementOnScreen({ threshold: 0.2, once: true });
  const [ctaRef, ctaVisible] = useElementOnScreen({ threshold: 0.2, once: true });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <AnimatedBackground />
      
      <div className="absolute inset-0 z-0 bg-grid-pattern bg-fixed opacity-20"></div>
      
      <div className="container-section relative z-10 flex flex-col items-center justify-center text-center">
        <div 
          ref={titleRef}
          className={`transition-all duration-700 delay-100 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight">
            <span className="text-hackathon-primary">{HACKATHON_NAME.split(' ')[0]}</span>
            <span className="text-white"> {HACKATHON_NAME.split(' ')[1]}</span>
          </h1>
        </div>
        
        <div 
          ref={taglineRef}
          className={`max-w-2xl mx-auto mb-8 transition-all duration-700 delay-300 ${
            taglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xl md:text-2xl text-hackathon-light/90 font-light">
            {HACKATHON_TAGLINE}
          </p>
          <div className="mt-8 mb-12">
            <CountdownTimer targetDate={HACKATHON_DATE} />
          </div>
        </div>
        
        <div 
          ref={ctaRef}
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="/register" 
            className="btn-primary group text-base md:text-lg"
          >
            Register Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a 
            href="#about" 
            className="btn-outline"
          >
            Learn More
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hackathon-darker to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
