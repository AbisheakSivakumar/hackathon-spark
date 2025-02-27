
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className = '' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        setIsActive(false);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isActive) {
    return (
      <div className={`flex items-center justify-center text-center ${className}`}>
        <div className="rounded-md bg-hackathon-primary/10 px-6 py-4 flex items-center gap-2">
          <Clock className="h-5 w-5 text-hackathon-primary" />
          <span className="text-hackathon-light font-medium">Event has started!</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <div className="flex justify-center items-center gap-2 mb-2">
        <Clock className="h-5 w-5 text-hackathon-primary" />
        <span className="text-sm font-medium text-hackathon-muted">Countdown to Launch</span>
      </div>
      <div className="flex justify-center space-x-4 text-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col glass rounded-lg p-3 min-w-20 transition-all duration-300 hover:bg-white/10"
          >
            <span className="text-2xl md:text-3xl font-bold text-hackathon-primary">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-xs font-medium text-hackathon-muted uppercase tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
