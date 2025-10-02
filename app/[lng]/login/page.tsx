"use client";

import { useState } from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { username, password });
    if (username && password) {
      router.push("/feature/demo");
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="w-full max-w-sm min-w-64 border-slate-200 bg-white/60 py-4 shadow-xl backdrop-blur-sm">
        <CardContent className="px-8">
          {/* Logo */}
          <div className="mb-4 flex justify-center">
            <Image src="/images/logo.png" alt="Logo" width={160} height={160} />
          </div>

          {/* Brand */}
          <div className="mb-6 text-center">
            <h1 className="mb-1 text-2xl font-bold tracking-wider text-yellow-600">
              GRAND EMPIRE
            </h1>
            {/* <p className="text-sm text-yellow-600/80 mb-3">Beyond Grand</p> */}
            <p className="mb-2 text-base text-slate-800">AI 投資銀行機器人</p>
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
                className="border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-500 focus:border-yellow-500 focus:ring-yellow-500/20"
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
                className="border-slate-300 bg-slate-50 text-slate-900 placeholder:text-slate-500 focus:border-yellow-500 focus:ring-yellow-500/20"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-neutral-900/80 py-3 font-medium text-white transition-all duration-200 hover:from-cyan-600 hover:to-orange-600"
            >
              <span className="mr-2">→</span>
              登入系統
            </Button>

            <div className="text-center">
              <a
                href="#"
                className="text-sm text-cyan-600 transition-colors hover:text-cyan-700"
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
