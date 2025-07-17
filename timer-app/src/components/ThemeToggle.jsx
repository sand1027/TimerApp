import React from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Button onClick={toggleTheme} variant="outline">
      {theme === "light" ? <Moon /> : <Sun />}
      {theme === "light" ? " Dark Mode" : " Light Mode"}
    </Button>
  );
}
