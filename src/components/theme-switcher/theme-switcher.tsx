import './theme-switcher.css';
import { useTheme } from '../utilities/useTheme';


export const ThemeSwitcher = () => {
  const [currentTheme,,toggleTheme] = useTheme();

  return (
    <div className="btn-container">
      <label className="btn-color-mode-switch">
        <input
          type="checkbox"
          id="toggle"
          onChange={toggleTheme}
          checked={currentTheme === 'dark'}
        />
        <label htmlFor="toggle" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner"></label>
      </label>
    </div>
  );
};

