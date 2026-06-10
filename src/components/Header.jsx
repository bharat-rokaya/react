const Header = () => {
    return (
        <nav className="flex justify-between items-center rounded-md bg-fuchsia-200 px-2 py-1 mx-8 my-4 rgb(241 206 248)">
            <h1 className="text-xl font-semibold text-fuchsia-600 hover:text-fuchsia-700">Aestic</h1>
            <div className="flex items-center space-x-4">
                <ul className="flex text-fuchsia-600 items-center space-x-4">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Contact</a>
                </ul>
                <button className="bg-fuchsia-500 outline-none text-white px-2 py-1 rounded-md cursor-pointer hover:bg-fuchsia-600">Join Us</button>
            </div>
        </nav>
    )
}

export default Header