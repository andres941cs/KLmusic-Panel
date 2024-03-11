/* IMPORTACIONES */
import { SunIcon,MoonIcon } from "@radix-ui/react-icons";
import { useState,useEffect } from "react";
function Header() {
    // ASIGNAR A LA CONSTANTE EL TEMA GUARDADO O DEL SISTEMA
    const initialTheme = localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const [theme, setTheme] = useState(initialTheme);
    // CADA VEZ QUE SE RENDERIZE SE CAMBIA LA CLASE
    useEffect(()=>{
        document.documentElement.className = theme;
    }, [theme]);

    // CAMBIAR EL TEMA
    function changeTheme(){
        const newTheme = theme === "light" ? "dark" : "light";
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
        document.documentElement.className = newTheme;
    }

    return ( 
        // bg-white dark:bg-[#242424]
        <header className='h-12 grid border-b'>
            <button onClick={changeTheme} className="self-center justify-self-end hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 mx-2">
            {theme=="light" ? <SunIcon className="m-auto"/> : <MoonIcon className="m-auto"/>}
            </button>
        </header>
     );
}

export default Header;