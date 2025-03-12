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

            {/* <nav className="bg-accento text-white h-20 rounded-[30px] flex items-center justify-center gap-12">
                         <Link className='flex flex-col items-center'>

                              <Wallet />

                              <TextSM className="font-bold uppercase">Wallet</TextSM>
                         </Link>
                         <Link className='flex flex-col items-center'>

                              <Market />

                              <TextSM className="font-bold uppercase">Market</TextSM>
                         </Link>
                         <Link className='flex flex-col items-center'>

                              <Profile />

                              <TextSM className="font-bold uppercase">Profile</TextSM>
                         </Link>
                    </nav> */}



        </>
    )
}