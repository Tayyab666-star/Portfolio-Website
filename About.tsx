import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Expertise",
      description: "Specialized in developing generative AI applications and prompt engineering solutions"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Critical thinking and logical reasoning to tackle complex AI challenges"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Leading AI engineering teams and driving technical innovation"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Harvard CS50 2025 top performer and AI hackathon winner"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile image */}
          <div className="flex justify-center lg:justify-start animate-slide-up">
            <div className="relative">
              <img 
                src="/lovable-uploads/399cd409-7737-455f-9df5-f1ba54ed6fa7.png"
                alt="Tayyab Nisar - Professional Photo" 
                className="w-80 h-80 object-cover rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face";
                }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10"></div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Bridging Ideas and Implementation
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Most AI projects struggle not because of bad models—but because of 
                unclear prompts, misaligned use cases, and slow implementation.
              </p>
              
              <p>
                I help fix that by bringing clarity, speed, and technical depth to your AI stack.
              </p>
              
              <p>
                I'm a <strong className="text-primary">Certified Generative AI Application Developer</strong> and 
                <strong className="text-primary"> Prompt Engineer</strong>. Specialist focused on building scalable, and 
                outcome-driven GenAI solutions. From LLM-based chatbots and agents to automated tools and internal systems, 
                I help teams move from experimentation to real-world impact.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-foreground mb-4">What I bring:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">GenAI App Development</Badge>
                <Badge variant="secondary">OpenAI, Claude, Gemini, Llama</Badge>
                <Badge variant="secondary">Prompt Engineering</Badge>
                <Badge variant="secondary">RAG Systems</Badge>
                <Badge variant="secondary">Vector Databases</Badge>
                <Badge variant="secondary">Production-ready Workflows</Badge>
              </div>
            </div>

            <div className="mt-8 p-6 bg-card rounded-lg border border-border shadow-card">
              <p className="text-foreground font-medium">
                "Let's build AI that works—not just demos."
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Connect to explore how I can support your next GenAI move.
              </p>
            </div>
          </div>

          {/* Right side - Highlights grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
