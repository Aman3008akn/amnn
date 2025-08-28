import { Button } from "@/components/ui/button";

export const ActionButtons = () => {
  const handleWhatsAppClick = () => {
    window.open("https://chat.whatsapp.com/BdS9ahia7duA2j0wRkDATP", "_blank");
  };

  const handleEarnOnlineClick = () => {
    window.open("https://wa.me/+923054122982?text=can+i+earn+with+you", "_blank");
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <Button variant="accent" size="lg" className="animate-fade-in" onClick={() => window.location.href = "/login"}>
        Login
      </Button>
      <Button variant="hero" size="lg" className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
        Video Demo
      </Button>
      <Button variant="default" size="lg" className="animate-fade-in" style={{ animationDelay: '0.2s' }} onClick={() => window.location.href = "/login"}>
        Buy Login
      </Button>
    </div>
  );
};
