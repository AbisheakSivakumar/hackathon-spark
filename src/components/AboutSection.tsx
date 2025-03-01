
import { useElementOnScreen } from '@/hooks/useElementOnScreen';
import { REGISTRATION_FEE } from '@/lib/constants';

const AboutSection = () => {
  const [titleRef, titleVisible] = useElementOnScreen({ threshold: 0.2, once: true });
  const [textRef, textVisible] = useElementOnScreen({ threshold: 0.2, once: true });
  const [imageRef, imageVisible] = useElementOnScreen({ threshold: 0.2, once: true });

  return (
    <section id="about" className="relative py-20 bg-hackathon-dark">
      <div className="container-section">
        <div 
          ref={titleRef} 
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">About Hackastorm</h2>
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
                Hackastorm 2K25 is the premier collegiate hackathon hosted by EASA College of Engineering & Technology (ECET). Over <span className="text-hackathon-primary font-semibold">three intensive days</span>, participants will collaborate, innovate, and create technological solutions to real-world problems.
              </p>
              <p>
                Whether you're a coding expert, a design enthusiast, or someone with great ideas, Hackastorm welcomes all skill levels and backgrounds. Our hackathon provides a supportive environment where you can learn new skills, network with industry professionals, and push the boundaries of what's possible.
              </p>
              <p>
                With mentorship from industry experts, workshops on cutting-edge technologies, and opportunities to connect with potential employers, Hackastorm is more than just a competition—it's a launchpad for your career in technology.
              </p>
              <p className="text-hackathon-primary font-medium mt-6">
                Registration fee: {REGISTRATION_FEE}
              </p>
              
              <div className="pt-4">
                <a href="/register" className="btn-primary">
                  Join the Experience
                </a>
              </div>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className={`transition-all duration-700 delay-400 ${
              imageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative glass rounded-xl overflow-hidden aspect-video">
              <img
                src="/placeholder.svg"
                alt="Hackathon participants collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hackathon-darker/80 to-transparent flex items-end">
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {[1, 2, 3].map(day => (
                      <div key={day} className="px-4 py-2 bg-hackathon-primary/20 backdrop-blur-sm rounded-lg">
                        <span className="text-hackathon-primary font-semibold">Day {day}</span>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white">Three Days of Intense Innovation</h3>
                  <p className="text-hackathon-light/80 mt-2">Coding, Workshops, Networking & Fun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
