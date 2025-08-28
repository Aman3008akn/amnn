import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ToolCard = ({ icon, title }) => (
  <Card className="flex flex-col items-center justify-center p-4 text-center bg-gray-800 text-white rounded-lg shadow-md">
    <img src={icon} alt={title} className="h-16 w-16 mb-2" />
    <p className="text-sm font-medium">{title}</p>
  </Card>
);

const ToolsDemo = () => {
  const tools = [
    { icon: "/src/assets/original-login-icon.jpeg", title: "Temp Mail" }, // Using a generic login icon
    { icon: "/src/assets/original-buy-icon.png", title: "Card Info" }, // Using a generic buy icon
    { icon: "/public/placeholder.svg", title: "TID predator" },
    { icon: "/public/placeholder.svg", title: "Fake Sms" },
    { icon: "/public/placeholder.svg", title: "Coming Soon" },
    { icon: "/public/placeholder.svg", title: "Coming Soon" },
    { icon: "/public/placeholder.svg", title: "Coming Soon" },
    { icon: "/public/placeholder.svg", title: "Coming Soon" },
    { icon: "/public/placeholder.svg", title: "Coming Soon" },
    { icon: "/public/placeholder.svg", title: "Pubg Hack" },
    { icon: "/public/placeholder.svg", title: "Free Netflix" },
    { icon: "/public/placeholder.svg", title: "Free Views" },
    { icon: "/public/placeholder.svg", title: "Payment Sms" },
    { icon: "/public/placeholder.svg", title: "IMEI Check" },
    { icon: "/public/placeholder.svg", title: "24hr RDP" },
    { icon: "/public/placeholder.svg", title: "Virus apk" },
    { icon: "/public/placeholder.svg", title: "Bot panel" },
    { icon: "/public/placeholder.svg", title: "Coming Soon" },
    { icon: "/public/placeholder.svg", title: "Fake Number" },
    { icon: "/public/placeholder.svg", title: "Insta Hack" },
    { icon: "/public/placeholder.svg", title: "FB Hack" },
    { icon: "/public/placeholder.svg", title: "Cnic Info" },
    { icon: "/public/placeholder.svg", title: "Dilms Check" },
    { icon: "/public/placeholder.svg", title: "Bill Check" },
    { icon: "/public/placeholder.svg", title: "Mobile Hack" },
    { icon: "/public/placeholder.svg", title: "Sim Database" },
    { icon: "/public/placeholder.svg", title: "Sms Bomber" },
    { icon: "/public/placeholder.svg", title: "Wifi Hack" },
    { icon: "/public/placeholder.svg", title: "1M Views" },
    { icon: "/src/assets/original-whatsapp-icon.webp", title: "Whatsapp hack" }, // Using whatsapp icon
    { icon: "/public/placeholder.svg", title: "Phishing" },
    { icon: "/public/placeholder.svg", title: "Location Trace" },
    { icon: "/public/placeholder.svg", title: "Free x suit" },
    { icon: "/public/placeholder.svg", title: "Craxs rat" },
    { icon: "/public/placeholder.svg", title: "Game hack" },
    { icon: "/public/placeholder.svg", title: "vehicle info" },
  ];

  return (
    <div className="min-h-screen bg-gray-700 text-white">
      <header className="w-full bg-green-700 text-white py-4 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">FAMOFC X K4LI Tools</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <ToolCard key={index} icon={tool.icon} title={tool.title} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ToolsDemo;
