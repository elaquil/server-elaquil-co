import { useContext, useEffect, useState } from "react";
import TickerButton from "./TickerButton";
import ThemeContext from "../context/ThemeContext";

const ThemeToggle = () => {
  const themeProviderItems = useContext(ThemeContext);
  const { theme, toggleTheme } = themeProviderItems;

  const [innerText, setInnerText] = useState('LIGHTS OFF');

  const changeTheme = () => {
    if (innerText === 'LIGHTS OFF') {
      setInnerText('LIGHTS ON');
      toggleTheme();
    } else {
      setInnerText('LIGHTS OFF');
      toggleTheme();
    }
  };
  
  useEffect(() => {
    if (theme === 'dark') {
      setInnerText('LIGHTS ON');
    }
  }, []);
  
  return(
    <span onClick={changeTheme}>
      <TickerButton anchor="#" buttonText={innerText}/>
    </span>
  );
}

export default ThemeToggle;