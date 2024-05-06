import './theme-switcher.css';
import { useTheme } from '../utilities/useTheme';


export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useTheme();

  const handleSwitchTheme = () => {
    setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="btn-container">
      <label className="btn-color-mode-switch">
        <input
          type="checkbox"
          id="toggle"
          onChange={handleSwitchTheme}
          checked={currentTheme === 'dark'}
        />
        <label htmlFor="toggle" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner"></label>
      </label>
    </div>
  );
};

