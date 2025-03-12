// PAGINA CON FORM DI REGISTRAZIONE ALL'APPLICAZIONE, SI ARRIVA PREMENDO NEXT DALLA PAGINA REGISTER DELLE CREDENZIALI

import FormAccessData from "../Components/Organisms/FormAccessData.jsx";
import GuestHeader from "../Components/Organisms/GuestHeader.jsx";
import GuestLayout from "../Layout/GuestLayout.jsx";

export default function AccessData() {
    return (

        <>

            <GuestLayout>

                <div className="h-screen bg-bianco flex flex-col justify-between p-8 ">

                    <div>

                        <GuestHeader

                            img="/src/assets/media/welcome-header.png"
                        >

                            <span className="text-accento">R</span>egister
                        </GuestHeader>

                        <FormAccessData></FormAccessData>

                    </div>
                </div>

            </GuestLayout>
        </>

    )

}