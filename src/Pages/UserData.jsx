// PAGINA DI RICHIESTA DI CREDENZIALI A CUI SI ACCEDE PREMENDO SULLA PAGINA PRINCIPALE "SIGN UP"

import FormUserData from "../Components/Organisms/FormUserData.jsx";
import GuestLayout from "../Layout/GuestLayout.jsx";
import GuestHeader from "../Components/Organisms/GuestHeader.jsx";

export default function UserData() {


    return (

        <>

            <GuestLayout>
                <GuestHeader img="/src/assets/media/welcome-header.png">

                    <span className="text-accento">R</span>egister

                </GuestHeader>
                <FormUserData></FormUserData>
            </GuestLayout>

        </>
    )
}