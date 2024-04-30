import { useEffect, useState } from 'react';
import './theme-switcher.css';

type ThemeMode = "dark" | "light";

export const ThemeSwitcher = () => {
  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem("currentTheme") as ThemeMode || (isSystemDark ? "dark" : "light");
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(savedTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme])

  const handleSwitchTheme = () => {
    const theme = currentTheme == "dark" ? "light" : "dark"
    setCurrentTheme(theme);
    localStorage.setItem("currentTheme", theme);
  }

  return (
    <div className="btn-container">
      <label className="btn-color-mode-switch">
        <input type="checkbox" name="color_mode" id="color_mode" value="1" onChange={handleSwitchTheme} defaultChecked={currentTheme == "dark"} />
        <label htmlFor="color_mode" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner"></label>
      </label>
    </div>
  );
};

