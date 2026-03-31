import { useState } from "react";
import { AuthForms } from "./auth.forms";

export default function AuthPage() {
  const [mode, setMode] = useState("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <AuthForms
        mode={mode}
        onToggleMode={() =>
          setMode(mode === "login" ? "signup" : "login")
        }
      />
    </div>
  );
}