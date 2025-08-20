import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function AuthPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 sm:p-8">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-white">
          Welcome to Mentation Technologies
        </h1>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          {/* LOGIN FORM */}
          <TabsContent value="login">
            <form className="space-y-4 mt-4">
              <div>
                <Label htmlFor="login-email">Email</Label>
                <Input
                  type="email"
                  id="login-email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="login-password">Password</Label>
                <Input
                  type="password"
                  id="login-password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <Button type="submit" className="w-full mt-2">
                Login
              </Button>
            </form>
          </TabsContent>

          {/* REGISTER FORM */}
          <TabsContent value="register">
            <form className="space-y-4 mt-4">
              <div>
                <Label htmlFor="register-name">Full Name</Label>
                <Input
                  type="text"
                  id="register-name"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="register-email">Email</Label>
                <Input
                  type="email"
                  id="register-email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <Label htmlFor="register-password">Password</Label>
                <Input
                  type="password"
                  id="register-password"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div>
                <Label htmlFor="register-confirm-password">Confirm Password</Label>
                <Input
                  type="password"
                  id="register-confirm-password"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <Button type="submit" className="w-full mt-2">
                Register
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
