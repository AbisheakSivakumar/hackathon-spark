import { useState } from 'react';
import { Mail, Phone, Send, AlertCircle, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { CONTACT_INFO } from '@/lib/constants';
import { useElementOnScreen } from '@/hooks/useElementOnScreen';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [titleRef, titleVisible] = useElementOnScreen({ threshold: 0.2, once: true });
  const [formRef, formVisible] = useElementOnScreen({ threshold: 0.1, once: true });
  const [infoRef, infoVisible] = useElementOnScreen({ threshold: 0.1, once: true });

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
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 bg-hackathon-dark">
      <div className="absolute inset-0 bg-grid-pattern bg-fixed opacity-10"></div>
      
      <div className="container-section relative z-10">
        <div 
          ref={titleRef}
          className={`transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="section-heading">Contact Us</h2>
          <p className="subtitle">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div 
            ref={formRef}
            className={`transition-all duration-700 delay-200 ${
              formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-6 md:p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-hackathon-light mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
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
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
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
                  <label htmlFor="message" className="block text-sm font-medium text-hackathon-light mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-md bg-hackathon-darker border ${
                      errors.message ? 'border-red-500' : 'border-hackathon-primary/20'
                    } focus:border-hackathon-primary focus:outline-none transition-colors resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>

          <div 
            ref={infoRef}
            className={`transition-all duration-700 delay-400 ${
              infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="space-y-8">
              <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-white">Faculty Coordinator</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-hackathon-primary/10 text-hackathon-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-hackathon-muted mb-1">Email</p>
                      <a 
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-hackathon-light hover:text-hackathon-primary transition-colors"
                      >
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-hackathon-primary/10 text-hackathon-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-hackathon-muted mb-1">Phone</p>
                      <a 
                        href={`tel:${CONTACT_INFO.phone}`}
                        className="text-hackathon-light hover:text-hackathon-primary transition-colors"
                      >
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-white">Student Coordinators</h3>
                
                <div className="space-y-4">
                  {CONTACT_INFO.coordinators?.map((coordinator, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-hackathon-primary/10 text-hackathon-primary">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-hackathon-muted mb-1">{coordinator.name}</p>
                        <a 
                          href={`tel:${coordinator.phone}`}
                          className="text-hackathon-light hover:text-hackathon-primary transition-colors"
                        >
                          {coordinator.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6 text-white">Connect With Us</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {CONTACT_INFO.socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md bg-hackathon-darker hover:bg-hackathon-primary/10 transition-all duration-300"
                    >
                      <div className="p-2 rounded-full bg-hackathon-primary/10 text-hackathon-primary">
                        <span className="sr-only">{social.name}</span>
                        {social.name === "Instagram" && <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>}
                        {social.name === "X" && <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>}
                        {social.name === "LinkedIn" && <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                        {social.name === "Facebook" && <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>}
                      </div>
                      <span className="text-hackathon-light">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
