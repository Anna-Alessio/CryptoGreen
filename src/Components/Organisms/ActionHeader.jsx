// ACTION HEADER PER IL TITOLO CON IL COLORE DI ACCENTO + IMMAGINE PROFILO + FRECCIA INDIETRO

import BackButton from "../Atoms/BackButton.jsx";
import ProfileImage from "../Atoms/ProfileImage.jsx";


export default function ActionHeader({ title }) {
    function renderTitle() {
        if (title) {
            return <h1 className="text-[2.75rem] font-bold mt-5 h-8">
                <span className="text-accento">{title[0]}</span>{title.slice(1)}</h1>
        }
    }

    return (

        <>

            <header>
                <div className="flex items-center justify-between">

                    <BackButton />

                    <ProfileImage />


                </div>

                <div className="text-center">
                    {renderTitle()}
                </div>
            </header>

        </>
    )
}