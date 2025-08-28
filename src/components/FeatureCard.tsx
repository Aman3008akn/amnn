import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  onClick?: () => void;
}

export const FeatureCard = ({ icon, title, onClick }: FeatureCardProps) => {
  return (
    <Card 
      className="bg-gradient-card shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group animate-scale-in border-0"
      onClick={onClick}
    >
      <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4 min-h-[200px]">
        <div className="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
          <img 
            src={icon} 
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
      </CardContent>
    </Card>
  );
};