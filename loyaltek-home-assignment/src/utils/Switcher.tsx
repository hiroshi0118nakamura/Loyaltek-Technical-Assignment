import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { AppActions, RootState } from "store";

export default function Switcher() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((store: RootState) => store.screen);
  const [theme, setTheme] = useState(darkMode);
  const colorTheme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    dispatch(AppActions.screen.changeDarkMode());
  }, [theme, colorTheme]);
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
    </>
  );
}
