import { Link } from "react-router-dom";

function DropdownMenu({currentPage, id, name, icon, link}) {
    return (
        <>
            <div>
                <button
                    key={id}
                    id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover"
                    data-dropdown-trigger="hover"
                    // Change color to white if navtab is active
                    className={currentPage === link[0] || currentPage === link[1] ? ' flex z-10 px-4 cursor-pointer capitalize font-medium text-white hover:opacity-60 hover:duration-150 ' : ' flex px-4 cursor-pointer capitalize font-medium text-gray-400 hover:opacity-60 hover:duration-150'}
                >
                    {name} {icon}
                </button>
                {/* Dropdown Menu */}
                <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                        <li>
                            <Link to={link[0]} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Overview</Link>
                        </li>
                        <li>
                            <Link to={link[1]} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Employment</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default DropdownMenu;
