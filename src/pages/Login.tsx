import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import loginHatIcon from "@/assets/login-hat-icon.jpeg";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <Card className="w-full max-w-md p-8 space-y-6 bg-gray-900 text-white rounded-lg shadow-lg">
        <CardHeader className="flex flex-col items-center">
          <div className="mb-4">
            <img src={loginHatIcon} alt="Login Icon" className="h-20 w-20" />
          </div>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input type="text" placeholder="Username" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
          <Input type="password" placeholder="Password" className="bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Login</Button>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Buy Login</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
