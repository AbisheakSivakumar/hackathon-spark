
import { SCHEDULE_ITEMS } from '@/lib/constants';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';
import { Clock, Calendar } from 'lucide-react';
import { useState } from 'react';

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [titleRef, titleVisible] = useElementOnScreen({ threshold: 0.2, once: true });
  const [contentRef, contentVisible] = useElementOnScreen({ threshold: 0.1, once: true });

  return (
    <section id="schedule" className="relative py-20 bg-gradient-to-b from-hackathon-darker to-hackathon-dark">
      <div className="container-section">
        <div 
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">Event Schedule</h2>
          <p className="subtitle">
            Three days of innovation, learning, and collaboration
          </p>
        </div>

        <div
          ref={contentRef}
          className={`transition-all duration-700 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-10 overflow-x-auto">
            <div className="flex space-x-4">
              {SCHEDULE_ITEMS.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`px-6 py-3 rounded-md transition-all duration-300 ${
                    activeDay === index
                      ? 'bg-hackathon-primary text-white shadow-lg shadow-hackathon-primary/20'
                      : 'bg-hackathon-dark/50 text-white/70 hover:bg-hackathon-dark hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{day.day}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            {SCHEDULE_ITEMS.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={`transition-all duration-500 ${
                  activeDay === dayIndex ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <div className="mb-6 text-center">
                  <p className="text-xl text-hackathon-primary font-semibold">{day.date}</p>
                </div>
                
                <div className="timeline">
                  {day.events.map((event, eventIndex) => (
                    <div 
                      key={eventIndex} 
                      className="timeline-item"
                      style={{ 
                        animationDelay: `${eventIndex * 100}ms`,
                        animation: activeDay === dayIndex ? 'fade-in-up 0.5s forwards' : 'none',
                        opacity: 0
                      }}
                    >
                      <div className="glass rounded-lg p-6 transform transition-transform duration-300 hover:scale-[1.02] hover:bg-white/10">
                        <div className="flex items-start gap-4">
                          <div className="min-w-20 text-hackathon-primary font-mono flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                            <p className="text-hackathon-muted">{event.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
