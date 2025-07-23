import React from "react";
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="flex min-h-svh flex-col items-center justify-center">
        <Button>Click me</Button>
      </div>
    </>
  );
}
