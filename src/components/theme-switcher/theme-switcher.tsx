import { Switch } from "antd";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import "./theme-switcher.css";
import { useTheme } from "../utilities/useTheme";

export const ThemeSwitcher = () => {
  const [currentTheme, , toggleTheme] = useTheme();

  return (
    <div className="btn-container">
      <Switch
        checked={currentTheme === "light"}
        onChange={toggleTheme}
        checkedChildren={<SunOutlined />}
        unCheckedChildren={<MoonOutlined />}
      />
    </div>
  );
};

export default ThemeSwitcher;
