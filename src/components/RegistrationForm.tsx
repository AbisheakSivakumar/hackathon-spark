
import { useState } from 'react';
import { TRACKS } from '@/lib/constants';
import { ArrowLeft, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    teamName: '',
    track: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.replace(/[\s()-]/g, ''))) {
      newErrors.phone = "Phone number is invalid";
    }
    
    if (!formData.college.trim()) {
      newErrors.college = "College/Organization is required";
    }
    
    if (!formData.track) {
      newErrors.track = "Please select a track";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Registration Successful!",
        description: "You've successfully registered for TechSpark 2024.",
        duration: 5000,
      });
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="glass rounded-xl p-8 md:p-12 text-center max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-green-500/10 text-green-500">
            <CheckCircle2 className="h-10 w-10" />
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Registration Complete!</h2>
        <p className="text-hackathon-muted mb-8">
          Thank you for registering for TechSpark 2024. We've sent a confirmation email with all the details to your registered email address.
        </p>
        <div className="space-y-4">
          <a href="/" className="btn-primary w-full">
            Back to Home
          </a>
          <p className="text-sm text-hackathon-muted">
            If you have any questions, please contact us at <a href="mailto:contact@techspark2024.com" className="text-hackathon-primary hover:underline">contact@techspark2024.com</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-hackathon-light mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-4 py-3 rounded-md bg-hackathon-darker border ${
                errors.name ? 'border-red-500' : 'border-hackathon-primary/20'
              } focus:border-hackathon-primary focus:outline-none transition-colors`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.name}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-hackathon-light mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full px-4 py-3 rounded-md bg-hackathon-darker border ${
                errors.email ? 'border-red-500' : 'border-hackathon-primary/20'
              } focus:border-hackathon-primary focus:outline-none transition-colors`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.email}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-hackathon-light mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (123) 456-7890"
              className={`w-full px-4 py-3 rounded-md bg-hackathon-darker border ${
                errors.phone ? 'border-red-500' : 'border-hackathon-primary/20'
              } focus:border-hackathon-primary focus:outline-none transition-colors`}
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.phone}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="college" className="block text-sm font-medium text-hackathon-light mb-2">
              College/Organization <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="MIT"
              className={`w-full px-4 py-3 rounded-md bg-hackathon-darker border ${
                errors.college ? 'border-red-500' : 'border-hackathon-primary/20'
              } focus:border-hackathon-primary focus:outline-none transition-colors`}
            />
            {errors.college && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.college}
              </p>
            )}
          </div>
          
          <div>
            <label htmlFor="teamName" className="block text-sm font-medium text-hackathon-light mb-2">
              Team Name <span className="text-hackathon-muted text-xs">(Optional)</span>
            </label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              value={formData.teamName}
              onChange={handleChange}
              placeholder="Tech Wizards"
              className="w-full px-4 py-3 rounded-md bg-hackathon-darker border border-hackathon-primary/20 focus:border-hackathon-primary focus:outline-none transition-colors"
            />
            <p className="mt-1 text-xs text-hackathon-muted">
              Leave blank if registering individually.
            </p>
          </div>
          
          <div>
            <label htmlFor="track" className="block text-sm font-medium text-hackathon-light mb-2">
              Preferred Track <span className="text-red-500">*</span>
            </label>
            <select
              id="track"
              name="track"
              value={formData.track}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-md bg-hackathon-darker border ${
                errors.track ? 'border-red-500' : 'border-hackathon-primary/20'
              } focus:border-hackathon-primary focus:outline-none transition-colors`}
            >
              <option value="" disabled>Select a track</option>
              {TRACKS.map((track, index) => (
                <option key={index} value={track}>
                  {track}
                </option>
              ))}
            </select>
            {errors.track && (
              <p className="mt-1 text-sm text-red-500 flex items-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                {errors.track}
              </p>
            )}
          </div>
        </div>
        
        <div className="pt-4 space-y-4">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              required
              className="h-5 w-5 mt-1 rounded border-hackathon-primary/20 bg-hackathon-darker text-hackathon-primary focus:ring-hackathon-primary"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-hackathon-muted">
              I agree to the <a href="#" className="text-hackathon-primary hover:underline">Terms and Conditions</a> and <a href="#" className="text-hackathon-primary hover:underline">Privacy Policy</a>
            </label>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <a href="/" className="btn-outline flex items-center justify-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </a>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex-1 flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Complete Registration"
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
