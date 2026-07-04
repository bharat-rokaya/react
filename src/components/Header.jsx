import { LogOut, UserPlus } from "lucide-react";;

const Header = () => {
    let isLoggedIn = false;
    return (
        <nav className="flex justify-between items-center rounded-md bg-fuchsia-200 pl-4 pr-3 py-2 mx-12 my-4">
            <h1 className="text-xl font-semibold text-fuchsia-600 hover:text-fuchsia-700">Aestic</h1>
            <div className="flex items-center space-x-4">
                <ul className="flex text-fuchsia-600 items-center space-x-4">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <button className="flex  items-center gap-1 bg-fuchsia-500 outline-none text-white px-2 py-2 rounded-md cursor-pointer hover:bg-fuchsia-600">{isLoggedIn ? " Logout" : " Join Us"}{isLoggedIn ? <LogOut size={18} /> : <UserPlus size={18} />}
                </button>
            </div>
        </nav>
    )
}

export default Header