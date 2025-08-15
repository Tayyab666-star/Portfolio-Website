import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Github, Linkedin, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(34, 131, 153, 0.9), rgba(34, 153, 84, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-glow/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent-glow/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 lg:px-8 text-center text-white relative z-10">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/399cd409-7737-455f-9df5-f1ba54ed6fa7.png"
                alt="Tayyab Nisar - AI Developer" 
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
                }}
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Tayyab</span>
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Nisar
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl mb-8 animate-slide-up">
            <p className="font-light">Generative AI Application Developer</p>
            <p className="text-lg opacity-90 mt-2">Expert Prompt Engineer | AI Innovator</p>
          </div>

          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Transforming innovative AI concepts into real-world solutions. 
            Specialized in developing cutting-edge LLM applications and scalable AI products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-glow"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a href="mailto:tnasir536@gmail.com" className="text-white hover:text-primary-glow transition-colors duration-300 hover:scale-110 transform">
              <Mail size={24} />
            </a>
            <a href="https://github.com/Tayyab666-star/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-glow transition-colors duration-300 hover:scale-110 transform">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/tayyabnisartn066/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-glow transition-colors duration-300 hover:scale-110 transform">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary-glow transition-all duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
