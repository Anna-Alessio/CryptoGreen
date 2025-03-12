// BOTTONE MENU PROFILE COLORE NERO

import { Link } from "react-router-dom";
import TextLg from "../Atoms/TextLg.jsx";
import ArrowRight from "../Atoms/ArrowRight.jsx";

export default function ButtonBlock({ text, to = "#" }) {

    return (

        <>

            <Link to={to} className="h-16 shadow-lg text-white flex justify-between items-center px-4 rounded-2xl bg-black ">
                <TextLg className="font-bold">{text}</TextLg>
                <ArrowRight />
            </Link>

        </>
    )
}