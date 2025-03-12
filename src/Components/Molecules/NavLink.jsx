// NAVLINK MENU VERDE IN BASSO

import { NavLink as Link } from "react-router-dom";
import TextSM from "../Atoms/TextSM.jsx";


export default function NavLink({ text, icon, to = "#" }) {

    return (

        <>

            <Link to={to} className='flex flex-col items-center'>
                {icon}
                <TextSM className="font-bold uppercase">{text}</TextSM>
            </Link>

        </>
    )
}
