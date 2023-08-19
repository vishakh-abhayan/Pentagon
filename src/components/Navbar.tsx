import { Link, Outlet } from "react-router-dom";
import ConnectWalletButton from "../components/ConnectWalletButton";

function Navbar() {
  return (
    <div
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div>
        <img src=""></img>
      </div>
      <div>
        <div>
          <nav>
            <ul className="flex lg:flex-1">
              <li>
                <Link
                  className="text-sm font-semibold leading-6 text-white"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm font-semibold leading-6 text-white"
                  to="/community"
                >
                  Community
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div></div>
      </div>

      <ConnectWalletButton />

      <div></div>
      <Outlet />
    </div>
  );
}

export default Navbar;
