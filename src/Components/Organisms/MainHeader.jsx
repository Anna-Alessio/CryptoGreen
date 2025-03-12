// HEADER DEL WALLET

import ProfileImage from "../Atoms/ProfileImage.jsx";
import "../../App.css";


export default function MainHeader({ title, subtitle }) {
    return (

        <>

            <header className="flex justify-between py-1 p-6">
                <div className="content-center items-center">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <h2 className="text-secondario text-xl">{subtitle}</h2>
                </div>
                <ProfileImage />
            </header>


        </>

    )
}
