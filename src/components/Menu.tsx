import DownloadIcon from "./Icons/DownloadIcon";


const Menu = () => {
    return (
        <div className="w-full flex justify-center h-screen md:h-24 items-center">
            <div className="w-full md:w-3/4 flex gap-10 justify-between items-center flex-col md:flex-row">
                <div className="d-inline-block text-lg font-semibold">
                    <ul className="flex gap-6 flex-col md:flex-row">
                        <li>About me</li>
                        <li>Skills</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <button className="bg-black hover:bg-gray-800 text-white font-semibold  py-2 px-4 rounded flex gap-2 items-center">
                    Resume <DownloadIcon />
                </button>
            </div>
        </div>
    )
};

export default Menu;