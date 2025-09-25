"use client";

import { useState } from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { username, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white/90 border-slate-200 backdrop-blur-sm shadow-xl">
        <CardContent className="p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image src="/images/logo.png" alt="Logo" width={160} height={160} />
          </div>

          {/* Brand */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-yellow-600 tracking-wider mb-1">
              GRAND EMPIRE
            </h1>
            {/* <p className="text-sm text-yellow-600/80 mb-3">Beyond Grand</p> */}
            <p className="text-slate-800 text-base mb-2">AI投行機器人</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-slate-700">
                帳號
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="請輸入帳號"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-yellow-500 focus:ring-yellow-500/20"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700">
                密碼
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="請輸入密碼"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="bg-slate-50 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-yellow-500 focus:ring-yellow-500/20"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-600 hover:to-orange-600 text-white font-medium py-3 transition-all duration-200"
            >
              <span className="mr-2">→</span>
              登入系統
            </Button>

            <div className="text-center">
              <a
                href="#"
                className="text-cyan-600 hover:text-cyan-700 text-sm transition-colors"
              >
                忘記密碼？
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
