import { IoMoonOutline } from "react-icons/io5";
import { ThemeContext } from "../Context/DarkModeContext";
import { useContext } from "react";

const Header = () => {

  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div className="flex justify-between bg-white dark:bg-darkBlueElements dark:text-white place-items-center p-4 md:px-14 py-6 shadow-md">
        <div className="font-bold text-lg">
            Where in the world?
        </div>

        <div onClick={toggleTheme} className={`flex items-center hover:cursor-pointer p-4 `}>
            <IoMoonOutline className="pr-1"/>
            {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
        </div>
    </div>
  )
}

export default Header