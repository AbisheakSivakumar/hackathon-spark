
import { Trophy } from 'lucide-react';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';

const PrizesSection = () => {
  const [titleRef, titleVisible] = useElementOnScreen({ threshold: 0.2, once: true });
  const [cardsRef, cardsVisible] = useElementOnScreen({ threshold: 0.1, once: true });

  const prizes = [
    {
      title: "First Prize",
      value: "₹25,000",
      description: "Awarded to the overall best project that demonstrates technical excellence, innovation, and potential impact."
    },
    {
      title: "Second Prize",
      value: "₹15,000",
      description: "For the second-best overall project that shows strong technical skills and creative problem-solving."
    },
    {
      title: "Third Prize",
      value: "₹10,000",
      description: "For the third-best overall project that delivers a complete and well-executed solution."
    }
  ];

  return (
    <section id="prizes" className="relative py-20 bg-hackathon-dark">
      <div className="absolute inset-0 bg-grid-pattern bg-fixed opacity-10"></div>
      
      <div className="container-section relative z-10">
        <div 
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">Prizes & Rewards</h2>
          <p className="subtitle">
            Celebrating excellence and innovation with fantastic prizes
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`transition-all duration-700 delay-200 mt-12 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prizes.map((prize, index) => (
              <div 
                key={index}
                className="glass rounded-xl overflow-hidden group transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{prize.title}</h3>
                      <p className="text-3xl font-bold text-hackathon-primary">{prize.value}</p>
                    </div>
                    <div className="p-3 rounded-full bg-hackathon-primary/10 text-hackathon-primary">
                      <Trophy className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-hackathon-muted">{prize.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
