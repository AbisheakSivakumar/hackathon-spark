
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationForm from "@/components/RegistrationForm";

const Registration = () => {
  return (
    <>
      <Helmet>
        <title>Register | Hackastorm</title>
        <meta name="description" content="Register for Hackastorm - the premier hackathon event" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container-section">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
              Register for Hackastorm
            </h1>
            <p className="text-xl text-hackathon-muted mb-12 text-center max-w-2xl mx-auto">
              Join us for an exciting weekend of innovation, collaboration, and problem-solving.
            </p>
            
            <RegistrationForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Registration;
