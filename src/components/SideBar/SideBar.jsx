import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon,AlbumIcon,ArtistIcon,LogoutIcon } from "@assets/icons";
import { UsersIcon,MusicIcon,LyricIcon, KaraokeIcon } from "@assets/icons";
import { AuthContext } from "../../pages/Login/AuthContext";

function SideBar() {
    const [open,setOpen] = useState(true);
    const {logout} = useContext(AuthContext)
    return (
        <aside className={`top-0 left-0 h-full flex flex-col items-center bg-background dark:bg-background border border-r-0 w-12 ${open?"md:w-1/6":"w-12"}`}>
            <button className="p-2 text-foreground" onClick={()=>setOpen(!open)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>              
            </button>
            <img src="/logo.png" className="w-52 rounded invert dark:invert-0" alt="Logo" />
            <nav className={`w-full ${open?"md:px-6":"px-1"}`}>
                <ul role="list" className="flex items-center md:items-stretch flex-col">
                    <li>
                        <a href="/" className="flex gap-3 p-1 md:p-2 text-gray-400 font-semibold rounded-md hover:bg-slate-100">
                            <HomeIcon className="min-h-5 min-w-5 h-7 w-7"></HomeIcon>
                            <span className={`hidden my-auto ${open?"md:block":"md:hidden"}`}>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <Link to="/user" className="flex gap-3 p-1 md:p-2 text-gray-400 font-semibold rounded-md hover:bg-slate-100">
                            <UsersIcon className="min-h-5 min-w-5 h-7 w-7"></UsersIcon>
                            <span className={`hidden md:block my-auto ${open?"md:block":"md:hidden"}`}>Users</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/artist" className="flex gap-3 p-1 md:p-2 text-gray-400 font-semibold rounded-md hover:bg-slate-100">
                            <ArtistIcon className="min-h-5 min-w-5 h-7 w-7"></ArtistIcon>
                            <span className={`hidden md:block my-auto ${open?"md:block":"md:hidden"}`}>Artits</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/song" className="flex gap-3 p-1 md:p-2 text-gray-400 font-semibold rounded-md hover:bg-slate-100">
                            <MusicIcon className="min-h-5 min-w-5 h-7 w-7"></MusicIcon>
                            <span className={`hidden md:block my-auto ${open?"md:block":"md:hidden"}`}>Songs</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/album" className="flex gap-3 p-1 md:p-2 text-gray-400 font-semibold rounded-md hover:bg-slate-100">
                            <AlbumIcon className="min-h-5 min-w-5 h-7 w-7"></AlbumIcon>
                            <span className={`hidden md:block my-auto ${open?"md:block":"md:hidden"}`}>Album</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/lyric" className="flex gap-3 p-1 md:p-2 text-gray-400 font-semibold rounded-md hover:bg-slate-100">
                            <LyricIcon className="min-h-5 min-w-5 h-7 w-7"></LyricIcon>
                            <span className={`hidden md:block my-auto ${open?"md:block":"md:hidden"}`}>Lyrics</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/karaoke" className="flex gap-3 p-1 md:p-2 text-gray-400 font-semibold rounded-md hover:bg-slate-100">
                            <KaraokeIcon className="min-h-5 min-w-5 h-7 w-7"></KaraokeIcon>
                            <span className={`hidden md:block my-auto ${open?"md:block":"md:hidden"}`}>Karaoke</span>
                        </Link>
                    </li>
                    <li>
                        <button onClick={logout} to="/logout" className="flex gap-3 w-full p-1 md:p-2 text-gray-400 font-semibold rounded-md hover:bg-slate-100">
                            <LogoutIcon className="min-h-5 min-w-5 h-7 w-7"></LogoutIcon>
                            <span className={`hidden md:block my-auto ${open?"md:block":"md:hidden"}`}>Logout</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default SideBar;