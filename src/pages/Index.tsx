import { Header } from "@/components/Header";
import { ActionButtons } from "@/components/ActionButtons";
import { FeatureCard } from "@/components/FeatureCard";
import { Disclaimer } from "@/components/Disclaimer";

// Import original icons from the website
import loginIcon from "@/assets/original-login-icon.jpeg";
import buyIcon from "@/assets/original-buy-icon.png";
import whatsappIcon from "@/assets/original-whatsapp-icon.webp";
import toolsIcon from "@/assets/original-tools-icon.png";
import videoIcon from "@/assets/original-video-icon.png";
import earnIcon from "@/assets/original-earn-icon.png";

const Index = () => {
  const features = [
    {
      icon: loginIcon,
      title: "Login",
      action: () => window.location.href = "/login"
    },
    {
      icon: buyIcon,
      title: "Buy Login",
      action: () => window.location.href = "/login"
    },
    {
      icon: whatsappIcon,
      title: "Join Group",
      action: () => window.open("https://chat.whatsapp.com/BdS9ahia7duA2j0wRkDATP", "_blank")
    },
    {
      icon: toolsIcon,
      title: "Tools Demo",
      action: () => window.location.href = "/tools-demo"
    },
    {
      icon: videoIcon,
      title: "Video Demo",
      action: () => window.open("https://famofcfallxd.serv00.net/video%20demo.html", "_blank")
    },
    {
      icon: earnIcon,
      title: "Earn Online",
      action: () => window.open("https://wa.me/+923054122982?text=can+i+earn+with+you", "_blank")
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4">
        <ActionButtons />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                onClick={feature.action}
              />
            </div>
          ))}
        </div>
      </main>

      <Disclaimer />
    </div>
  );
};

export default Index;
