
import { MapPin, Navigation } from 'lucide-react';
import { HACKATHON_LOCATION, HACKATHON_ADDRESS } from '@/lib/constants';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';

const VenueSection = () => {
  const [titleRef, titleVisible] = useElementOnScreen({ threshold: 0.2, once: true });
  const [contentRef, contentVisible] = useElementOnScreen({ threshold: 0.1, once: true });

  return (
    <section id="venue" className="relative py-20 bg-hackathon-darker">
      <div className="container-section">
        <div 
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">Event Venue</h2>
          <p className="subtitle">
            Join us at EASA College of Engineering & Technology
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="space-y-8">
            <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-hackathon-primary/10 text-hackathon-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{HACKATHON_LOCATION}</h3>
                  <p className="text-hackathon-muted mb-4">{HACKATHON_ADDRESS}</p>
                  <a 
                    href="https://maps.app.goo.gl/CYQh6zSYNVhu3b2N6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-hackathon-primary hover:text-hackathon-primary/80 transition-colors"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-white">About the Venue</h3>
              <p className="text-hackathon-muted mb-4">
                EASA College of Engineering & Technology (ECET) is an autonomous institution providing state-of-the-art facilities for events and technical activities. The campus offers a perfect environment for innovation and collaboration.
              </p>
              <ul className="space-y-3 text-hackathon-muted">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-hackathon-primary"></span>
                  High-speed WiFi throughout the venue
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-hackathon-primary"></span>
                  Dedicated workspaces with power outlets
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-hackathon-primary"></span>
                  Modern labs and auditoriums
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-hackathon-primary"></span>
                  Complimentary meals and refreshments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
