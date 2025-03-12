// NAVBAR MENU IN BASSO

import Market from "../Atoms/Market.jsx";
import Profile from "../Atoms/Profile.jsx";
import Wallet from "../Atoms/Wallet.jsx";
import NavLink from "../Molecules/NavLink.jsx";

export default function Navbar() {

    return (

        <>
            <nav className="bg-accento text-bianco h-20 rounded-[30px] flex items-center justify-center gap-12">
                <NavLink to="/wallet" icon={<Wallet />} text="Wallet" />
                <NavLink to="/market" icon={<Market />} text="Market" />
                <NavLink to="/profile" icon={<Profile />} text="Profile" />
            </nav>

        </>
    )
}