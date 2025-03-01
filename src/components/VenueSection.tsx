
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
          className={`grid md:grid-cols-2 gap-8 items-center transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass rounded-xl overflow-hidden aspect-video shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.9848293256024!2d76.96890491206598!3d10.95971264560553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bc631d629fb%3A0x34aa28bc458c1524!2sEASA%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1708929612275!5m2!1sen!2sin" 
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
                    href="https://maps.google.com/?q=EASA+College+of+Engineering+and+Technology" 
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
