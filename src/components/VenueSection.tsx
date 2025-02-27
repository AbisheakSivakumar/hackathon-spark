
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
            Join us at our state-of-the-art innovation center
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass rounded-xl overflow-hidden aspect-video shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.1848285365703!2d-71.09170304872254!3d42.360528879077566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370a5cb30cc5f%3A0xc53a8e6489686c87!2sMassachusetts%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1654302745003!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Event location map"
              className="w-full h-full"
            ></iframe>
          </div>

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
                    href="https://maps.google.com/?q=MIT+Campus" 
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
              <h3 className="text-xl font-bold mb-4 text-white">Facilities Available</h3>
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
                  Resting areas with comfortable seating
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-hackathon-primary"></span>
                  Complimentary meals and snacks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-hackathon-primary"></span>
                  Technical support and hardware lending
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-hackathon-primary"></span>
                  Meeting rooms for team discussions
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
