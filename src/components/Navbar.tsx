import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex px-4 border-b md:shadow-lg items-center relative">
      <div className="text-lg font-bold md:py-0 py-4">Logo</div>
      <ul className="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0">
        <li>
          <Link
            to="/community"
            className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
          >
            <span>Communites</span>
          </Link>
        </li>
        <li>
          <Link
            to="/networks"
            className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
          >
            <span>Chats</span>
          </Link>
        </li>

        <li>
          <Link
            to="/resources"
            className="flex md:inline-flex p-4 items-center hover:bg-gray-50"
          >
            <span>Blogs</span>
          </Link>
        </li>
      </ul>
      <div className="ml-auto md:hidden text-gray-500 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
