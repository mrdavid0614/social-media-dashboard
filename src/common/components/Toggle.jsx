import { useThemeContext } from "../../contexts/theme"

export default function Toggle() {
    const { isDarkMode, setIsDarkMode } = useThemeContext();

    return (<div>
        <input
            type="checkbox"
            checked={isDarkMode}
            readOnly
            hidden
        />

        <div
            onClick={() => setIsDarkMode((prev) => !prev)}
            className={`h-8 w-14 p-1 rounded-full bg-gradient-to-r ${isDarkMode ? 'from-dodger-blue to-ufo-green' : 'bg-disabled-gray' }`}
        >
            <div className={`rounded-full w-1/2 h-full bg-yankees-blue transition-all delay-75 duration-500 ease-in-out ${isDarkMode ? '' : 'translate-x-full'}`}></div>
        </div>
    </div>)
}