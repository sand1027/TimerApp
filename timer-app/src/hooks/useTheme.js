import useStorage from "./useStorage";

export default function useTheme() {
  const [theme, setTheme] = useStorage("theme", "light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return { theme, toggleTheme };
}
